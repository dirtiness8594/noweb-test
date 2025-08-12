import { Difference } from './components/difference';
import { Experience } from './components/experience';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Stat } from './components/stats';
import { Workflow } from './components/workflow';

import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Experience />
            {/* <Services /> */}
            {/* <Stat /> */}
            ----- Missing /video
            {/* <Workflow /> */}
            {/* <Difference /> */}
        </>
    );
};

export default Home;
