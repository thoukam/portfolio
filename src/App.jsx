import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Quote from './components/Quote';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Background from './components/Background';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContact = useCallback(() => setShowContactForm(true), []);
  const closeContact = useCallback(() => setShowContactForm(false), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar onContactClick={openContact} />
      <main className="relative z-10">
        <Hero onContactClick={openContact} />
        <Quote />
        <About />
        <Expertise />
        <Projects />
        <Journey />
      </main>
      <Footer onContactClick={openContact} />
      <ContactForm show={showContactForm} onClose={closeContact} />
    </div>
  );
}
