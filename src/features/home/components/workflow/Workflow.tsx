import '../../styles/Workflow.scss';

import { WorkflowStep } from './components/WorkflowStep';

const steps = [
    {
        number: '01',
        title: 'Research and Strategy',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/icons/icon4.png',
    },
    {
        number: '02',
        title: 'Plan Customization',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/icons/icon5.png',
    },
    {
        number: '03',
        title: 'Finished & User Testing',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/icons/icon6.png',
    },
];

export const Workflow = () => {
    return (
        <section className="workflow">
            <div className="workflow__container">
                <div className="workflow__header">
                    <span className="workflow__label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#121212" />
                            <circle cx="16" cy="8" r="7.5" stroke="#FF6633" />
                        </svg>
                        WORKFLOW</span>
                    <h2 className="workflow__title">How We Work</h2>
                </div>
                <div className="workflow__steps">
                    {steps.map(({ number, title, description, iconSrc }) => (
                        <WorkflowStep
                            key={number}
                            number={number}
                            title={title}
                            description={description}
                            iconSrc={iconSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
