export interface CepData {
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetchCep(cep: string): Promise<CepData> {
    const sanitizedCep = cep.replace(/\D/g, "");

    if (sanitizedCep.length !== 8) {
        throw new Error("Digite um CEP válido com 8 dígitos.");
    }

    const response = await fetch(`${baseUrl}/${sanitizedCep}/json/`);
    const result: CepData = await response.json();

    if (result.erro) {
        throw new Error("CEP não encontrado.");
    }

    return result;
}
