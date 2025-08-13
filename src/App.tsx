import "./App.css";

import "../src/styles/main.scss";

import { useState } from "react";
import { Header } from "./features/common/components/header";
import { Modal } from "./features/common/components/modal";
import { Footer } from "./features/common/components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";

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
