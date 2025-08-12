import './App.css';
import { useState } from 'react';
import { Header } from './features/home/components/header';
import { Hero } from './features/home/components/hero';
import { Experience } from './features/home/components/experience';
import { Services } from './features/home/components/services';
import { Stat } from './features/home/components/stats';
import { Workflow } from './features/home/components/workflow';
import { Difference } from './features/home/components/difference';
import { Footer } from './features/home/components/footer';
import { Modal } from './features/home/components/modal';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header onOpenModal={() => setIsModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>

            <Footer />
        </>
    );
}

export default App;
