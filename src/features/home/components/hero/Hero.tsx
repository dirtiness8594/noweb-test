import '../../styles/Hero.scss';

import { HeroTag } from './components/HeroTag';
import { HeroTitleImage } from './components/HeroTitleImage';
import { HeroDescription } from './components/HeroDescription';
import { HeroCTAButton } from './components/HeroCTAButton';
import { HeroReviews } from './components/HeroReviews';
import { HeroWebDesignBadge } from './components/HeroWebDesignBadge';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <HeroTag />
                <div className="hero__row hero__row--middle">
                    <div className="hero__left">
                        <HeroTitleImage src="/Digital.png" alt="Digital Services" />
                        <div className="hero__left__mobile">
                            <HeroTitleImage src="/Solution.png" alt="Creative Solutions" />
                        </div>
                    </div>
                    <div className="hero__right">
                        <HeroDescription />
                        <HeroCTAButton />
                        <HeroReviews />
                    </div>
                </div>
                <div className="hero__row hero__row--bottom">
                    <HeroWebDesignBadge />
                    <div className="hero__right">
                        <HeroTitleImage src="/Solution.png" alt="Creative Solutions" />
                    </div>
                </div>
            </div>
            <img className="hero__banner" src="/herooo.png" alt="Hero Banner" />
        </section>
    );
};
