import React from 'react';

const About = () => {
    return (
        <div className="container">
            {/* About Section Content */}
            <div className="row">
                {/* Profile Column */}
                <div className="col-lg-4 ml-auto text-center text-lg-left">
                    <div className="profile-image-container mb-4">
                        <img className="img-fluid profile-image" src="assets/img/FotoPromoRaul.JPG" alt="Raul Ibarra Aranda" />
                    </div>

                    <div className="contact-info pl-2">
                        <h5 className="text-white mb-3 font-code">&gt; Contact.init()</h5>

                        <a className="contact-link" href="mailto:raulibarra.a@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope"></i>raulibarra.a@gmail.com
                        </a>
                        <a className="contact-link" href="https://www.linkedin.com/in/raulxibarra" target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a className="contact-link" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-itch-io"></i> Personal projects
                        </a>
                        <a className="contact-link" href="https://raulibarra.github.io/audio" target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-volume-up"></i> Audio Portfolio
                        </a>
                        <a className="contact-link" href="https://raulibarra.github.io/music" target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-music-note"></i> Music Portfolio
                        </a>
                    </div>
                </div>

                {/* Bio Column */}
                <div className="col-lg-8 mr-auto">
                    <h3 className="mb-4 text-white">About me:</h3>

                    {/* Hook Section */}
                    <div className="info-panel variant-primary">
                        <p className="lead text-white font-weight-bold">
                            🎮 From AI-driven interactive fiction to multiplayer raid systems serving thousands of players—I
                            build cutting-edge game experiences that push technical boundaries.
                        </p>
                        <p className="text-accent mb-0 font-code">
                            // Unity Certified Professional | Tech Lead & Full-Stack Game Developer | AI Integration Specialist
                        </p>
                    </div>

                    {/* Core Skills Highlight */}
                    <div className="info-panel variant-surface">
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="text-accent d-block mb-2">🚀 Core Expertise:</strong>
                                <ul className="list-unstyled mb-0">
                                    <li>• Game Systems & Integration</li>
                                    <li>• Full-Stack Development</li>
                                    <li>• Gameplay Mechanics</li>
                                    <li>• Multiplayer Systems</li>
                                </ul>
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <strong className="text-accent d-block mb-2">🛠️ Tech Stack:</strong>
                                <ul className="list-unstyled mb-0">
                                    <li>• Unity3D, Unreal C#, C++</li>
                                    <li>• Node.js, Python, REST APIs</li>
                                    <li>• AI Integration, Live-Ops, CI/CD</li>
                                    <li>• Addressables, Interactive Audio</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact & Experience */}
                    <h5 className="text-white mt-4 mb-3">🎯 What I've Built:</h5>
                    <p><strong>Multiplayer Systems for Major Franchises</strong>: Engineered the cooperative <strong>Raid Boss
                        System</strong> for <strong><a href="https://www.youtube.com/watch?v=IZnnAdCXjl4" target="_blank"
                            rel="noopener noreferrer">DC Legends</a></strong>, introducing real-time multiplayer mechanics
                        to a turn-based RPG and engaging thousands of daily active players worldwide with complex team-based
                        combat.</p>

                    <p><strong>Tutorial & Player Retention Systems</strong>: Built event-driven, adaptive onboarding for
                        <strong><a href="https://youtu.be/QYcHgdB5_II?si=nc39gHMl6GyArHPd" target="_blank"
                            rel="noopener noreferrer"> Power Rangers: Morphin Legends</a></strong> and <strong><a
                                href="https://play.google.com/store/apps/details?id=com.redemptiongames.immortalsgame"
                                target="_blank" rel="noopener noreferrer">Crushers!</a></strong>, creating intelligent tutorial
                        systems that respond to player progression and choices, significantly improving retention and reducing
                        churn.
                    </p>

                    <p><strong>Interactive Audio Systems</strong>: Specialized in advanced audio programming across multiple
                        projects—implementing Wwise & FMOD adaptive audio, MetaSounds in Unreal Engine, spatial audio with
                        Google Resonance, and dynamic audio transitions that respond to gameplay. Composed original soundtracks
                        and designed immersive soundscapes for enhanced player experiences.</p>

                    <p><strong>Full-Stack AI-Integrated Titles</strong>: Led development as sole engineer and Tech Lead on 2
                        shipped interactive fiction games, architecting dynamic chat UI, Ink narrative systems, and Node.js
                        backend with AI integration for branching storylines. Built scalable asset pipelines handling 700+
                        assets via Addressables and A/B testing frameworks for data-driven iteration.</p>

                    {/* Teaching & Leadership */}
                    <h5 className="text-white mt-4 mb-3">📚 Leadership & Mentorship:</h5>
                    <p>Led cross-functional teams as <strong>Tech Lead</strong> and sole engineer, mentoring developers on Unity
                        workflows and CI-friendly practices. As a <strong>Unity3D instructor</strong>, I've helped aspiring
                        developers achieve industry certifications while promoting scalable technical solutions and rapid
                        prototyping methodologies.</p>

                    {/* Personality Closer */}
                    <div className="info-panel variant-gold mt-4">
                        <p className="mb-0"><strong>💡 My Approach:</strong> I don't just write code—I architect complete game
                            ecosystems. From multiplayer networked systems to interactive audio, from backend services to
                            polished player-facing UI, I build versatile technical solutions that scale, adapt, and create
                            unforgettable experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
