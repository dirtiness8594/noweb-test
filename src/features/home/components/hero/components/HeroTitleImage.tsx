type HeroTitleImageProps = {
    src: string;
    alt: string;
};

export const HeroTitleImage = ({ src, alt }: HeroTitleImageProps) => (
    <img className="hero__title" src={src} alt={alt} />
);
