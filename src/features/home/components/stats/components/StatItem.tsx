type StatItemProps = {
    number: string;
    label: string;
};

export const StatItem = ({ number, label }: StatItemProps) => {
    return (
        <div className="stats__item">
            <h3 className="stats__number">{number}</h3>
            <p className="stats__label">
                {label.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
};
