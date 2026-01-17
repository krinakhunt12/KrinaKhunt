import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= -300 && rect.top <= 300;
      }
      return false;
    });
    if (currentSection) setActiveSection(currentSection);

    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 100;
      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
      }
    });
  }, []);

  useEffect(() => {
    // Reduced preloader time for faster experience
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading) return <Preloader />;

  return (
    <ThemeProvider>
      <div className={`relative min-h-screen transition-colors duration-500`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <CustomCursor />
        <Background />
        <Navbar activeSection={activeSection} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Chatbot />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;