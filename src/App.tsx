import './App.css';
import React, { useState } from "react";

interface CepData {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cep, setCep] = useState<string>("");
  const [data, setData] = useState<CepData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedCep = cep.replace(/\D/g, "");
    if (sanitizedCep.length !== 8) {
      setError("Digite um CEP válido com 8 dígitos.");
      setData(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
      const result: CepData = await response.json();

      if (result.erro) {
        setError("CEP não encontrado.");
        setData(null);
      } else {
        setError("");
        setData(result);
      }
    } catch {
      setError("Erro ao buscar o CEP.");
      setData(null);
    }
  };


  return (
    <>


      <div className="modal__overlay">
        <div className="modal__box">
          <button className="modal__close" onClick={() => setIsModalOpen(true)}>🔍</button>

          <h2 className="modal__title">Buscar CEP</h2>
          <form onSubmit={handleSubmit} className="modal__form">
            <input
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="modal__input"
            />
            <button type="submit" className="modal__submit">Buscar</button>
          </form>

          {error && <p className="modal__error">{error}</p>}

          {data && (
            <div className="modal__result">
              <input readOnly value={data.logradouro} placeholder="Logradouro" />
              <input readOnly value={data.complemento} placeholder="Complemento" />
              <input readOnly value={data.bairro} placeholder="Bairro" />
              <input readOnly value={data.localidade} placeholder="Cidade" />
              <input readOnly value={data.uf} placeholder="UF" />
            </div>
          )}
        </div>
      </div>



      <nav className="navbar">
        <div className="navbar__logo">
          <span className="navbar__icon">📈</span>
          <span className="navbar__brand">NEX</span>
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

          <button onClick={() => setIsModalOpen(true)} className="navbar__search">
            🔍
          </button>
          <button className="navbar__quote">Get A Quote ⤴</button>
        </div>
      </nav>





      <section className="hero">
        <div className="hero__text">
          <p className="hero__tagline">Great Design Services<br />Without The Pretentiousness!</p>
          <h1 className="hero__title">
            <span className="hero__title--highlight">Digital</span>{" "}
            <span className="hero__title--normal">Solution</span>
          </h1>
          <p className="hero__description">
            We believe that the surest measure of success is when our partners win.
            More than half, it's more than just the visuals. We're here to support your growth.
          </p>
          <button className="hero__button">View All Services ⤴</button>
        </div>
        <div className="hero__badge">
          <div className="hero__web-design">
            <span>WEB DESIGN</span>
            <div className="hero__emoji">🧑‍🎤</div>
          </div>
          <div className="hero__reviews">
            <div className="hero__avatars">
              <img src="/avatar1.png" alt="User 1" />
              <img src="/avatar1.png" alt="User 2" />
              <img src="/avatar1.png" alt="User 3" />
              <span>15k+</span>
            </div>
            <span className="hero__rating">Excellent <strong>4.000+</strong> Reviews</span>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="experience__content">
          <div className="experience__intro">
            <h2 className="experience__title">
              We Collaborate With A Few Disability Service Providers To Create Inclusive Goods That Meet Their Requirements.
            </h2>
          </div>

          <div className="experience__details">
            <div className="experience__years">
              <h3 className="experience__number">25+</h3>
              <p className="experience__label">Years Of Experience</p>
            </div>

            <div className="experience__block">
              <p className="experience__text">
                Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers.
              </p>
              <button className="experience__button">More About Us ⤴</button>
            </div>

            <div className="experience__block">
              <p className="experience__text">
                Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers.
              </p>
              <button className="experience__button">Get In Touch ⤴</button>
            </div>
          </div>
        </div>

        <div className="experience__brands">
          <div className="experience__brands-wrapper">
            <p className="experience__brands-title">We Worked With Global Largest Brands</p>
          </div>

          {/* <p className="experience__brands-title">We Worked With Global Largest Brands</p> */}
          <div className="experience__logos">
            <img src="/L1.png" alt="Tech Logo 1" />
            <img src="/L2.png" alt="Technology Logo 2" />
            <img src="/L3.png" alt="Technology Logo 3" />
            <img src="/L4.png" alt="Technology Logo 4" />
            <img src="/L5.png" alt="System Logo 5" />
          </div>
        </div>
      </section>
      (
      <section className="services">
        <div className="services__header">
          <div className="services__label">🟠 SERVICES</div>
          <h2 className="services__title">
            Empowering Brands Through<br />Strategic Digital Services
          </h2>
          <p className="services__description">
            Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers.
          </p>
        </div>

        <div className="services__grid">
          <div className="services__card">
            <span className="services__category">• Visual Branding</span>
            <h3 className="services__card-title">Web Design And Development</h3>
            <div className="services__icon">
              <img src="/I1.png" alt="" srcset="" />
            </div>
            <p className="services__card-text">
              Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate
            </p>
            <button className="services__button">➜</button>
          </div>

          <div className="services__card services__card--active">
            <span className="services__category">• Brand Strategy</span>
            <h3 className="services__card-title">Branding And Creative Services</h3>
            <div className="services__icon">
              <img src="/I2.png" alt="" srcset="" />
            </div>
            <p className="services__card-text">
              Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate
            </p>
            <button className="services__button services__button--active">➜</button>
          </div>

          <div className="services__card">
            <span className="services__category">• Identity Build</span>
            <h3 className="services__card-title">Creative Digital Agency</h3>
            <div className="services__icon">
              <img src="/I3.png" alt="" srcset="" />
            </div>
            <p className="services__card-text">
              Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate
            </p>
            <button className="services__button">➜</button>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="stats__item">
          <h3 className="stats__number">35k+</h3>
          <p className="stats__label">Project<br />Complete</p>
        </div>

        <div className="stats__item">
          <h3 className="stats__number">10k+</h3>
          <p className="stats__label">Happy<br />Customers</p>
        </div>

        <div className="stats__item">
          <h3 className="stats__number">25+</h3>
          <p className="stats__label">Years<br />Experiences</p>
        </div>

        <div className="stats__item">
          <h3 className="stats__number">88</h3>
          <p className="stats__label">Awards<br />Achievement</p>
        </div>
      </section>


      <section className="workflow">
        <div className="workflow__header">
          <span className="workflow__label">🟠 WORKFLOW</span>
          <h2 className="workflow__title">How We Work</h2>
        </div>

        <div className="workflow__steps">
          <div className="workflow__step">
            <div className="workflow__icon-circle">
              <span className="workflow__icon">
                <img src="/I4.png" alt="" srcset="" />
              </span>
            <span className="workflow__arrow"></span>
            <span className="workflow__number">01</span>
            </div>
            <h3 className="workflow__step-title">Research and Strategy</h3>
            <p className="workflow__step-text">
              Conduct thorough market of the research to the fast target audience behaviors.<br />
              Submit as many design tasks
            </p>
          </div>

          {/* <div className="workflow__arrow"></div> */}

          <div className="workflow__step">
            <div className="workflow__icon-circle">
              <span className="workflow__icon">
                <img src="/I5.png" alt="" srcset="" />
              </span>
            <span className="workflow__arrow"></span>
            <span className="workflow__number">02</span>
            </div>
            <h3 className="workflow__step-title">Plan Customization</h3>
            <p className="workflow__step-text">
              Conduct thorough market of the research to the fast target audience behaviors.<br />
              Submit as many design tasks
            </p>
          </div>

          {/* <div className="workflow__arrow"></div> */}

          <div className="workflow__step">
            <div className="workflow__icon-circle">
              <span className="workflow__icon">
                <img src="/I6.png" alt="" srcset="" />
              </span>
            <span className="workflow__arrow"></span>
            <span className="workflow__number">03</span>
            </div>
            <h3 className="workflow__step-title">Finished & User Testing</h3>
            <p className="workflow__step-text">
              Conduct thorough market of the research to the fast target audience behaviors.<br />
              Submit as many design tasks
            </p>
          </div>
        </div>
      </section>


      <section className="difference">
        <div className="difference__left">
          <span className="difference__label">🟠 WHAT SETS US APART</span>
          <h2 className="difference__title">Driving Digital Success With Strategy Design</h2>
          <p className="difference__text">
            We believe that the surest measure of success is when our partners with us more than half. It's more than just the visuals.
          </p>
          <img
            className="difference__image-main"
            src="#"
            alt="People collaborating on laptop"
          />
        </div>

        <div className="difference__right">
          <div className="difference__top">
            <img className="difference__image-small" src="#" alt="Meeting room" />
            <p className="difference__text-small">
              Conduct thorough market research to the fast target audience behaviours.
              Submit as many design tasks
            </p>
          </div>

          <div className="difference__middle">
            <p className="difference__text-block">
              We believe that the surest measure of success is when our partners with us more than half. It's more than just the visuals. We're here to support your growth.
            </p>
            <p className="difference__text-block">
              We believe that the surest measure of success is when our partners with us more than half. It's more than just the visuals.
            </p>
          </div>

          <div className="difference__bottom">
            <button className="difference__button">Contact Us ➜</button>

            <div className="difference__features">
              <div className="difference__feature">
                <img src="#" alt="Marketing Strategy" className="difference__feature-img" />
                <span className="difference__feature-label">Marketing Strategy</span>
              </div>
              <div className="difference__feature">
                <img src="#" alt="UX/UI Solution" className="difference__feature-img" />
                <span className="difference__feature-label">UX/UI Solution</span>
              </div>
            </div>

            <div className="difference__mission">
              <h4 className="difference__mission-title">Our Mission</h4>
              <p className="difference__mission-text">
                Conduct thorough market research to the fast target audience behaviours.
              </p>
            </div>
          </div>
        </div>
      </section>



      <footer className="footer">
        {/* CTA */}
        <div className="footer__cta">
          <div className="footer__cta-texts">
            <h2 className="footer__title">Let’s Create<br />Something Great</h2>
            <p className="footer__subtitle">
              We shift you from today’s reality to tomorrow’s potential, ensuring
            </p>
          </div>
          <button className="footer__cta-button">Let’s Talk ➜</button>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
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

          <div className="footer__socials">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">I</a>
            <a href="#">Bē</a>
          </div>

          <div className="footer__copyright">
            Copyright © 2025 Nex. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}


export default App
