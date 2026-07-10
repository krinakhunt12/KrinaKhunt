import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme';
import Preloader from './components/Preloader';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

// Code-split pages for performance / smaller initial bundle size
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="relative min-h-[100dvh]" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Background />
            <Navbar />

            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogPost />} />
              </Routes>
            </Suspense>

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
    </HelmetProvider>
  );
};

export default App;