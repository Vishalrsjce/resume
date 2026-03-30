const canvas = document.getElementById('physics-bg');
const ctx = canvas.getContext('2d');
let particles = [];
const mouse = { x: null, y: null, radius: 180 };

// 1. THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const isLight = body.getAttribute('data-theme') === 'light';
    body.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeToggle.innerHTML = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
});

if(localStorage.getItem('theme') === 'light') {
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '☀️';
}

// 2. CANVAS PHYSICS ENGINE
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        // Repulsion Logic
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = dx / distance;
            let directionY = dy / distance;
            this.x -= directionX * force * 15;
            this.y -= directionY * force * 15;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

function init() {
    particles = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = (canvas.width * canvas.height) / 10000;
    for (let i = 0; i < count; i++) {
        let size = Math.random() * 4 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, dx, dy, size, '#3b82f6'));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
}

// 3. PAGE INITIALIZATION
init();
animate();

// Section Toggler for Resume
function toggleSection(id) {
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(s => s.style.display = 'none');
    if(id === 'all') {
        sections.forEach(s => s.style.display = 'block');
    } else {
        document.getElementById(id).style.display = 'block';
    }
}