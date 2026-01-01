import React from 'react';

const About = () => {
    return (
        <div className="container">
            {/* About Section Content */}
            <div className="row">
                {/* Profile Column */}
                <div className="col-lg-4 ml-auto text-center text-lg-left" style={{ position: 'sticky', top: '100px', height: 'fit-content', zIndex: 100 }}>
                    <div className="info-panel variant-surface p-4 text-center text-lg-left">
                        <div className="profile-image-container mb-4 d-inline-block position-relative">
                            <img className="img-fluid profile-image" src="assets/img/FotoPromoRaul.JPG" alt="Raul Ibarra Aranda" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                        </div>

                        <div className="profile-header mb-4">
                            <h2 className="h4 text-white mb-1">Raul Ibarra Aranda</h2>
                            <p className="text-accent font-code mb-0">Senior Game Developer</p>
                        </div>

                        <div className="contact-info">
                            <h5 className="text-white mb-3 font-code text-left small opacity-75">&gt; Contact.init()</h5>

                            <div className="d-flex flex-column">
                                <a className="btn btn-outline-cyan btn-sm text-left mb-2 d-flex align-items-center" href="mailto:raulibarra.a@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-envelope mr-3" style={{ width: '20px', textAlign: 'center' }}></i>
                                    <span>raulibarra.a@gmail.com</span>
                                </a>
                                <a className="btn btn-outline-cyan btn-sm text-left mb-2 d-flex align-items-center" href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin mr-3" style={{ width: '20px', textAlign: 'center' }}></i>
                                    <span>LinkedIn</span>
                                </a>
                                <a className="btn btn-outline-cyan btn-sm text-left mb-2 d-flex align-items-center" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-itch-io mr-3" style={{ width: '20px', textAlign: 'center' }}></i>
                                    <span>Personal projects</span>
                                </a>
                                <a className="btn btn-outline-cyan btn-sm text-left mb-2 d-flex align-items-center" href="https://raulibarra.github.io/audio" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-volume-up mr-3" style={{ width: '20px', textAlign: 'center' }}></i>
                                    <span>Audio Portfolio</span>
                                </a>
                                <a className="btn btn-outline-cyan btn-sm text-left d-flex align-items-center" href="https://raulibarra.github.io/music" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-music-note mr-3" style={{ width: '20px', textAlign: 'center' }}></i>
                                    <span>Music Portfolio</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bio Column */}
                <div className="col-lg-8 mr-auto">
                    <h3 className="mb-4 text-white">About me:</h3>

                    {/* Hook Section - Narrative */}
                    <div className="info-panel variant-primary mb-4">
                        <p className="lead text-white font-weight-bold mb-3" style={{ textAlign: 'justify' }}>
                            I architect complete game ecosystems—from networking backend to polished player UI.
                        </p>
                        <p className="text-white-50 mb-0" style={{ textAlign: 'justify' }}>
                            With over 12 years of experience shipping titles for major franchises like <strong>Star Wars</strong>, <strong>DC</strong>, and <strong>Power Rangers</strong>, I specialize in building scalable systems. Whether it's optimizing WebGL rendering, engineering real-time multiplayer networking, or designing adaptive audio systems, I bridge the gap between technical complexity and creative vision.
                        </p>
                    </div>

                    {/* Core Skills Highlight - Scannable Grid */}
                    <h5 className="text-white mt-4 mb-3">⚡ Core Competencies</h5>
                    <div className="info-panel variant-surface mb-4">
                        <div className="skills-grid">
                            <div>
                                <div className="skill-category-title"><i className="fas fa-code"></i> Languages & Core</div>
                                <div>
                                    <span className="skill-tag">C# (Expert)</span>
                                    <span className="skill-tag">C++</span>
                                    <span className="skill-tag">JavaScript / TypeScript</span>
                                    <span className="skill-tag">Python</span>
                                </div>
                            </div>
                            <div>
                                <div className="skill-category-title"><i className="fas fa-gamepad"></i> Game Engines</div>
                                <div>
                                    <span className="skill-tag">Unity3D (Expert)</span>
                                    <span className="skill-tag">Unreal Engine 5</span>
                                    <span className="skill-tag">Photon Quantum</span>
                                    <span className="skill-tag">ECS / DOTS</span>
                                </div>
                            </div>
                            <div>
                                <div className="skill-category-title"><i className="fas fa-server"></i> Backend & Services</div>
                                <div>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">REST APIs</span>
                                    <span className="skill-tag">PlayFab / Firebase</span>
                                    <span className="skill-tag">Live-Ops</span>
                                </div>
                            </div>
                            <div>
                                <div className="skill-category-title"><i className="fas fa-volume-up"></i> Audio & Optimization</div>
                                <div>
                                    <span className="skill-tag">Wwise / FMOD</span>
                                    <span className="skill-tag">MetaSounds</span>
                                    <span className="skill-tag">Performance Tuning</span>
                                    <span className="skill-tag">Addressables</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact & Experience - Scannable List */}
                    <h5 className="text-white mt-4 mb-3">🎯 Career Highlights</h5>
                    <div className="impact-list">

                        {/* Multiplayer Item */}
                        <div className="impact-item">
                            <div className="impact-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="impact-content">
                                <h6>Multiplayer Systems at Scale</h6>
                                <p>Engineered real-time features for millions of players. Built the <a href="https://www.youtube.com/watch?v=IZnnAdCXjl4" target="_blank" rel="noopener noreferrer">DC Legends Raid Boss System</a> (synchronous multiplayer in a turn-based RPG) and optimized low-latency networking for <a href="https://tevaera.com/" target="_blank" rel="noopener noreferrer">Degen Rivals</a> using Photon Quantum.</p>
                            </div>
                        </div>

                        {/* Optimization Item */}
                        <div className="impact-item">
                            <div className="impact-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            <div className="impact-content">
                                <h6>Performance & Optimization</h6>
                                <p>Expert in mobile and WebGL optimization. Achieved <strong>35% app size reduction</strong> for <em>Star Wars: Galactic Defense</em> via texture pipeline tools and optimized WebGL rendering for 60fps browser performance.</p>
                            </div>
                        </div>

                        {/* Player Retention Item */}
                        <div className="impact-item">
                            <div className="impact-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="impact-content">
                                <h6>Retention-Driving Mechanics</h6>
                                <p>Architected adaptive onboarding systems for <a href="https://youtu.be/QYcHgdB5_II?si=nc39gHMl6GyArHPd" target="_blank" rel="noopener noreferrer">Power Rangers: Morphin Legends</a> that analyze player behavior to tailor tutorial flow, significantly reducing early-game churn.</p>
                            </div>
                        </div>

                        {/* Audio Item */}
                        <div className="impact-item">
                            <div className="impact-icon">
                                <i className="fas fa-music"></i>
                            </div>
                            <div className="impact-content">
                                <h6>Interaction Audio Engineering</h6>
                                <p>Specialized in bridging code and sound. Implemented complex adaptive audio systems (Wwise, FMOD, MetaSounds) and spatial audio (Google Resonance). I don't just implement audio; I compose and design complete soundscapes.</p>
                            </div>
                        </div>

                    </div>

                    {/* Personality Closer */}
                    <div className="info-panel variant-gold mt-5">
                        <p className="mb-0" style={{ textAlign: 'justify' }}><strong>💡 My Approach:</strong> Technology serves the experience. I write code that is clean, modular, and performant—not just for the machine, but for the team of developers, designers, and artists who work alongside me.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
