// JavaScript to randomly generate stars
const starField = document.querySelector('.starfield');
const numberOfStars = 150;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * 100; // Random horizontal position
    const y = Math.random() * 100; // Random vertical position
    const size = Math.random() * 2 + 1; // Random star size
    const animationDelay = Math.random() * 3; // Random twinkle delay

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${animationDelay}s`;

    starField.appendChild(star);
}