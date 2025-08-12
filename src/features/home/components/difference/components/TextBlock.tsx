type TextBlockProps = {
    title: string;
    children: React.ReactNode;
};

export const TextBlock = ({ title, children }: TextBlockProps) => (
    <div className="difference__mission">
        <h4 className="difference__mission-title">{title}</h4>
        <p className="difference__mission-text">{children}</p>
    </div>
);
