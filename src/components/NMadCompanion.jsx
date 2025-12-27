import React, { useState, useEffect } from 'react';

// Using a standard CSS implementation for smoother 2D sprite movement
// This removes the 3D canvas overhead just for a 2D sprite
const NMadCompanion = ({ onToggleChat }) => {
    const [scrollY, setScrollY] = useState(0);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setScrollY(y);

            const isCompactMode = window.innerWidth < 768 || window.innerHeight < 750;

            if (isCompactMode) {
                // Mobile/Short Screen: Fixed in bottom-right corner to avoid overlap
                setStyle({
                    bottom: '5%',
                    left: '85%',
                    transform: 'translate(-50%, 0) scale(0.8)', // Smaller on mobile
                });
                return;
            }

            // Desktop Logic: Move from Hero (Center Bottom) to Sidebar (Right Middle)
            const threshold = window.innerHeight * 0.8;
            const progress = Math.min(y / threshold, 1);

            // Easing
            const ease = progress * (2 - progress); // EaseOutQuad

            // We'll use fixed positioning and lerp values
            const startBottom = 22; // % (Raised to clear scroll indicator)
            const endBottom = 50; // %

            const startLeft = 50; // %
            const endLeft = 95; // %

            const currentBottom = startBottom + (endBottom - startBottom) * ease;
            const currentLeft = startLeft + (endLeft - startLeft) * ease;

            // Scale decrease slightly when docked
            const scale = 1.0 - (ease * 0.2);

            setStyle({
                bottom: `${currentBottom}%`,
                left: `${currentLeft}%`,
                transform: `translate(-50%, 50%) scale(${scale})`, // Centering pivot
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        // Initial calc
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div
            onClick={onToggleChat}
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
