import React from 'react';

const Footer = () => {
    return (
        <div className="container">

            <br />
            {/* Main CTA Section */}
            <div className="text-center mb-5">
                <h2 className="page-section-heading text-white mb-3">Let's Build Something Great</h2>
                <p className="lead text-white-50 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Available for contract and full-time opportunities. Whether you need a technical lead, a multiplayer systems expert, or a full-stack game developer, let's talk.
                </p>

                {/* Availability Badge */}
                <div className="availability-badge mb-4" style={{ display: 'inline-flex' }}>
                    <div className="pulse-dot"></div>
                    <span>Available for Contract / Full-Time</span>
                </div>

                {/* Timezone Info */}
                <p className="text-white-50 small mb-4">
                    <i className="fas fa-clock me-2"></i>
                    Based in Chile (UTC-3) • Flexible with global teams
                </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="d-flex justify-content-center align-items-center w-100 mb-5" style={{ flexWrap: 'nowrap', gap: '0.75rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                <a
                    className="btn btn-outline-cyan btn-md font-code d-flex align-items-center justify-content-center"
                    href="mailto:raulibarra.a@gmail.com"
                    style={{
                        background: 'var(--hero-overlay-solid)',
                        backdropFilter: 'blur(4px)',
                        padding: 'clamp(0.5rem, 1.5vh, 1rem) clamp(0.5rem, 1.5vw, 1.5rem)',
                        fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                        flex: '0 1 auto'
                    }}
                >
                    <i className="fa-solid fa-envelope me-2"></i>_EMAIL ME
                </a>
                <a
                    className="btn btn-outline-cyan btn-md font-code d-flex align-items-center justify-content-center"
                    href="https://www.linkedin.com/in/raulxibarra"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: 'var(--hero-overlay-solid)',
                        backdropFilter: 'blur(4px)',
                        padding: 'clamp(0.5rem, 1.5vh, 1rem) clamp(0.5rem, 1.5vw, 1.5rem)',
                        fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                        flex: '0 1 auto'
                    }}
                >
                    <i className="fa-brands fa-linkedin me-2"></i>_LINKEDIN
                </a>
            </div>

            {/* Divider */}
            <div className="divider-custom divider-light mb-4">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-gamepad"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            {/* Secondary Social Links */}
            <div className="text-center mb-4">
                <h5 className="text-white-50 mb-3 small">Connect & Explore</h5>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a className="btn btn-outline-light btn-social mx-2" href="https://wa.link/zawmli" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Personal Projects on Itch.io" title="Personal Projects">
                            <i className="fa-brands fa-itch-io"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2" href="https://raulibarra.github.io/audio" target="_blank" rel="noopener noreferrer" aria-label="Audio Portfolio" title="Audio Portfolio">
                            <i className="bi bi-volume-up"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2" href="https://raulibarra.github.io/music" target="_blank" rel="noopener noreferrer" aria-label="Music Portfolio" title="Music Portfolio">
                            <i className="bi bi-music-note"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2" href="https://soundcloud.com/raul-ibarra-aranda" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" title="SoundCloud">
                            <i className="fa-brands fa-soundcloud"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
