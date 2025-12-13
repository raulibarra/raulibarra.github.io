import React, { useEffect } from 'react';

const Header = ({ onToggleSection }) => {

    useEffect(() => {
        const hero = document.querySelector('.hero-parallax-container');
        const layers = document.querySelectorAll('.parallax-layer');

        if (!hero || layers.length === 0) return;

        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed') || 1);
                if (speed === 0) {
                    layer.style.transform = 'none';
                    return;
                }
                const xOffset = (window.innerWidth * x * speed) / 100;
                const yOffset = (window.innerHeight * y * speed) / 100;
                layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
            });
        };

        hero.addEventListener('mousemove', handleMouseMove);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hero-parallax-container d-flex align-items-center justify-content-center position-relative overflow-hidden">

            {/* Layer 0: Deep Background (The Cave/Ruins) */}
            <div className="parallax-layer position-absolute w-100 h-100" data-speed="-1">
                <div className="hero-bg-atmosphere"></div>
            </div>

            {/* FX Layer: Film Grain & Noise (Static Overlay) */}
            <div className="position-absolute w-100 h-100 hero-noise-overlay">
                <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
                    <filter id='noiseFilter'>
                        <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
            </div>

            {/* Layer 1: Global Lighting (God Rays) */}
            <div className="parallax-layer position-absolute w-100 h-100" data-speed="2">
                <div className="light-beam beam-1"></div>
                <div className="light-beam beam-2"></div>
                <div className="light-beam beam-3"></div>
            </div>

            {/* Layer 2: Floating Particles (Dust Motes) */}
            <div className="parallax-layer position-absolute w-100 h-100" data-speed="4">
                <div className="dust-mote mote-1"></div>
                <div className="dust-mote mote-2"></div>
                <div className="dust-mote mote-3"></div>
                <div className="dust-mote mote-4"></div>
            </div>

            {/* FX Layer: Cinematic Vignette (Static Overlay) */}
            <div className="position-absolute w-100 h-100 hero-vignette"></div>

            {/* Layer 3: Main Content (Foreground - STATIC as requested) */}
            <div className="parallax-layer text-center position-relative z-index-10" data-speed="0">
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
