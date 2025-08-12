import '../../styles/Stat.scss';

import { StatItem } from './components/StatItem';

const statsData = [
    { number: '35k+', label: 'Project\nComplete' },
    { number: '10k+', label: 'Happy\nCustomers' },
    { number: '25+', label: 'Years\nExperiences' },
    { number: '88', label: 'Awards\nAchievement' },
];

export const Stat = () => {
    return (
        <section className="stats">
            {statsData.map((stat, idx) => (
                <StatItem key={idx} number={stat.number} label={stat.label} />
            ))}
        </section>
    );
};
