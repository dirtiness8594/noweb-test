export const Hero = () => {
    return (
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

        <div className="hero__img">
            <img src="placeholder.co/700" alt="" />
        </div>
      </section>
    )
}
