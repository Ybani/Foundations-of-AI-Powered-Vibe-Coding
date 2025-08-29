document.addEventListener('DOMContentLoaded', () => {
    // Fade in effect
    document.body.style.opacity = '1';

    // Projects button action
    document.getElementById('projects-btn').addEventListener('click', () => {
        alert('Navigate to projects section - customize this function!');
    });

    // Interactive dots
    document.addEventListener('mousemove', (e) => {
        const dots = document.querySelectorAll('.dot');
        const { clientX: mouseX, clientY: mouseY } = e;

        dots.forEach(dot => {
            const rect = dot.getBoundingClientRect();
            const dotX = rect.left + rect.width / 2;
            const dotY = rect.top + rect.height / 2;

            const distance = Math.hypot(mouseX - dotX, mouseY - dotY);
            dot.style.transform = distance < 100 ? `scale(${1 + (100 - distance) / 100})` : 'scale(1)';
        });
    });
});
