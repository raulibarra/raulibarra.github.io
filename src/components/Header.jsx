import React from 'react';
import HeroAnimation from './HeroAnimation';

const Header = ({ onToggleSection }) => {

    return (
        <div className="hero-parallax-container d-flex align-items-center justify-content-center position-relative overflow-hidden">

            {/* Background Animation */}
            <HeroAnimation />

            {/* Layer 0: Deep Background (The Cave/Ruins) - Atmosphere Overlay */}
            <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', zIndex: 1 }}>
                <div className="hero-bg-atmosphere"></div>
            </div>

            {/* FX Layer: Cinematic Vignette (Static Overlay) */}
            <div className="position-absolute w-100 h-100 hero-vignette" style={{ zIndex: 2 }}></div>

            {/* Layer 3: Main Content (Foreground) */}
            <div className="text-center position-relative z-index-10">
                <h1 className="hero-title mb-4">RAUL IBARRA ARANDA</h1>

                <div className="hero-subtitle-container mb-4">
                    <span className="hero-subtitle text-accent font-code">&lt;Gameplay Programmer /&gt;</span>
                    <span className="hero-subtitle text-muted mx-2">|</span>
                    <span className="hero-subtitle text-white">Full-Stack Developer</span>
                    <span className="hero-subtitle text-muted mx-2">|</span>
                    <span className="hero-subtitle text-accent font-code">AI Specialist</span>
                </div>

                <h3 className="text-white mb-5 font-weight-light">
                    Engineering <span className="text-accent">Immersive Gameplay</span> & <span className="text-accent">Scalable Systems</span>
                </h3>

                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <a className="btn btn-outline-cyan btn-lg font-code px-4 py-3 mx-2 mb-2 js-scroll-trigger"
                        href="#games-portfolio"
                        onClick={(e) => {
                            e.preventDefault();
                            if (onToggleSection) {
                                onToggleSection('featured');
                            }
                        }}
                    >
                        VIEW PROJECTS
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="position-absolute w-100 text-center z-index-10" style={{ bottom: '30px' }}>
                <a href="#about" className="text-white js-scroll-trigger scroll-indicator-link">
                    <div className="scroll-indicator"></div>
                    <div className="small mt-2 font-code text-muted">SCROLL</div>
                </a>
            </div>
        </div>
    );
};

export default Header;
