// JavaScript to randomly generate stars
const starField = document.querySelector('.starfield');
const numberOfStars = 1000;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    // Random horizontal position
    const x = Math.random() * 100;
    // Random vertical position 
    const y = Math.random() * 100;
    // Random star size
    const size = Math.random() * 2 + 1;
    // Random twinkle delay
    const animationDelay = Math.random() * 3;

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${animationDelay}s`;

    starField.appendChild(star);
}

 // Parallax effect on scroll
 window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.star').forEach((star, index) => {
      // Adjust star positions based on the scroll position
      // Different speeds for different layers
      const speed = (index % 5) + 1;
      star.style.transform = `translateY(${-scrollPosition / speed}px)`;
    });
  });