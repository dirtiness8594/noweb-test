import './App.css';
import { useState } from "react";
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import { Services } from './components/services';
import { Stat } from './components/stats';
import { Workflow } from './components/workflow';
import { Difference } from './components/difference';
import { Footer } from './components/footer';
import { Modal } from './components/modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        
        <Hero />
      <Experience />
      <Services />
      <Stat />

      ----- Missing /video


      <Workflow />
      <Difference />
      <Footer />
    </>
  )
}


export default App
