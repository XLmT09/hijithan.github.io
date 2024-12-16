// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5 });
const starVertices = [];
for (let i = 0; i < 3000; i++) {
    starVertices.push(
    (Math.random() - 0.5) * 1000,
    (Math.random() - 0.5) * 1000,
    (Math.random() - 0.5) * 1000
    );
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Set initial camera position
camera.position.z = 5;

// Function to update camera based on scroll position
function handleScroll() {
    // Get the vertical scroll position
    const scrollY = window.scrollY;
    // Maximum scrollable height
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    // Calculate the scroll fraction (0 to 1)
    const scrollFraction = scrollY / maxScroll; 

    // Move the camera based on scroll

    // Adjust multiplier for the zoom effect
    camera.position.z = 5 + scrollFraction * 100;
    // Move camera up/down slightly with scroll
    camera.position.y = scrollFraction * 50;  
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Slight rotation of stars for added effect
    stars.rotation.x += 0.00008;
    stars.rotation.y += 0.00008;

    renderer.render(scene, camera);
}
animate();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});