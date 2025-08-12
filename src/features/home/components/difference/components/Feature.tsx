type FeatureProps = {
    src: string;
    alt: string;
    label: React.ReactNode;
};

export const Feature = ({ src, alt, label }: FeatureProps) => (
    <div className="difference__feature">
        <div className="difference__feature-bg" />
        <img src={src} alt={alt} className="difference__feature-img" />
        <span className="difference__feature-label">{label}</span>
    </div>
);
