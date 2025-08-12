import '../../styles/Hero.scss';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__tagline">
                    <p>
                        Great Design Services <br />
                        Without The Pretentiousness.!
                    </p>
                </div>

                <div className="hero__row hero__row--middle">
                    <div className="hero__left">
                        <img className="hero__title" src="/Digital.png" alt="" />
                    </div>
                    <div className="hero__right">
                        <p className="hero__description">
                            We believe that the surest measure of success is when our partners with
                            us more than half It's more than just the visuals. We're here to support
                            your growth.
                        </p>

                        <button className="hero__button">
                            View All Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7 17L17 7M17 7H8M17 7V16"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="hero__reviews">
                            <div className="hero__avatars">
                                <img src="/avatar1.png" alt="User 1" />
                                <img src="/avatar2.png" alt="User 2" />
                                <img src="/avatar3.png" alt="User 3" />
                                <div className="hero__avatar-count">15k+</div>
                            </div>
                            <span className="hero__rating">
                                Excellent <strong>4.000+</strong> Reviews
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hero__row hero__row--bottom">
                    <div className="hero__web-design">
                        <span>
                            WEB <br />
                            DESIGN
                        </span>
                        <img src="/Avatar.png" alt="emoji" className="hero__emoji" />
                    </div>

                    <div className="hero__right">
                        <img className="hero__title" src="/Solution.png" alt="" />
                    </div>
                </div>
            </div>

            <img className="hero__banner" src="/herooo.png" alt="" />
        </section>
    );
};
