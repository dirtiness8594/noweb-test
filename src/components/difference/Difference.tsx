export const Difference = () => {
  return (
    <section className="difference">
      <div className="difference__left">
        <div className="difference__label-group">
          <span className="difference__dot difference__dot--filled" />
          <span className="difference__dot difference__dot--outlined" />
          <span className="difference__label">WHAT SETS US APART</span>
        </div>

        <h2 className="difference__title">
          Driving Digital Success with Strategy Design
        </h2>

        <p className="difference__text">
          We believe that the surest measure of success is when our partners
          with us more than half. It's more than just the visuals.
        </p>

        <img
          className="difference__image-main"
          src="/D1.png"
          alt="People collaborating on laptop"
        />
      </div>

      <div className="difference__right">
        <div className="difference__top">
          <img
            className="difference__image-small"
            src="/D2.png"
            alt="Meeting room"
          />
          <p className="difference__text-small">
            We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
            <br />
            <br />
            <br />
            <br />
            We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals.
          </p>
        </div>

        <div className="difference__middle">
          <p className="difference__text-block">
            Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks
          </p>
          <div className="difference__mission">
            <h4 className="difference__mission-title">Our Mission</h4>
            <p className="difference__mission-text">
              Conduct thorough market research to the fast target audience behaviours.
            </p>
          </div>
        </div>

        <div className="difference__bottom">
          <button className="difference__button">
            Contact Us <span className="difference__icon">➜</span>
          </button>


          <div className="difference__features">
            <div className="difference__feature">
              <div className="difference__feature-bg" />
              <img
                src="/D3.png"
                alt="Marketing Strategy"
                className="difference__feature-img"
              />
              <span className="difference__feature-label">
                Marketing Strategy
              </span>
            </div>
            <div className="difference__feature">
              <div className="difference__feature-bg" />
              <img
                src="D4.png"
                alt="UX/UI Solution"
                className="difference__feature-img"
              />
              <span className="difference__feature-label">UX/UI <br />Solution</span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
