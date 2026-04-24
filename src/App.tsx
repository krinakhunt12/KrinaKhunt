import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Preloader from './components/Preloader';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
          <Background />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* <Chatbot /> */}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                fontSize: '14px',
                padding: '12px 16px',
                borderRadius: '12px'
              },
              success: {
                iconTheme: {
                  primary: 'var(--accent-1)',
                  secondary: 'var(--bg-primary)',
                },
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
