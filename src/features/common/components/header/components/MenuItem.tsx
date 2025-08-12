type MenuItem = {
    label: string;
    href: string;
    subPages?: { label: string; href: string }[];
};

export const MenuItem = ({ label, href, subPages }: MenuItem) => {
    return (
        <li className="header__item">
            <a href={href} className="header__link">
                {label}
                {subPages && <ChevronDownIcon />}
            </a>
            {subPages && (
                <ul className="header__submenu">
                    {subPages.map(({ label: subLabel, href: subHref }) => (
                        <li key={subLabel} className="header__subitem">
                            <a href={subHref} className="header__sublink">
                                {subLabel}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
