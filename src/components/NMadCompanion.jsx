import React, { useState, useEffect } from 'react';

// Bot now stays fixed on the right side to avoid interfering with hero content
const NMadCompanion = ({ onToggleChat }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const isCompactMode = window.innerWidth < 768 || window.innerHeight < 750;

            if (isCompactMode) {
                // Mobile/Short Screen: Fixed in bottom-right corner
                setStyle({
                    bottom: '5%',
                    right: '5%',
                    transform: 'scale(0.8)', // Smaller on mobile
                });
            } else {
                // Desktop: Always on the right side at middle height
                setStyle({
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)', // Center vertically
                });
            }
        };

        window.addEventListener('resize', handleResize);
        // Initial calc
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            onClick={(e) => {
                import('../services/analytics').then(({ analyticsService }) => {
                    analyticsService.trackEvent('bot_click', {
                        action: 'open_chat'
                    });
                });
                onToggleChat(e);
            }}
            style={{
                position: 'fixed',
                width: '120px',
                height: '120px',
                zIndex: 9999,
                cursor: 'pointer',
                transition: 'transform 0.1s linear', // Smooth out frame jitters if any
                ...style
            }}
            className="nmad-container"
        >
            {/* Bobbing Animation Wrapper */}
            <div style={{
                animation: 'float 3s ease-in-out infinite',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img
                    src="./assets/img/nmad_bot.png"
                    alt="nMaD AI"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 10px var(--accent-cyan))',
                        transform: 'scaleX(-1)'
                    }}
                />
                <div style={{
                    marginTop: '-15px',
                    background: 'var(--hero-overlay-solid)',
                    color: 'var(--accent-cyan)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontFamily: 'Consolas',
                    border: '1px solid var(--accent-cyan)',
                    textAlign: 'center',
                    backdropFilter: 'blur(2px)'
                }}>
                    nMaD Bot
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default NMadCompanion;
