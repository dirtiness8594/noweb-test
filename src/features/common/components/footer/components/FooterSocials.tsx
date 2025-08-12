export const FooterSocials = () => {
    return (
        <div className="footer__socials">
            <a href="#" aria-label="Facebook">
                <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter">
                <TwitterIcon />
            </a>
            <a href="#" aria-label="Instagram">
                <InstagramIcon />
            </a>
            <a href="#" aria-label="Behance">
                <BehanceIcon />
            </a>
        </div>
    );
};

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.03H8v-2.9h2.44V9.41c0-2.42 1.44-3.76 3.65-3.76 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.75-1.57 1.52v1.82h2.66l-.43 2.9h-2.23v7.03C18.34 21.23 22 17.08 22 12.07z" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.11 3c-2.63 0-4.52 2.49-3.95 5.02A12.94 12.94 0 013 4.11a4.48 4.48 0 001.39 6.01A4.41 4.41 0 012.8 9.7v.05a4.48 4.48 0 003.6 4.39 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.12A9 9 0 013 19.54a12.77 12.77 0 006.29 1.84c7.55 0 11.68-6.25 11.39-11.87A8.18 8.18 0 0023 3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
);

const BehanceIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 6H10a3 3 0 012.83 2H15v-1h4v1h-4v1h4v1h-4v1h4v1h-4v1h4v1h-4v1h4v1h-4v-1.17A3 3 0 0110 18H4.5V6zm1.5 2v2h4a1 1 0 000-2H6zm0 3v3h4a1.5 1.5 0 000-3H6zM18 14.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5zM18 16c-1.66 0-3-1.57-3-3.5s1.34-3.5 3-3.5 3 1.57 3 3.5-1.34 3.5-3 3.5zM16 8V7h4v1h-4z" />
    </svg>
);
