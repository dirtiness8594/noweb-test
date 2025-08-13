type WorkflowStepProps = {
    number: string;
    title: string;
    description: string;
    iconSrc: string;
};

export const WorkflowStep = ({ number, title, description, iconSrc }: WorkflowStepProps) => {
    return (
        <div className="workflow__step">
            <div className="workflow__icon-circle">
                <span className="workflow__icon">
                    <img src={iconSrc} alt={title} />
                </span>
                <span className="workflow__arrow"></span>
                <span className="workflow__number">{number}</span>
            </div>
            <h3 className="workflow__step-title">{title}</h3>
            <p className="workflow__step-text">
                {description.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
};
