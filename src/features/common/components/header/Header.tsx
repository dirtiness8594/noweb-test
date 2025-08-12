import { useState } from 'react';
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

type MenuItemType = {
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

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <button
                    className="header__hamburger"
                    aria-label="Open menu"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <HamburgerIcon />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <button
                        className="mobile-menu__close"
                        aria-label="Close menu"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        ✕
                    </button>

                    <ul className="mobile-menu__list">
                        {menuItems.map((item) => (
                            <MobileMenuItem key={item.label} item={item} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

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

const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const MobileMenuItem = ({ item }: { item: MenuItemType }) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="mobile-menu__item">
            {item.subPages ? (
                <>
                    <button
                        className="mobile-menu__item-button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        {item.label}
                        <span className={`mobile-menu__arrow ${open ? 'open' : ''}`}>▸</span>
                    </button>
                    {open && (
                        <ul className="mobile-menu__sublist">
                            {item.subPages.map((sub) => (
                                <li key={sub.label} className="mobile-menu__subitem">
                                    <a href={sub.href}>{sub.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <a href={item.href} className="mobile-menu__link">
                    {item.label}
                </a>
            )}
        </li>
    );
};