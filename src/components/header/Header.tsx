
type HeaderProps = {
    onOpenModal: () => void
}

export const Header = ({ onOpenModal }: HeaderProps) => {

    console.log("Xis ", onOpenModal)

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
                    🔍
                </button>
                <button className="navbar__quote">Get A Quote ⤴</button>
            </div>
        </nav>
    )
}
