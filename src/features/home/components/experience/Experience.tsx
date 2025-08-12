import '../../styles/Experience.scss';

import { ExperienceBlock } from './components/ExperienceBlock';

export const Experience = () => {

    const text1 =
        "Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers.";

    return (
        <section className="experience">
            <div className="experience__content">
                <div className="experience__intro">
                    <h2 className="experience__title">
                        We Collaborate With A Few Disability Service
                        <br /> Providers To Create Inclusive Goods <br />
                        That Meet Their Requirements.
                    </h2>
                </div>
                <div className="experience__details">
                    <div className="experience__years">
                        <h3 className="experience__number">25+</h3>
                        <p className="experience__label">Years Of Experience</p>
                    </div>
                    <ExperienceBlock text={text1} buttonText="More About Us" />
                    <ExperienceBlock text={text1} buttonText="Get In Touch" />
                </div>
            </div>
            <div className="experience__brands">
                <div className="experience__brands-wrapper">
                    <p className="experience__brands-title">We Worked With Global Largest Brands</p>
                </div>
                <div className="experience__logos">
                    <img src="/L1.png" alt="Tech Logo 1" />
                    <img src="/L2.png" alt="Technology Logo 2" />
                    <img src="/L3.png" alt="Technology Logo 3" />
                    <img src="/L4.png" alt="Technology Logo 4" />
                    <img src="/L5.png" alt="System Logo 5" />
                </div>
            </div>
        </section>
    );
};
