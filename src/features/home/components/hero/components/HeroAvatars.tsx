const avatarList = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

export const HeroAvatars = () => (
    <div className="hero__avatars">
        {avatarList.map((src, i) => (
            <img key={i} src={src} alt={`User ${i + 1}`} />
        ))}
        <div className="hero__avatar-count">15k+</div>
    </div>
);
