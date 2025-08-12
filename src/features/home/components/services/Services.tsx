import '../../styles/Services.scss';

export const Services = () => {
    return (
        <section className="services">
            <div className="services__header">
                <div className="services__label">🟠 SERVICES</div>
                <h2 className="services__title">
                    Empowering Brands Through
                    <br />
                    Strategic Digital Services
                </h2>
                <p className="services__description">
                    Established in 1995, NEXIN has been a leading force in the digital landscape for
                    over two decades. We're a passionate team of designers.
                </p>
            </div>

            <div className="services__grid">
                <div className="services__card">
                    <span className="services__category">• Visual Branding</span>
                    <h3 className="services__card-title">Web Design And Development</h3>
                    <div className="services__icon">
                        <img src="/I1.png" alt="" />
                    </div>
                    <p className="services__card-text">
                        Established in 1995, NEXIN has been leading force in the digital landscape
                        for over two decades. We're a passionate
                    </p>
                    <button className="services__button">➜</button>
                </div>

                <div className="services__card services__card--active">
                    <span className="services__category">• Brand Strategy</span>
                    <h3 className="services__card-title">Branding And Creative Services</h3>
                    <div className="services__icon">
                        <img src="/I2.png" alt="" />
                    </div>
                    <p className="services__card-text">
                        Established in 1995, NEXIN has been leading force in the digital landscape
                        for over two decades. We're a passionate
                    </p>
                    <button className="services__button services__button--active">➜</button>
                </div>

                <div className="services__card">
                    <span className="services__category">• Identity Build</span>
                    <h3 className="services__card-title">Creative Digital Agency</h3>
                    <div className="services__icon">
                        <img src="/I3.png" alt="" />
                    </div>
                    <p className="services__card-text">
                        Established in 1995, NEXIN has been leading force in the digital landscape
                        for over two decades. We're a passionate
                    </p>
                    <button className="services__button">➜</button>
                </div>
            </div>
        </section>
    );
};
