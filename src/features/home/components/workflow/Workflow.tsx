import '../../styles/Workflow.scss';

import { WorkflowStep } from './components/WorkflowStep';

const steps = [
    {
        number: '01',
        title: 'Research and Strategy',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/I4.png',
    },
    {
        number: '02',
        title: 'Plan Customization',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/I5.png',
    },
    {
        number: '03',
        title: 'Finished & User Testing',
        description: `Conduct thorough market of the research to the fast target audience behaviors.\nSubmit as many design tasks`,
        iconSrc: '/I6.png',
    },
];

export const Workflow = () => {
    return (
        <section className="workflow">
            <div className="workflow__container">
                <div className="workflow__header">
                    <span className="workflow__label">🟠 WORKFLOW</span>
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
