document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const navbar = document.querySelector(".navbar")
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const faqItems = document.querySelectorAll(".faq-item")
  const partnerCards = document.querySelectorAll(".partner-card")
  const modalOverlay = document.querySelector(".modal-overlay")
  const closeModal = document.querySelector(".close-modal")
  const filterButtons = document.querySelectorAll(".filter-button")
  let lastScrollTop = 0

  
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


  // Event Listeners
  window.addEventListener("scroll", handleScroll)
  hamburger.addEventListener("click", toggleMenu)

  // Initialize FAQ accordions
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })




  
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.disabled = true
      submitButton.textContent = "Enviando..."

      // Simulate API call
      setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        contactForm.reset()
        submitButton.disabled = false
        submitButton.textContent = originalText
      }, 1500)
    })
  }

  // Functions
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Navbar hide/show on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("hidden")
    } else {
      navbar.classList.remove("hidden")
    }

    lastScrollTop = scrollTop

    // Animate elements on scroll
    animateOnScroll()
  }

  function toggleMenu() {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  }

  
  // Hero Logo Animation
  const heroLogo = document.querySelector(".hero-logo")
  if (heroLogo) {
    heroLogo.addEventListener("mouseover", () => {
      heroLogo.style.filter = "drop-shadow(0 0 15px var(--primary-color))"
    })

    heroLogo.addEventListener("mouseout", () => {
      heroLogo.style.filter = ""
    })
  }

  // Video Card Hover Effects
  const videoCards = document.querySelectorAll(".video-card")
  videoCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "1"
      }
    })

    card.addEventListener("mouseout", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "0"
      }
    })
  })
})


  // Partenrs Carroussel close to Footer
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-container");
  let slides = Array.from(track.children);
  const pauseTime = 2000;     // pausa após chegar ao centro
  const slideTime = 3000;     // tempo de transição
  let paused = false;
  let timeout;

  function activateZoom() {
    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");
  }

  function next() {
    if (paused) return;
    track.style.transition = `transform ${slideTime}ms cubic-bezier(0.77, 0, 0.175, 1)`;
    track.style.transform = `translateX(-100%)`;
    track.addEventListener("transitionend", onTransitionEnd, { once: true });
  }

  function onTransitionEnd() {
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    const first = slides.shift();
    track.appendChild(first);
    slides.push(first);
    activateZoom();
    timeout = setTimeout(next, pauseTime);
  }

  slides.forEach(slide => {
    slide.querySelector("img").addEventListener("click", e => {
      const link = e.currentTarget.dataset.link;
      if (link) window.open(link, "_blank");
    });
  });

  container.addEventListener("mouseenter", () => {
    paused = true;
    clearTimeout(timeout);
    track.style.transition = '';
  });

  container.addEventListener("mouseleave", () => {
    paused = false;
    setTimeout(next, 300);
  });

  activateZoom();
  timeout = setTimeout(next, pauseTime);
});
  



    
// Background Pacman Dynamic.    
const canvas = document.getElementById('retro-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let baseTileSize = 40;
const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

let tileSize;

function calculateTileSize() {
  if (isMobile) {
    return baseTileSize;
  } else {
    // Desktop
    if (width >= 1920) {
      return baseTileSize * 1.2; // 48 (20% maior)
    } else if (width >= 1280 && width < 1920) {
      // proporcional entre 40 e 48
      const ratio = (width - 1280) / (1920 - 1280);
      return baseTileSize + (baseTileSize * 0.2 * ratio);
    } else {
      // largura menor que 1280px, usa tamanho base (40)
      return baseTileSize;
    }
  }
}

let cols, rows, halfCols;
let maze = [];

const mazeColors = [
  'hsla(348, 97%, 56%, 0.15)',  // vermelho
  'hsla(282, 60%, 55%, 0.15)'   // roxo
];
let baseMazeColor = mazeColors[Math.floor(Math.random() * mazeColors.length)];
let mazeColor = baseMazeColor;
let rgbMode = false;
let rgbHue = 0;
let fruit = null;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateClassicMaze() {
  let leftMaze = Array.from({ length: rows }, () => Array(halfCols).fill(1));
  const visited = Array.from({ length: rows }, () => Array(halfCols).fill(false));

  function isValid(x, y) {
    return x > 0 && x < halfCols - 1 && y > 0 && y < rows - 1;
  }

  function carveMaze(x, y) {
    visited[y][x] = true;
    leftMaze[y][x] = 0;
    const directions = shuffle([[0, -2], [0, 2], [-2, 0], [2, 0]]);
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (isValid(nx, ny) && !visited[ny][nx]) {
        leftMaze[y + dy / 2][x + dx / 2] = 0;
        carveMaze(nx, ny);
      }
    }
  }

  carveMaze(1, 1);

  maze = Array.from({ length: rows }, (_, y) => {
    const mirroredRow = [...leftMaze[y]];
    const rightHalf = [...mirroredRow].reverse();
    const row = (cols % 2 === 0)
      ? mirroredRow.concat(rightHalf)
      : mirroredRow.concat([0], rightHalf);
    const middleCol = Math.floor(cols / 2);
    const middleRow = Math.floor(rows / 2);
    const corridorSize = 4;

    for (let yy = middleRow - Math.floor(corridorSize / 2); yy < middleRow + Math.ceil(corridorSize / 2); yy++) {
      if (yy === y) {
        for (let xx = middleCol - Math.floor(corridorSize / 2); xx < middleCol + Math.ceil(corridorSize / 2); xx++) {
          if (row[xx] !== undefined) row[xx] = 0;
        }
      }
    }

    return row;
  });

  addExtraOpenings(0.08);
  maze[1][1] = maze[1][2] = maze[2][1] = 0;
}

function addExtraOpenings(chance = 0.1) {
  for (let y = 1; y < rows - 1; y++) {
    for (let x = 1; x < cols - 1; x++) {
      if (maze[y][x] === 1 && Math.random() < chance) {
        if ((x % 2 === 1) || (y % 2 === 1)) {
          maze[y][x] = 0;
        }
      }
    }
  }
}

const mouse = { x: 0, y: 0 };

document.addEventListener('mousemove', e => {
  mouse.x = Math.min(cols - 1, Math.max(0, Math.floor(e.clientX / tileSize)));
  mouse.y = Math.min(rows - 1, Math.max(0, Math.floor(e.clientY / tileSize)));
});

document.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  mouse.x = Math.floor(touch.clientX / tileSize);
  mouse.y = Math.floor(touch.clientY / tileSize);
});

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.floor(Math.random() * 3 + 2);
    this.baseX = this.x;
    this.baseY = this.y;
    this.hue = Math.floor(Math.random() * 360);
    this.hueSpeed = Math.random() * 0.5 + 0.1;
  }
  draw() {
    // Opacidade reduzida para 0.25 (50% do original 0.5)
    const color = `hsla(${this.hue}, 100%, 60%, 0.25)`; 
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 4;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    this.hue = (this.hue + this.hueSpeed) % 360;
    const dx = this.x - mouse.x * tileSize;
    const dy = this.y - mouse.y * tileSize;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 120;
    const force = (maxDist - dist) / maxDist;
    if (dist < maxDist) {
      this.x += dx / dist * force * 1.2;
      this.y += dy / dist * force * 1.2;
    } else {
      this.x += (this.baseX - this.x) * 0.02;
      this.y += (this.baseY - this.y) * 0.02;
    }
  }
}

let particles = [];

const pacman = {
  x: 1, y: 1, px: 1, py: 1,
  angle: 0, direction: 'right',
  path: [], speed: 0.07,
  moving: false, target: null,
  lastGoal: { x: 1, y: 1 }
};

let lastPathCheck = 0;
function findPath(start, end) {
  const openSet = [start];
  const cameFrom = {};
  const gScore = {};
  const fScore = {};
  const nodeKey = n => `${n.x},${n.y}`;
  gScore[nodeKey(start)] = 0;
  fScore[nodeKey(start)] = Math.abs(start.x - end.x) + Math.abs(start.y - end.y);

  while (openSet.length > 0) {
    openSet.sort((a, b) => fScore[nodeKey(a)] - fScore[nodeKey(b)]);
    const current = openSet.shift();
    if (current.x === end.x && current.y === end.y) {
      const path = [];
      let temp = current;
      while (temp && nodeKey(temp) !== nodeKey(start)) {
        path.unshift(temp);
        temp = cameFrom[nodeKey(temp)];
      }
      return path;
    }

    const neighbors = [
      { x: current.x + 1, y: current.y },
      { x: current.x - 1, y: current.y },
      { x: current.x, y: current.y + 1 },
      { x: current.x, y: current.y - 1 }
    ];

    for (const neighbor of neighbors) {
      if (
        neighbor.x < 0 || neighbor.x >= cols ||
        neighbor.y < 0 || neighbor.y >= rows ||
        maze[neighbor.y][neighbor.x] === 1
      ) continue;

      const tentativeG = gScore[nodeKey(current)] + 1;
      const key = nodeKey(neighbor);
      if (!(key in gScore) || tentativeG < gScore[key]) {
        cameFrom[key] = current;
        gScore[key] = tentativeG;
        fScore[key] = tentativeG + Math.abs(neighbor.x - end.x) + Math.abs(neighbor.y - end.y);
        if (!openSet.find(n => n.x === neighbor.x && n.y === neighbor.y)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return [];
}

function updatePacman() {
  const now = performance.now();
  const target = { x: mouse.x, y: mouse.y };

  if (!pacman.moving && (target.x !== pacman.lastGoal.x || target.y !== pacman.lastGoal.y)) {
    if (now - lastPathCheck > 100) {
      pacman.path = findPath({ x: Math.round(pacman.px), y: Math.round(pacman.py) }, target);
      pacman.lastGoal = { ...target };
      lastPathCheck = now;
    }
  }

  if (!pacman.moving && pacman.path.length > 0) {
    pacman.target = pacman.path.shift();
    pacman.moving = true;
    const dx = pacman.target.x - pacman.px;
    const dy = pacman.target.y - pacman.py;
    if (dx > 0) pacman.direction = 'right';
    else if (dx < 0) pacman.direction = 'left';
    else if (dy > 0) pacman.direction = 'down';
    else if (dy < 0) pacman.direction = 'up';
  }

  if (pacman.moving && pacman.target) {
    const dx = pacman.target.x - pacman.px;
    const dy = pacman.target.y - pacman.py;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < pacman.speed) {
      pacman.px = pacman.target.x;
      pacman.py = pacman.target.y;
      pacman.x = pacman.target.x;
      pacman.y = pacman.target.y;
      pacman.moving = false;
      pacman.target = null;
if (fruit && pacman.x === fruit.x && pacman.y === fruit.y) {
  fruit = null;
  pacman.fruitCount = (pacman.fruitCount || 0) + 1;
  if (pacman.fruitCount >= 3) rgbMode = true;
  setTimeout(placeFruit, 3000); // reaparece após 3 segundos
}
    } else {
      pacman.px += (dx / dist) * pacman.speed;
      pacman.py += (dy / dist) * pacman.speed;
    }
  }

  pacman.angle += 0.2;
}

function drawPacman() {
  const cx = pacman.px * tileSize + tileSize / 2;
  const cy = pacman.py * tileSize + tileSize / 2;
  const r = tileSize / 2 - 4;
  const mouth = Math.abs(Math.sin(pacman.angle)) * Math.PI / 5;
  let rotation = 0;
  if (pacman.direction === 'right') rotation = 0;
  else if (pacman.direction === 'left') rotation = Math.PI;
  else if (pacman.direction === 'up') rotation = -Math.PI / 2;
  else if (pacman.direction === 'down') rotation = Math.PI / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, r, mouth, 2 * Math.PI - mouth);
  ctx.lineTo(0, 0);
  ctx.fillStyle = '#d4c05a';
  ctx.shadowColor = '#d4c05a';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.restore();
}

function placeFruit() {
  let fx, fy;
  do {
    fx = Math.floor(Math.random() * cols);
    fy = Math.floor(Math.random() * rows);
  } while (maze[fy][fx] === 1 || (fx === pacman.x && fy === pacman.y));
  fruit = { x: fx, y: fy };
}

function drawFruit() {
  if (!fruit) return;
  const fx = fruit.x * tileSize + tileSize / 2;
  const fy = fruit.y * tileSize + tileSize / 2;
  const radius = tileSize / 7; // 50% menor

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(fx, fy, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawMaze() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (maze[y][x] === 1) {
        if (rgbMode) {
          mazeColor = `hsla(${(rgbHue + (x + y) * 10) % 360}, 90%, 55%, 0.15)`;
        } else {
          mazeColor = baseMazeColor;
        }
        ctx.fillStyle = mazeColor;
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

function updateRgbHue() {
  if (rgbMode) {
    rgbHue = (rgbHue + 2) % 360;
  }
}

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  tileSize = calculateTileSize();

  cols = Math.floor(width / tileSize);
  rows = Math.floor(height / tileSize);
  halfCols = Math.floor(cols / 2);

  generateClassicMaze();

  particles = [];
  const particleCount = Math.floor((width * height) / 12000);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  drawMaze();

  for (const p of particles) {
    p.update();
    p.draw();
  }

  updatePacman();
  drawPacman();
  drawFruit();
  updateRgbHue();

  requestAnimationFrame(draw);
}

resize();
placeFruit();
draw();

window.addEventListener('resize', () => {
  resize();
  placeFruit();
});

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startBtn');
  if (startButton) {
    startButton.addEventListener('click', () => {
      rgbMode = true;
    });
  }
});
(() => {
  const startBtn = document.getElementById('startBtn');
  const namesInput = document.getElementById('namesInput');
  const roulette = document.getElementById('roulette');
  const resultText = document.getElementById('resultText');

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
  let names = [];
  let animationFrameId = null;
  let animationStart = null;
  let currentWinnerName = null;

  const roletaAudio = new Audio('/assets/audio/roleta.mp3');
  const zeldaAudio = new Audio('/assets/audio/zelda.mp3');

  function randomString(length) {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return str;
  }

  function matrixSuspenseLine(finalStr, maxLength, progress) {
    const finalLen = finalStr.length;
    const currentLen = Math.floor(maxLength - (maxLength - finalLen) * progress);
    if (progress < 1) {
      return randomString(currentLen);
    } else {
      return finalStr.toUpperCase();
    }
  }

  function animateMatrixSuspense(finalName, onComplete) {
    const duration = 25000;
    animationStart = null;
    const maxLength = Math.max(30, finalName.length + 10);

    function step(timestamp) {
      if (!animationStart) animationStart = timestamp;
      const elapsed = timestamp - animationStart;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      const line = matrixSuspenseLine(finalName, maxLength, progress);
      roulette.textContent = line;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    }

    animationFrameId = requestAnimationFrame(step);
  }

  // ====== CANVAS DOS FOGOS E NOME =======
  let fireworksCanvas = null;
  let ctx = null;
  let fireworks = [];
  let fireworksAnimationId = null;
  let fireworksStartTime = null;
  let explosionCount = 0;

  class FireworkParticle {
    constructor(x, y, angle, speed, color) {
      this.x = x;
      this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.alpha = 1;
      this.life = 60 + Math.random() * 20;
      this.color = color;
      this.size = 5 + Math.random() * 5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.05;
      this.alpha -= 1 / this.life;
      if (this.alpha < 0) this.alpha = 0;
      this.life--;
    }
    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      ctx.restore();
    }
    get isAlive() {
      return this.alpha > 0 && this.life > 0;
    }
  }

  function createFirework(x, y) {
    const colors = [
      'rgba(255, 69, 0, 1)',
      'rgba(255, 215, 0, 1)',
      'rgba(30, 144, 255, 1)',
      'rgba(0, 255, 127, 1)',
      'rgba(255, 20, 147, 1)',
      'rgba(138, 43, 226, 1)',
    ];
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      const colorIndex = Math.floor((Date.now() / 100) % colors.length);
      const color = colors[(colorIndex + i) % colors.length];
      fireworks.push(new FireworkParticle(x, y, angle, speed, color));
    }
  }

  function drawWinnerNameWaveEffect(name, timestamp) {
    if (!ctx || !name) return;

    ctx.save();
    ctx.font = 'bold 64px monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    const baseX = fireworksCanvas.width / 2;
    const baseY = fireworksCanvas.height / 2;
    const waveAmplitude = 20;
    const waveFrequency = 0.005;

    const totalWidth = ctx.measureText(name).width;
    let currentX = baseX - totalWidth / 2;

    for (let i = 0; i < name.length; i++) {
      const char = name.charAt(i);
      const charWidth = ctx.measureText(char).width;
      const offsetY = Math.sin((timestamp + i * 100) * waveFrequency) * waveAmplitude;
      ctx.fillText(char, currentX + charWidth / 2, baseY + offsetY);
      currentX += charWidth;
    }

    ctx.restore();
  }

  function animateFireworks(timestamp) {
    if (!timestamp) timestamp = performance.now();

    if (!fireworksStartTime) fireworksStartTime = timestamp;
    const elapsed = timestamp - fireworksStartTime;

    if (elapsed < 10000) {
      if (explosionCount % 2 === 0) {
        const x = Math.random() * (fireworksCanvas.width / 2);
        const y = Math.random() * fireworksCanvas.height;
        createFirework(x, y);
      } else {
        const x = (fireworksCanvas.width / 2) + Math.random() * (fireworksCanvas.width / 2);
        const y = Math.random() * fireworksCanvas.height;
        createFirework(x, y);
      }
      explosionCount++;
    } else {
      // FADE-OUT suave
      fireworksCanvas.style.opacity = '0';

      setTimeout(() => {
        cancelAnimationFrame(fireworksAnimationId);
        fireworksAnimationId = null;
        fireworks = [];
        ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
        if (fireworksCanvas.parentNode) {
          fireworksCanvas.remove();
          fireworksCanvas = null;
          ctx = null;
        }
      }, 1500);

      return;
    }

    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    fireworks.forEach(fw => {
      fw.update();
      fw.draw(ctx);
    });

    fireworks = fireworks.filter(fw => fw.isAlive);

    drawWinnerNameWaveEffect(currentWinnerName, timestamp);

    fireworksAnimationId = requestAnimationFrame(animateFireworks);
  }

  function startFireworks() {
    if (!fireworksCanvas) {
      fireworksCanvas = document.createElement('canvas');
      fireworksCanvas.id = 'fireworksCanvas';
      fireworksCanvas.style.position = 'fixed';
      fireworksCanvas.style.top = '0';
      fireworksCanvas.style.left = '0';
      fireworksCanvas.style.width = '100%';
      fireworksCanvas.style.height = '100%';
      fireworksCanvas.style.pointerEvents = 'none';
      fireworksCanvas.style.zIndex = '10';
      fireworksCanvas.style.background = 'transparent';
      fireworksCanvas.style.transition = 'opacity 1.5s ease';
      fireworksCanvas.style.opacity = '1';
      document.body.appendChild(fireworksCanvas);
      ctx = fireworksCanvas.getContext('2d');

      function resize() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);
    }

    fireworks = [];
    fireworksStartTime = null;
    explosionCount = 0;
    if (fireworksAnimationId) {
      cancelAnimationFrame(fireworksAnimationId);
      fireworksAnimationId = null;
    }
    fireworksAnimationId = requestAnimationFrame(animateFireworks);
  }

  // ======== EVENTO DO BOTÃO ==========
  startBtn.addEventListener('click', () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    resultText.textContent = '';
    resultText.style.animation = 'none';
    currentWinnerName = null;

    const rawNames = namesInput.value.trim();
    if (!rawNames) {
      alert('Por favor, digite pelo menos um nome.');
      return;
    }

    names = rawNames.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (names.length === 0) {
      alert('Digite nomes válidos.');
      return;
    }

    const chosenName = names[Math.floor(Math.random() * names.length)];
    currentWinnerName = chosenName.toUpperCase();

    roletaAudio.currentTime = 0;
    roletaAudio.play();

    animateMatrixSuspense(chosenName, () => {
      zeldaAudio.currentTime = 0;
      zeldaAudio.play();

      resultText.textContent = `Sorteado: ${chosenName}`;
      resultText.style.animation = 'bounce 1.2s ease infinite';

      startFireworks();
    });
  });
})();






















// Section Viewport effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animated-section");

  const effects = [
    "effect-car-left",
    //"effect-car-right",
    "effect-car-top"
    // "effect-car-bottom" removido
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const content = section.querySelector(".animated-content");

        if (content && !content.classList.contains("animated")) {
          const randomEffect = effects[Math.floor(Math.random() * effects.length)];
          section.classList.add(randomEffect);
          content.classList.add("animated");
        }

        observer.unobserve(section); // remove se não quiser repetir
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(section => observer.observe(section));
});




// Partner Channers Carroussel

const partnerData = [
  { name: "Defenestrando Jogos", url: "https://www.youtube.com/@defenestrandojogos", img: "/assets/images/partnerch/defenestrando.jpg" },
  { name: "Canal Maddrugamers", url: "https://www.youtube.com/@maddrugamers", img: "/assets/images/partnerch/maddrugamers.jpg" },
  { name: "Direto dos Consoles", url: "https://www.youtube.com/@DiretodosConsoles", img: "/assets/images/partnerch/diretodosconsoles.jpg" },
  { name: "Retrozera", url: "https://www.youtube.com/@Retrozera", img: "/assets/images/partnerch/retrozera.jpg" },
  { name: "Detona Bits", url: "https://www.youtube.com/@Detonabits", img: "/assets/images/partnerch/detonabits.jpg" },
  { name: "Joga+", url: "https://www.youtube.com/@alan.jogamais", img: "/assets/images/partnerch/jogamais.jpg" },
  { name: "Gameplay Br", url: "https://www.youtube.com/@gameplaybr1746", img: "/assets/images/partnerch/gameplaybr.jpg" },
  { name: "GuaxaZX", url: "https://www.youtube.com/@GuaxaZX", img: "/assets/images/partnerch/guaxazx.jpg" },
  { name: "Nostal GAMES Retro", url: "https://www.youtube.com/@nostalgamesretro", img: "/assets/images/partnerch/nostalgamesretro.jpg" },
  { name: "Jana Gamer", url: "https://www.youtube.com/@JanaGamer", img: "/assets/images/partnerch/janagamer.jpg" },
  { name: "Anielleon", url: "https://www.youtube.com/@anielleom", img: "/assets/images/partnerch/anielleom.jpg" },
  { name: "Mina dos Games (Amanda Nicoly)", url: "https://www.youtube.com/@minadosgamesamandanicoly6493", img: "/assets/images/partnerch/minadosgames.jpg" },
  { name: "Attomic Games TV", url: "https://www.youtube.com/@Attomicgames", img: "/assets/images/partnerch/attomicgames.jpg" },
  { name: "OpassadoRecentedosGames", url: "https://www.youtube.com/@OpassadoRecenteDosGames", img: "/assets/images/partnerch/opassadorecente.jpg" },
  { name: "Gorilas Sisters", url: "https://www.youtube.com/@GorilasSisters", img: "/assets/images/partnerch/gorilassisters.jpg" },
  { name: "Games das antigas", url: "https://www.youtube.com/@Gamesdasantigas", img: "/assets/images/partnerch/gamesdasantigas.jpg" },
  { name: "MiRiNiOR GAMES", url: "https://www.youtube.com/@MiRiNiOR", img: "/assets/images/partnerch/miriniorgames.jpg" },
  { name: "Fernando Lucas", url: "https://www.youtube.com/@fernando_lcs", img: "/assets/images/partnerch/fernandolucas.jpg" },
  { name: "Toloi Games", url: "https://www.youtube.com/@ToloiGames", img: "/assets/images/partnerch/toloigames.jpg" },
  { name: "Creative Games", url: "https://www.youtube.com/@CreativeGamesOficial", img: "/assets/images/partnerch/creativegames.jpg" }
];

const container = document.querySelector(".channel-carousel-container");
const track = document.querySelector(".channel-carousel-track");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createSlides() {
  const shuffled = shuffle([...partnerData]);
  const slides = shuffled.map(data => {
    const div = document.createElement("div");
    div.className = "channel-slide";
    div.innerHTML = `
      <a href="${data.url}" target="_blank">
        <img src="${data.img}" alt="${data.name}">
        <p>${data.name}</p>
      </a>
    `;
    return div;
  });

  slides.forEach(slide => track.appendChild(slide));
  slides.forEach(slide => track.appendChild(slide.cloneNode(true))); // Duplicar para loop
}

createSlides();

let scrollSpeed = 0.5;
let scrollDirection = 1;

function animateScroll() {
  container.scrollLeft += scrollSpeed * scrollDirection;

  if (container.scrollLeft >= track.scrollWidth / 2) {
    container.scrollLeft = 0;
  } else if (container.scrollLeft <= 0) {
    container.scrollLeft = track.scrollWidth / 2;
  }

  requestAnimationFrame(animateScroll);
}

animateScroll();

function updateScrollSpeed(x) {
  const width = container.offsetWidth;
  const left = width * 0.2;
  const right = width * 0.8;

  if (x < left) {
    scrollDirection = -1;
    scrollSpeed = 1.5;
  } else if (x > right) {
    scrollDirection = 1;
    scrollSpeed = 1.5;
  } else {
    scrollDirection = 1;
    scrollSpeed = 0.5;
  }
}

container.addEventListener("mousemove", e => updateScrollSpeed(e.clientX));
container.addEventListener("touchmove", e => {
  if (e.touches.length > 0) updateScrollSpeed(e.touches[0].clientX);
});



