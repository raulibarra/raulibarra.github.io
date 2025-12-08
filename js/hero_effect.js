
function initParallax() {
    const hero = document.querySelector('.hero-parallax-container');
    const layers = document.querySelectorAll('.parallax-layer');

    if (!hero || layers.length === 0) {
        console.warn('Hero parallax container or layers not found.');
        return;
    }

    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed') || 1);

            // If speed is 0, do not apply any transform. Keep it static.
            if (speed === 0) {
                layer.style.transform = 'none';
                return;
            }

            const xOffset = (window.innerWidth * x * speed) / 100;
            const yOffset = (window.innerHeight * y * speed) / 100;

            layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
        });
    });

    console.log('Parallax initialized. Static layers enabled.');
}
