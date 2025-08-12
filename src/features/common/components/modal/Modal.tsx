import React, { useState } from 'react';
import "../../styles/Modal.scss";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

interface CepData {
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
}

export function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    console.log('Open ', isOpen);
    const [cep, setCep] = useState<string>('');
    const [data, setData] = useState<CepData | null>(null);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const sanitizedCep = cep.replace(/\D/g, '');
        if (sanitizedCep.length !== 8) {
            setError('Digite um CEP válido com 8 dígitos.');
            setData(null);
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
            const result: CepData = await response.json();

            if (result.erro) {
                setError('CEP não encontrado.');
                setData(null);
            } else {
                setError('');
                setData(result);
            }
        } catch {
            setError('Erro ao buscar o CEP.');
            setData(null);
        }
    };

    return (
        <div className="modal__overlay">
            <div className="modal__box">
                <button onClick={onClose}>Fechar</button>

                <h2 className="modal__title">Buscar CEP</h2>
                <form onSubmit={handleSubmit} className="modal__form">
                    <input
                        type="text"
                        placeholder="Digite o CEP"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        className="modal__input"
                    />
                    <button type="submit" className="modal__submit">
                        Buscar
                    </button>
                </form>

                {error && <p className="modal__error">{error}</p>}

                {data && (
                    <div className="modal__result">
                        <input readOnly value={data.logradouro} placeholder="Logradouro" />
                        <input readOnly value={data.complemento} placeholder="Complemento" />
                        <input readOnly value={data.bairro} placeholder="Bairro" />
                        <input readOnly value={data.localidade} placeholder="Cidade" />
                        <input readOnly value={data.uf} placeholder="UF" />
                    </div>
                )}
            </div>
        </div>
    );
}
