type ServiceCardProps = {
    category: string;
    title: string;
    description: string;
    icon: string;
    isActive?: boolean;
};

export const ServiceCard = ({
    category,
    title,
    description,
    icon,
    isActive = false,
}: ServiceCardProps) => {
    return (
        <div className={`services__card ${isActive ? 'services__card--active' : ''}`}>
            <span className="services__category">{category}</span>
            <h3 className="services__card-title">{title}</h3>
            <div className="services__icon">
                <img src={icon} alt={title} />
            </div>
            <p className="services__card-text">{description}</p>
            <button
                className={`services__button ${isActive ? 'services__button--active' : ''}`}
                aria-label="Read more"
            >
                ➜
            </button>
        </div>
    );
};
