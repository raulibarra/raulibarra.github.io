

import HeroBackground from './HeroBackground';
const Header = ({ onToggleSection, isBotEnabled, theme }) => {

    return (
        <div className="hero-parallax-container d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ minHeight: '100vh' }}>

            {/* Background Simulation (Absolute to cover full area) */}

            {/* Animated Canvas Background */}
            <HeroBackground theme={theme} />

            {/* Layer 1: Dark Overlay Gradient for Text Readability */}
            <div className="position-absolute w-100 h-100" style={{
                pointerEvents: 'none',
                zIndex: 1,
                // Lighter gradient: Enough to read text but keep background visible
                background: `linear-gradient(180deg, var(--hero-overlay-dark) 0%, transparent 50%, var(--hero-overlay-deeper) 100%)`
            }}></div>

            {/* FX Layer: Cinematic Vignette (Static Overlay) */}
            <div className="position-absolute w-100 h-100 hero-vignette" style={{ zIndex: 2, opacity: 0.3 }}></div>

            {/* Layer 3: Main Content (Foreground) */}
            <div className="text-center position-relative hero-content-wrapper"
                style={{
                    zIndex: 10,
                    marginTop: isBotEnabled ? '-20vh' : '0',
                    transition: 'margin-top 0.5s ease'
                }}>
                <h1 className="hero-title mb-4" style={{
                    textShadow: 'var(--hero-text-shadow)',
                    fontWeight: 800
                }}>RAUL IBARRA ARANDA</h1>

                <div className="hero-subtitle-container mb-4">
                    <span className="hero-subtitle text-accent font-code" style={{
                        textShadow: 'var(--hero-sub-shadow)',
                        webkitTextStroke: 'var(--hero-text-outline)',
                        fontWeight: 700
                    }}>&lt;Gameplay Programmer /&gt;</span>
                    <span className="hero-subtitle text-muted mx-2" style={{ fontWeight: 600 }}>|</span>
                    <span className="hero-subtitle text-white" style={{
                        textShadow: 'var(--hero-sub-shadow)',
                        webkitTextStroke: 'var(--hero-text-outline)',
                        fontWeight: 600
                    }}>Full-Stack Developer</span>
                    <span className="hero-subtitle text-muted mx-2" style={{ fontWeight: 600 }}>|</span>
                    <span className="hero-subtitle text-accent font-code" style={{
                        textShadow: 'var(--hero-sub-shadow)',
                        webkitTextStroke: 'var(--hero-text-outline)',
                        fontWeight: 700
                    }}>AI Specialist</span>
                </div>

                <h3 className="text-white mb-5 font-weight-bold" style={{
                    textShadow: 'var(--hero-sub-shadow)',
                    webkitTextStroke: 'var(--hero-text-outline)',
                    fontWeight: 700
                }}>
                    Engineering <span className="text-accent">Immersive Gameplay</span> & <span className="text-accent">Scalable Systems</span>
                </h3>

                <div className="status-badge text-accent font-code mb-4 animate-fadeIn px-4 py-2 d-inline-block rounded-pill shadow-lg" style={{
                    textShadow: 'var(--hero-sub-shadow)',
                    webkitTextStroke: 'var(--hero-text-outline)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    background: 'var(--hero-overlay-dark)',
                    border: '1.5px solid var(--accent-cyan)',
                    backdropFilter: 'blur(8px)'
                }}>
                    <span className="me-2" style={{ color: '#00ff88', fontSize: '1.4rem' }}>●</span> AVAILABLE FOR NEW OPPORTUNITIES
                </div>

                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <a className="btn btn-outline-cyan btn-lg font-code px-4 py-3 mx-2 mb-2 js-scroll-trigger"
                        href="#games-portfolio"
                        style={{ background: 'var(--hero-overlay-solid)', backdropFilter: 'blur(4px)' }}
                        onClick={(e) => {
                            e.preventDefault();
                            if (onToggleSection) {
                                onToggleSection('featured');
                            }
                        }}
                    >
                        VIEW PROJECTS
                    </a>
                    <a className="btn btn-outline-cyan btn-lg font-code px-4 py-3 mx-2 mb-2 js-scroll-trigger btn-contact-premium"
                        href="#contact"
                        style={{ background: 'var(--hero-overlay-solid)', backdropFilter: 'blur(4px)' }}
                    >
                        <i className="fas fa-paper-plane me-2"></i> CONTACT ME
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="position-absolute w-100 text-center" style={{ bottom: '30px', zIndex: 10 }}>
                <a href="#about" className="text-white js-scroll-trigger scroll-indicator-link">
                    <div className="scroll-indicator"></div>
                    <div className="small mt-2 font-code text-muted" style={{
                        textShadow: 'var(--hero-sub-shadow)',
                        fontWeight: 700
                    }}>SCROLL</div>
                </a>
            </div>
        </div>
    );
};

export default Header;
