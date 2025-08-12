type ExperienceBlockProps = {
    text: string;
    buttonText: string;
};

export const ExperienceBlock = ({ text, buttonText }: ExperienceBlockProps) => (
    <div className="experience__block">
        <p className="experience__text">{text}</p>
        <button className="experience__button">
            {buttonText}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    </div>
);
