import React, { useRef, useEffect } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let w, h;

        // Configuration
        const gridColor = '#45A29E'; // Teal used in theme
        const gridSpeed = 1; // Speed of movement
        const gridSpacingToVW = 0.05; // Grid spacing relative to width

        // Stars
        const starCount = 100;
        const stars = [];

        // Particles / Data Bits
        const particleCount = 20;
        const particles = [];

        const init = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;

            // Initialize stars
            stars.length = 0;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h * 0.6, // Only in top 60%
                    size: Math.random() * 2,
                    opacity: Math.random(),
                    speed: Math.random() * 0.2
                });
            }

            // Initialize particles
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    speedY: 1 + Math.random() * 3,
                    val: Math.random() > 0.5 ? '1' : '0',
                    opacity: Math.random() * 0.5
                });
            }
        };

        let offset = 0;

        const drawGrid = () => {
            // Horizon line (approx 50% height, but slightly lower to give more sky)
            const horizonY = h * 0.45;
            const centerX = w / 2;

            // Gradient fade for the grid
            const gradient = ctx.createLinearGradient(0, horizonY, 0, h);
            gradient.addColorStop(0, 'rgba(69, 162, 158, 0)');
            gradient.addColorStop(0.2, 'rgba(69, 162, 158, 0.2)');
            gradient.addColorStop(1, 'rgba(102, 252, 241, 0.5)'); // Bright cyan at bottom

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;

            // Vertical Perspective Lines
            // We draw lines from vanishing point (centerX, horizonY) to bottom
            const fov = 300; // Field of view equivalent
            const numVLines = 20;

            // Draw vertical lines fanning out
            for (let i = -numVLines; i <= numVLines; i++) {
                // Calculate angle
                const xBase = centerX + (i * w * 0.1);
                // Simple perspective simulation: line from vanishing point to (xBase, h)
                // But strictly, they should all converge to vanishing point.

                ctx.beginPath();
                ctx.moveTo(centerX, horizonY);
                ctx.lineTo(xBase * 2 - centerX, h); // Fan them out widely
                ctx.stroke();
            }

            // Horizontal Moving Lines
            // Logarithmic spacing to simulate depth? Or just simple perspective division

            const spacing = 50;
            // Move offset
            offset = (offset + gridSpeed) % spacing;

            // To make them look like 3D floor, y position should be exponential or reciprocal
            // Simple approach: linear in 3D space = 1/z in 2D

            // Let's create lines that get closer together near horizon
            // z goes from 1 (near) to infinity (horizon)

            for (let z = 0; z < 20; z++) {
                // Animate 't' from 0 to 1
                // We base it on (z * spacing + offset)

                // Let's rely on a simpler 'moving floor' math
                // y = horizonY + (h - horizonY) / distance

                // Effective constant movement
                let distance = z + (offset / spacing);
                // prevent div by zero
                if (distance < 0.1) distance = 0.1;

                // Mapping distance to Y.
                // If distance is large -> y is close to horizonY
                // If distance is small -> y is close to h

                // function: y = horizonY + (Constant / distance)
                const perspectiveHeight = h - horizonY;
                const scale = 2; // tweak for perceived height

                // This linear mod logic is tricky for perspective. 
                // Let's just do a simple loop where we map a virtual Z coordinate to Y

            }

            // Re-doing horizontal lines with better perspective loop
            ctx.beginPath();
            // We want lines to move FROM horizon TO camera (bottom)

            // Virtual Z position of the 'camera' relative to the grid lines
            const gridMovement = (Date.now() / 50) % 100; // 0 to 100

            // Draw ~20 horizontal lines
            for (let i = 0; i < 40; i++) {
                const z = i * 100 - gridMovement; // Lines are spaced 100 units apart in 3D
                if (z <= 0) continue; // Behind camera or too close

                // Project 3D Z to 2D Y
                // formula: y = horizonY + (h / z * scale)
                const projectionScale = 300;
                const projectedY = horizonY + (projectionScale / z) * (h - horizonY);

                if (projectedY > h) continue; // Off screen bottom

                if (projectedY < horizonY) continue; // Should not happen with positive Z

                // Calculate alpha based on distance (closer to horizon = more transparent)
                const alpha = Math.min(1, (projectedY - horizonY) / (h - horizonY));

                ctx.strokeStyle = `rgba(102, 252, 241, ${alpha * 0.5})`;

                ctx.beginPath();
                ctx.moveTo(0, projectedY);
                ctx.lineTo(w, projectedY);
                ctx.stroke();
            }
        };

        const drawStars = () => {
            ctx.fillStyle = '#fff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move stars slowly
                star.x -= star.speed;
                if (star.x < 0) star.x = w;

                // Twinkle
                star.opacity += (Math.random() - 0.5) * 0.1;
                if (star.opacity < 0) star.opacity = 0;
                if (star.opacity > 1) star.opacity = 1;
            });
        };

        const drawParticles = () => {
            ctx.font = '10px monospace';
            ctx.fillStyle = '#0f0'; // Matrix green or cyan? Let's use Cyan to match theme
            particles.forEach(p => {
                ctx.fillStyle = `rgba(102, 252, 241, ${p.opacity})`;
                ctx.fillText(p.val, p.x, p.y);

                p.y += p.speedY;
                if (p.y > h) {
                    p.y = 0;
                    p.x = Math.random() * w;
                }
            });
        };

        const render = () => {
            // Fill background
            ctx.fillStyle = '#0B0C10';
            ctx.fillRect(0, 0, w, h);

            drawStars();
            drawGrid();
            drawParticles();

            // Overlay gradient to darken the top for text contrast
            const overlay = ctx.createLinearGradient(0, 0, 0, h);
            overlay.addColorStop(0, 'rgba(11, 12, 16, 0.8)');
            overlay.addColorStop(0.5, 'rgba(11, 12, 16, 0.2)');
            overlay.addColorStop(1, 'rgba(11, 12, 16, 0.0)');
            ctx.fillStyle = overlay;
            ctx.fillRect(0, 0, w, h);

            animationFrameId = requestAnimationFrame(render);
        };

        // setup
        init();
        render();

        // Handle Resize
        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="position-absolute w-100 h-100"
            style={{
                top: 0,
                left: 0,
                zIndex: 0,
                opacity: 0.8
            }}
        />
    );
};

export default HeroBackground;
