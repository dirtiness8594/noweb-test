import "../../styles/Header.scss";

type HeaderProps = {
    onOpenModal: () => void;
};

export const Header = ({ onOpenModal }: HeaderProps) => {
    console.log('Xis ', onOpenModal);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                {/* <span className="navbar__icon">📈</span>
                <span className="navbar__brand">NEX</span> */}
                <img src="/logo.png" alt="" />
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item navbar__item--active">Home</li>
                <li className="navbar__item">About Us</li>
                <li className="navbar__item">Portfolio</li>
                <li className="navbar__item">Pages</li>
                <li className="navbar__item">Blog</li>
                <li className="navbar__item">Contact Us</li>
            </ul>
            <div className="navbar__actions">
                <button onClick={onOpenModal} className="navbar__search">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <button className="navbar__quote">
                    Get A Quote
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};
