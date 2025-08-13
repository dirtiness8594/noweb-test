import { Reveal } from "../common/components/reveal";
import { Difference } from "./components/difference";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Stat } from "./components/stats";
import { Video } from "./components/video";
import { Workflow } from "./components/workflow";

import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <Reveal>
                <Hero />
            </Reveal>
            <Reveal delay={0.1}>
                <Experience />
            </Reveal>
            <Reveal delay={0.2}>
                <Services />
            </Reveal>
            <Reveal delay={0.3}>
                <Stat />
            </Reveal>
            <Reveal delay={0.4}>
                <Video />
            </Reveal>
            <Reveal delay={0.5}>
                <Workflow />
            </Reveal>
            <Reveal delay={0.6}>
                <Difference />
            </Reveal>
        </>
    );
};

export default Home;
