
import HeroBackground from './HeroBackground';

// Company logos for credibility strip with theme variants
const companyLogos = [
    {
        name: 'DeNA',
        srcDark: './assets/img/company-logos/dena-logo.png',
    },
    {
        name: 'Wizards of the Coast',
        srcDark: './assets/img/company-logos/WizardsOfTheCoastLogo.png',
    },
    {
        name: 'Disney',
        srcDark: './assets/img/company-logos/disney-logo.png',
    },
    {
        name: 'Warner Bros Games',
        srcDark: './assets/img/company-logos/warner-bros-games.png',
    },
    {
        name: 'nWay',
        srcDark: './assets/img/company-logos/nway_logo.png',
        srcLight: './assets/img/company-logos/nway_logo-light.png'
    },
    {
        name: 'Netflix Games',
        srcDark: './assets/img/company-logos/netflix-games.png',
        srcLight: './assets/img/company-logos/netflix-games-light.png'
    },
    {
        name: 'Niantic',
        srcDark: './assets/img/company-logos/niantic-logo.png'
    },
];

const Header = ({ onToggleSection, isBotEnabled, theme, onOpenChatWithMessage }) => {

    const handleResumeRequest = () => {
        if (onOpenChatWithMessage) {
            onOpenChatWithMessage("Hi! I'm a recruiter interested in learning more about Raul's experience. Could you tell me about his background and how I can request a tailored resume?");
        }
    };

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

                {/* Company Logo Strip */}
                <div className="company-logo-strip">
                    <p className="logo-strip-label mb-2">Contributed to projects for</p>
                    <div className="logo-strip-container">
                        {companyLogos.map((logo, index) => {
                            const isLightTheme = theme === 'light';

                            // Determine which source to use
                            let src, useFallback;

                            if (isLightTheme) {
                                // Light theme: prefer srcLight, fallback to srcDark inverted
                                if (logo.srcLight) {
                                    src = logo.srcLight;
                                    useFallback = false;
                                } else {
                                    src = logo.srcDark;
                                    useFallback = true;
                                }
                            } else {
                                // Dark theme: prefer srcDark, fallback to srcLight inverted
                                if (logo.srcDark) {
                                    src = logo.srcDark;
                                    useFallback = false;
                                } else {
                                    src = logo.srcLight;
                                    useFallback = true;
                                }
                            }

                            return (
                                <div key={index} className="logo-item" title={logo.name}>
                                    <img
                                        src={src}
                                        alt={logo.name}
                                        className={useFallback ? 'inverted' : ''}
                                    />
                                </div>
                            );
                        })}
                    </div>
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
