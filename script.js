const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const acceptance = document.getElementById('acceptance');

yesBtn.addEventListener('click', () => {
    acceptance.style.display = 'block';
    document.querySelector('.interactive-elements').style.display = 'none';
    createHearts();
    triggerConfetti();
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    const x = Math.random() * 50;
    const y = Math.random() * 50;
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    noBtn.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
}

function createHearts() {
    const heartEmojis = ['💖', '💌', '💘', '💝', '💓'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

function triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff69b4', '#ff3366', '#ffffff']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff69b4', '#ff3366', '#ffffff']
        });

        if (Date.now() < end) requestAnimationFrame(frame);
    }());
} 
