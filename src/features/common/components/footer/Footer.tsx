import "../../styles/Footer.scss";

import { FooterBottomBar } from "./components/FooterBottomBar";
import { FooterCTA } from "./components/FooterCTA";
import { FooterLinks } from "./components/FooterLinks";

export const Footer = () => {
    return (
        <footer className="footer">
            <FooterCTA />
            <div className="footer__container">
                <div className="footer__divider" />
                <div className="footer__bottom">
                    <FooterLinks />
                    <FooterBottomBar />
                </div>
            </div>
        </footer>
    );
};
