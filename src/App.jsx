import { useEffect, useState, useLayoutEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import NMadCompanion from './components/NMadCompanion';
import ChatInterface from './components/ChatInterface';
import config from './config.json';

function App() {
  // Theme Logic
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Navbar Shrink Logic
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState('featured'); // 'featured' or 'personal'
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialMessage, setChatInitialMessage] = useState('');
  const [chatShouldExpand, setChatShouldExpand] = useState(false);

  // Handler for opening chat with a pre-filled message (e.g., from Resume Request button)
  const handleOpenChatWithMessage = (message) => {
    setChatInitialMessage(message);
    setChatShouldExpand(true); // Open chat in expanded mode
    setChatOpen(true);
  };

  useEffect(() => {
    const navbarCollapse = () => {
      if (window.scrollY > 100) {
        setNavbarShrink(true);
      } else {
        setNavbarShrink(false);
      }
    };

    navbarCollapse();

    window.addEventListener('scroll', navbarCollapse);
    return () => window.removeEventListener('scroll', navbarCollapse);
  }, []);

  const handleSectionToggle = (section) => {
    setActiveCanvas(section);
    setTimeout(() => {
      const id = section === 'featured' ? 'games-portfolio' : 'personal_projects';
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  };

  return (
    <div id="page-top">
      {/* NMad AI Companion */}
      {config.enableChat && (
        <>
          <NMadCompanion onToggleChat={() => { setChatInitialMessage(''); setChatShouldExpand(false); setChatOpen(!chatOpen); }} />
          <ChatInterface
            isOpen={chatOpen}
            onClose={() => { setChatOpen(false); setChatInitialMessage(''); setChatShouldExpand(false); }}
            initialMessage={chatInitialMessage}
            onInitialMessageConsumed={() => setChatInitialMessage('')}
            initialExpanded={chatShouldExpand}
          />
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
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            aria-controls="navbarResponsive"
            aria-expanded={isNavExpanded}
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about" onClick={() => setIsNavExpanded(false)}>ABOUT</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activeCanvas === 'featured' ? 'active' : ''}`}
                  href="#games-portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionToggle('featured');
                    setIsNavExpanded(false);
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
                    setIsNavExpanded(false);
                  }}
                >
                  PERSONAL PROJECTS
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact" onClick={() => setIsNavExpanded(false)}>CONTACT</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1 d-flex align-items-center">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsNavExpanded(false);
                  }}
                  className="btn btn-link nav-link py-3 px-0 px-lg-3 theme-toggle-btn"

                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  style={{ fontSize: '1.2rem' }}
                >
                  <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header / Hero */}
      <header className="bg-indigo">
        <Header
          onToggleSection={handleSectionToggle}
          isBotEnabled={config.enableChat}
          theme={theme}
          onOpenChatWithMessage={handleOpenChatWithMessage}
        />
      </header>

      {/* About Section */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <About />
      </section>

      {/* Projects Section (Featured & Personal) */}
      <ProjectsList activeSection={activeCanvas} onToggleSection={handleSectionToggle} theme={theme} />

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
