import "../../styles/Difference.scss";
import { Feature } from "./components/Feature";
import { TextBlock } from "./components/TextBlock";

export const Difference = () => {
    return (
        <section className="difference">
            <div className="difference__container">
                <div className="difference__left">
                    <div className="difference__label-group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="16"
                            viewBox="0 0 24 16"
                            fill="none"
                        >
                            <circle cx="8" cy="8" r="8" fill="#121212" />
                            <circle cx="16" cy="8" r="7.5" stroke="#FF6633" />
                        </svg>
                        <span className="difference__label">WHAT SETS US APART</span>
                    </div>
                    <h2 className="difference__title">
                        Driving Digital Success with Strategy Design
                    </h2>
                    <p className="difference__text">
                        We believe that the surest measure of success is when our partners with us
                        more than half. It's more than just the visuals.
                    </p>
                    <img
                        className="difference__image-main"
                        src="/difference/main.png"
                        alt="People collaborating on laptop"
                    />
                </div>
                <div className="difference__right">
                    <div className="difference__top">
                        <img
                            className="difference__image-small"
                            src="/difference/secundary.png"
                            alt="Meeting room"
                        />
                        <p className="difference__text-small">
                            We believe that the surest measure of success is when our partners with
                            us more than half It's more than just the visuals. We're here to support
                            your growth.
                            <br />
                            <br />
                            We believe that the surest measure of success is when our partners with
                            us more than half It's more than just the visuals.
                        </p>
                    </div>
                    <div className="difference__middle">
                        <p className="difference__text-block">
                            Conduct thorough market research to the fast target audience behaviours.
                            Submit as many design tasks
                        </p>
                        <TextBlock title="Our Mission">
                            Conduct thorough market research to the fast target audience behaviours.
                        </TextBlock>
                    </div>
                    <div className="difference__bottom">
                        <button className="difference__button">
                            Contact Us <span className="difference__icon">➜</span>
                        </button>
                        <div className="difference__features">
                            <Feature
                                src="/difference/bubble1.png"
                                alt="Marketing Strategy"
                                label="Marketing Strategy"
                            />
                            <Feature
                                src="/difference/bubble2.png"
                                alt="UX/UI Solution"
                                label={
                                    <>
                                        UX/UI <br /> Solution
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
