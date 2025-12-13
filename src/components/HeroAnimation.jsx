import { useEffect, useRef } from 'react';

const HeroAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration
        const particleCount = 80; // Number of nodes
        const connectionDistance = 150; // Max distance to draw line
        const moveSpeed = 0.5; // Base movement speed

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse interaction
        let mouse = { x: null, y: null };
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // We attach mouse listeners to window mostly because the canvas is background
        // but we can attach to canvas if it has pointer-events.
        // For accurate header interaction, let's just track window mouse relative to canvas if needed,
        // or actually simple window tracking is fine for this effect.
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction - slightly attracted to mouse
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (200 - distance) / 200;
                        const directionX = forceDirectionX * force * 0.05;
                        const directionY = forceDirectionY * force * 0.05;
                        this.vx += directionX;
                        this.vy += directionY;
                    }
                }

                // Friction to keep speed check
                // this.vx *= 0.99; 
                // this.vy *= 0.99;

                // Limit speed
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > moveSpeed * 3) {
                    this.vx = (this.vx / speed) * moveSpeed * 3;
                    this.vy = (this.vy / speed) * moveSpeed * 3;
                }

            }

            draw() {
                ctx.fillStyle = '#66FCF1'; // Cyan
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            connectParticles();

            // Connect to mouse
            if (mouse.x != null) {
                connectMouse();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacityValue = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(102, 252, 241, ${opacityValue * 0.2})`; // Faint cyan lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const connectMouse = () => {
            for (let a = 0; a < particles.length; a++) {
                const dx = particles[a].x - mouse.x;
                const dy = particles[a].y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < connectionDistance * 1.5) { // Slightly larger reach for mouse
                    const opacityValue = 1 - (distance / (connectionDistance * 1.5));
                    ctx.strokeStyle = `rgba(255, 215, 0, ${opacityValue * 0.4})`; // Gold connection for player/mouse!
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Behind content
                pointerEvents: 'none', // Allow clicks through
                opacity: 0.6 // Blend with background gradient
            }}
        />
    );
};

export default HeroAnimation;
