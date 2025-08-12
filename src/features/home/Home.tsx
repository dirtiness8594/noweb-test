import { Difference } from './components/difference';
import { Experience } from './components/experience';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Stat } from './components/stats';
import { Video } from './components/video';
import { Workflow } from './components/workflow';

import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Experience />
            <Services />
            <Stat />
            <Video />
            <Workflow />
            <Difference />
        </>
    );
};

export default Home;
