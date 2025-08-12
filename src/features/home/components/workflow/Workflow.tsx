export const Workflow = () => {
    return (
        <section className="workflow">
            <div className="workflow__header">
                <span className="workflow__label">🟠 WORKFLOW</span>
                <h2 className="workflow__title">How We Work</h2>
            </div>

            <div className="workflow__steps">
                <div className="workflow__step">
                    <div className="workflow__icon-circle">
                        <span className="workflow__icon">
                            <img src="/I4.png" alt="" />
                        </span>
                        <span className="workflow__arrow"></span>
                        <span className="workflow__number">01</span>
                    </div>
                    <h3 className="workflow__step-title">Research and Strategy</h3>
                    <p className="workflow__step-text">
                        Conduct thorough market of the research to the fast target audience
                        behaviors.
                        <br />
                        Submit as many design tasks
                    </p>
                </div>

                {/* <div className="workflow__arrow"></div> */}

                <div className="workflow__step">
                    <div className="workflow__icon-circle">
                        <span className="workflow__icon">
                            <img src="/I5.png" alt="" />
                        </span>
                        <span className="workflow__arrow"></span>
                        <span className="workflow__number">02</span>
                    </div>
                    <h3 className="workflow__step-title">Plan Customization</h3>
                    <p className="workflow__step-text">
                        Conduct thorough market of the research to the fast target audience
                        behaviors.
                        <br />
                        Submit as many design tasks
                    </p>
                </div>

                {/* <div className="workflow__arrow"></div> */}

                <div className="workflow__step">
                    <div className="workflow__icon-circle">
                        <span className="workflow__icon">
                            <img src="/I6.png" alt="" />
                        </span>
                        <span className="workflow__arrow"></span>
                        <span className="workflow__number">03</span>
                    </div>
                    <h3 className="workflow__step-title">Finished & User Testing</h3>
                    <p className="workflow__step-text">
                        Conduct thorough market of the research to the fast target audience
                        behaviors.
                        <br />
                        Submit as many design tasks
                    </p>
                </div>
            </div>
        </section>
    );
};
