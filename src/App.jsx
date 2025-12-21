import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import NMadCompanion from './components/NMadCompanion';
import ChatInterface from './components/ChatInterface';
import config from './config.json';

function App() {

  // Smooth scrolling implementation for React
  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target.closest('a.js-scroll-trigger');
      if (target && target.hash && target.hash !== '#') {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  // Navbar Shrink Logic
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState('featured'); // 'featured' or 'personal'
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const navbarCollapse = () => {
      if (window.scrollY > 100) {
        setNavbarShrink(true);
      } else {
        setNavbarShrink(false);
      }
    };

    // Run once on mount to handle refresh position
    navbarCollapse();

    window.addEventListener('scroll', navbarCollapse);
    return () => window.removeEventListener('scroll', navbarCollapse);
  }, []);

  const handleSectionToggle = (section) => {
    setActiveCanvas(section);
    // Add small delay to allow render before scrolling if needed, 
    // but usually we want to stay in place or scroll to top of that section
    setTimeout(() => {
      const id = section === 'featured' ? 'games-portfolio' : 'personal_projects';
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="page-top">
      {/* NMad AI Companion */}
      {config.enableChat && (
        <>
          <NMadCompanion onToggleChat={() => setChatOpen(!chatOpen)} />
          <ChatInterface isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </>
      )}

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg bg-secondary fixed-top ${navbarShrink ? 'navbar-shrink' : ''}`} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Game Dev Portfolio</a>
          <button
            className="navbar-toggler font-weight-bold text-white rounded"
            style={{ borderColor: 'var(--accent-cyan)', background: 'transparent' }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">ABOUT</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activeCanvas === 'featured' ? 'active' : ''}`}
                  href="#games-portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionToggle('featured');
                  }}
                >
                  FEATURED PROJECTS
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activeCanvas === 'personal' ? 'active' : ''}`}
                  href="#personal_projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionToggle('personal');
                  }}
                >
                  PERSONAL PROJECTS
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header / Hero */}
      <header className="bg-indigo">
        <Header onToggleSection={handleSectionToggle} />
      </header>

      {/* About Section */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <About />
      </section>

      {/* Projects Section (Featured & Personal) */}
      <ProjectsList activeSection={activeCanvas} onToggleSection={handleSectionToggle} />

      {/* Footer */}
      <footer className="footer text-center" id="contact">
        <Footer />
      </footer>

      {/* Copyright */}
      <section className="copyright py-4 text-center text-white">
        <div className="container"><small className="pre-wrap">Copyright © Raul Ibarra Aranda 2025</small></div>
      </section>

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div >
  )
}

export default App;
