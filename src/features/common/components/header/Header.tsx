import '../../styles/Header.scss';
import { MenuItem } from './components/MenuItem';

type HeaderProps = {
    onOpenModal: () => void;
};

type MenuItem = {
    label: string;
    href: string;
    subPages?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    {
        label: 'Pages',
        href: '/pages',
        subPages: [
            { label: 'Team', href: '/pages/team' },
            { label: 'FAQ', href: '/pages/faq' },
            { label: 'Pricing', href: '/pages/pricing' },
        ],
    },
    {
        label: 'Blog',
        href: '/blog',
        subPages: [
            { label: 'Latest Posts', href: '/blog/latest' },
            { label: 'Categories', href: '/blog/categories' },
        ],
    },
    { label: 'Contact Us', href: '/contact' },
];

export const Header = ({ onOpenModal }: HeaderProps) => {
    return (
        <nav className="header">
            <div className="header__logo">
                <img src="/logo.png" alt="Logo" />
            </div>

            <ul className="header__menu">
                {menuItems.map(item => (
                    <MenuItem key={item.label} {...item} />
                ))}
            </ul>

            <div className="header__actions">
                <button onClick={onOpenModal} className="header__search" aria-label="Search">
                    <SearchIcon />
                </button>
                <button className="header__quote">
                    Get A Quote
                    <QuoteIcon />
                </button>
            </div>
        </nav>
    );
};

// Ícones

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
