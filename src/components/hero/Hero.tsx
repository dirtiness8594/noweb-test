export const Hero = () => {
  return (
    <section className="hero">
      {/* Linha 1 - Tagline */}
      <div className="hero__tagline">
        <p>
          Great Design Services <br />
          Without The Pretentiousness.!
        </p>
      </div>

      {/* Linha 2 - Digital + Texto/Botão/Reviews */}
      <div className="hero__row hero__row--middle">
        <div className="hero__left">
          <h1 className="hero__title">Digital</h1>
        </div>
        <div className="hero__right">
          <p className="hero__description">
            We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
          </p>

          <button className="hero__button">View All Services ⤴</button>

          <div className="hero__reviews">
            <div className="hero__avatars">
              <img src="/avatar1.png" alt="User 1" />
              <img src="/avatar2.png" alt="User 2" />
              <img src="/avatar3.png" alt="User 3" />
              <div className="hero__avatar-count">15k+</div>
            </div>
            <span className="hero__rating">
              Excellent <strong>4.000+</strong> Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Linha 3 - WEB DESIGN + Solution */}
      <div className="hero__row hero__row--bottom">
        <div className="hero__web-design">
          <span>WEB DESIGN</span>
          <img
            src="/avatar1.png"
            alt="emoji"
            className="hero__emoji"
          />
        </div>

        <div className="hero__right">
          <h1 className="hero__title">Solution</h1>
        </div>
      </div>
    </section>
  )
}
