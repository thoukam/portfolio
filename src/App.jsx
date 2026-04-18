import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import DistinctionTeaser from './components/DistinctionTeaser';
import Distinction from './components/Distinction';
import FuturisticBackground from './components/FuturisticBackground';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => setShowContactForm(true);
  const handleCloseContact = () => setShowContactForm(false);

  return (
    <div className="relative min-h-screen">
      <FuturisticBackground />
      <Navbar onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <About />
      <DistinctionTeaser onContactClick={handleContactClick} />
      <Skills />
      <Projects />
      <Experience />
      <Distinction />
      <Footer onContactClick={handleContactClick} />
      <ContactForm show={showContactForm} onClose={handleCloseContact} />
    </div>
  );
}
