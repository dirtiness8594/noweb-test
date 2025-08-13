const avatarList = ["/hero/avatar1.png", "/hero/avatar2.png", "/hero/avatar3.png"];

export const HeroAvatars = () => (
    <div className="hero__avatars">
        {avatarList.map((src, i) => (
            <img key={i} src={src} alt={`User ${i + 1}`} />
        ))}
        <div className="hero__avatar-count">15k+</div>
    </div>
);
