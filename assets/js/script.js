const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 3000;

// Create stars with random positions and sizes
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2, // Random size between 0 and 2
    speed: Math.random() * 0.5 + 0.1 // Random speed
  });
}

// Draw the stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

// Animate the stars on scroll
let scrollPosition = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const delta = scrollTop - scrollPosition;
  scrollPosition = scrollTop;

  // Move stars vertically based on scroll
  for (const star of stars) {
    star.y += delta * star.speed;

    // Wrap stars around when they go off the canvas
    if (star.y > canvas.height) star.y = 0;
    else if (star.y < 0) star.y = canvas.height;
  }

  drawStars();
});

// Initial draw
drawStars();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStars();
});