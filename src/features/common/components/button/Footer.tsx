import '../../styles/Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            {/* CTA */}
            <div className="footer__cta">
                <div className="footer__cta-texts">
                    <h2 className="footer__title">
                        Let’s Create
                        <br />
                        Something Great
                    </h2>
                    <p className="footer__subtitle">
                        We shift you from today’s reality to tomorrow’s potential, ensuring
                    </p>
                </div>

                <button className="footer__cta-button-circle">
                    Let’s Talk <span className="footer__cta-icon">➜</span>
                </button>
            </div>

            {/* Line Divider */}
            <div className="footer__divider" />

            {/* Footer Bottom */}
            <div className="footer__bottom">
                <div className="footer__links">
                    <div className="footer__links-left">
                        <a href="#">About Company</a>
                        <a href="#">Our Careers</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="footer__links-right">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>

                <div className="footer__bottom-bar">
                    <div className="footer__socials">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2025 Nex. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
