import '../../styles/Services.scss';

import { ServiceCard } from './components/ServiceCard';

const services = [
    {
        category: '• Visual Branding',
        title: 'Web Design And Development',
        icon: '/I1.png',
        description:
            "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate",
    },
    {
        category: '• Brand Strategy',
        title: 'Branding And Creative Services',
        icon: '/I2.png',
        description:
            "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate",
        isActive: true,
    },
    {
        category: '• Identity Build',
        title: 'Creative Digital Agency',
        icon: '/I3.png',
        description:
            "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate",
    },
];

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
                {services.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </div>
        </section>
    );
};
