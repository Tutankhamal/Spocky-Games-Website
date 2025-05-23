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

  // Initialize AOS elements
  initAOS()

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

  // Initialize Partner Modal
  if (partnerCards.length > 0 && modalOverlay) {
    partnerCards.forEach((card) => {
      card.querySelector("button").addEventListener("click", () => {
        const partnerId = card.getAttribute("data-partner-id")
        openPartnerModal(partnerId)
      })
    })

    closeModal.addEventListener("click", closePartnerModal)
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closePartnerModal()
      }
    })
  }

  // Initialize Filter Buttons
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")
        filterContent(filter)

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
      })
    })
  }
  
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

  function openPartnerModal(partnerId) {
    // In a real application, you would fetch partner data based on the ID
    // For now, we'll just show the modal with placeholder content
    const modalTitle = document.querySelector(".modal-title h2")
    const modalCategory = document.querySelector(".modal-category")
    const modalDescription = document.querySelector(".modal-description p")

    // Sample data - in a real app, this would come from an API or database
    const partnerData = {
      1: {
        name: "E-Cast",
        category: "Soluções em Streaming",
        description:
          "E-Cast é uma plataforma de streaming que oferece soluções completas para transmissões ao vivo e sob demanda. Com tecnologia de ponta e suporte especializado, a E-Cast é a escolha ideal para quem busca qualidade e confiabilidade em suas transmissões.",
      },
      2: {
        name: "Entretonic",
        category: "Máquinas de Fliperamas Arcades",
        description:
          "Entretonic é uma empresa especializada na fabricação e restauração de máquinas de fliperama. Com uma equipe de técnicos experientes, a Entretonic oferece serviços de manutenção, personalização e venda de máquinas arcade, trazendo de volta a nostalgia dos jogos clássicos.",
      },
      3: {
        name: "Frames Gamer",
        category: "Artes e Molduras",
        description:
          "Frames Gamer é uma empresa especializada na criação de artes e molduras personalizadas para jogos e colecionáveis. Com uma equipe de artistas talentosos, a Frames Gamer oferece serviços de design gráfico, ilustração e impressão de alta qualidade, ajudando os fãs a exibir suas coleções com estilo.",
      },
      4: {
        name: "Revolution Sticks",
        category: "Controles e Arcades",
        description:
          "Revolution Sticks é uma empresa especializada na fabricação de controles personalizados e acessórios para jogos. Com uma equipe de engenheiros e designers apaixonados por games, a Revolution Sticks oferece produtos de alta qualidade que melhoram a experiência de jogo, incluindo controles arcade, joysticks e botões personalizados.",
      },
      5: {
        name: "Retro Game Fest",
        category: "Eventos",
        description:
          "Retro Game Fest é uma empresa organizadora de eventos e competições de jogos retrô em todo o Brasil. Desde 2017, a empresa realiza anualmente o maior festival de jogos retrô do país, reunindo colecionadores, jogadores, desenvolvedores e entusiastas. O evento conta com torneios, exposições, palestras, área de vendas e muito mais, celebrando a história e o legado dos videogames.",
      },
      6: {
        name: "8-Bit Brewery",
        category: "Bebidas & Alimentação",
        description:
          "8-Bit Brewery é uma cervejaria artesanal com rótulos inspirados em jogos clássicos e cultura retrô. Fundada em 2019 por amigos gamers e cervejeiros, a empresa produz cervejas artesanais com nomes, sabores e rótulos que homenageiam clássicos dos videogames. Além das cervejas, a 8-Bit Brewery também possui um brewpub temático em São Paulo, onde os clientes podem jogar em consoles retrô enquanto degustam as criações da casa.",
      },
    }

    // Update modal content
    if (partnerData[partnerId]) {
      const partner = partnerData[partnerId]
      modalTitle.textContent = partner.name
      modalCategory.textContent = partner.category
      modalDescription.textContent = partner.description
    }

    // Show modal
    modalOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  function closePartnerModal() {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }

  function filterContent(filter) {
    // This function would filter content based on the selected category
    // For now, we'll just log the filter
    console.log("Filtering by:", filter)

    // In a real application, you would show/hide elements based on the filter
    // Example:
    // const items = document.querySelectorAll('.filterable-item');
    // items.forEach(item => {
    //     if (filter === 'all' || item.classList.contains(filter)) {
    //         item.style.display = 'block';
    //     } else {
    //         item.style.display = 'none';
    //     }
    // });
  }

  function initAOS() {
    // Find all elements with data-aos attribute
    const aosElements = document.querySelectorAll("[data-aos]")

    // Set initial state
    aosElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(50px)"
    })

    // Trigger initial check
    animateOnScroll()
  }

  function animateOnScroll() {
    const aosElements = document.querySelectorAll("[data-aos]")

    aosElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("aos-animate")
      }
    })
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
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




  // YouTube Player
const canalID = "UCSPC6X4M-tVPeK4IZMbK5aw"; // Substitua pelo ID do canal
  const videoBox = document.getElementById("video-box");

  function carregarIframe(videoId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    iframe.style.width = "100%";
    iframe.style.aspectRatio = "16 / 9";
    iframe.style.border = "none";
    videoBox.innerHTML = "";
    videoBox.appendChild(iframe);
  }

  fetch(`https://feedrapp.info/api/v1/converter?url=https://www.youtube.com/feeds/videos.xml?channel_id=${canalID}`)
    .then(res => res.json())
    .then(data => {
      const videoUrl = data.items?.[0]?.link;
      if (videoUrl) {
        const videoId = new URL(videoUrl).searchParams.get("v");
        carregarIframe(videoId);
      } else {
        videoBox.innerHTML = "<p>Vídeo não encontrado.</p>";
      }
    })
    .catch(err => {
      console.error(err);
      videoBox.innerHTML = "<p>Não foi possível carregar o vídeo.</p>";
    });


    const channelID = "UCSPC6X4M-tVPeK4IZMbK5aw";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const videoId = data.items[0].link.split('=')[1];
      const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      document.getElementById("latest-video-box").innerHTML = iframe;
    })
    .catch(err => {
      console.error("Erro ao carregar vídeo:", err);
      document.getElementById("latest-video-box").innerText = "Erro ao carregar vídeo.";
    });
    
    
   // Background with Pacman interactive with mouse
const canvas = document.getElementById('retro-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const tileSize = 40;
const cols = Math.floor(width / tileSize);
const rows = Math.floor(height / tileSize);

// Cores CMYK com transparência equivalente a #3cc81c10
const mazeColors = [
  '#00ffff10', // Cyan
  '#ffff0010', // Yellow
  '#ff00ff10', // Magenta
];

// Escolhe uma cor aleatória para o labirinto
const mazeColor = mazeColors[Math.floor(Math.random() * mazeColors.length)];

let maze = [];

function generateMaze() {
  maze = [];
  for (let y = 0; y < rows; y++) {
    maze[y] = [];
    for (let x = 0; x < cols; x++) {
      if (x === 0 || y === 0 || x === cols - 1 || y === rows - 1) {
        maze[y][x] = 1;
      } else {
        if (x % 5 === 0) {
          maze[y][x] = Math.random() < 0.8 ? 1 : 0;
        } else if (y % 4 === 0) {
          maze[y][x] = Math.random() < 0.6 ? 1 : 0;
        } else {
          maze[y][x] = 0;
        }
      }
    }
  }
}

generateMaze();

const mouse = { x: Math.floor(cols / 2), y: Math.floor(rows / 2) };

document.addEventListener('mousemove', e => {
  mouse.x = Math.min(cols - 1, Math.max(0, Math.floor(e.clientX / tileSize)));
  mouse.y = Math.min(rows - 1, Math.max(0, Math.floor(e.clientY / tileSize)));
});

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    const colors = ['#3d3558', '#2e2a49', '#4a4367'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5;
    ctx.fill();
  }
  update() {
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
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

const pacman = {
  x: 1,
  y: 1,
  px: 1,
  py: 1,
  angle: 0,
  direction: 'right',
  path: [],
  speed: 0.07,
  moving: false,
  target: null
};

function heuristic(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function findPath(start, end) {
  const openSet = [start];
  const cameFrom = {};
  const gScore = {};
  const fScore = {};

  function nodeKey(n) {
    return `${n.x},${n.y}`;
  }

  gScore[nodeKey(start)] = 0;
  fScore[nodeKey(start)] = heuristic(start, end);

  while (openSet.length > 0) {
    openSet.sort((a, b) => fScore[nodeKey(a)] - fScore[nodeKey(b)]);
    const current = openSet.shift();
    if (current.x === end.x && current.y === end.y) {
      const path = [];
      let temp = nodeKey(current);
      while (temp in cameFrom) {
        path.unshift(cameFrom[temp]);
        temp = nodeKey(cameFrom[temp]);
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
        fScore[key] = tentativeG + heuristic(neighbor, end);
        if (!openSet.find(n => n.x === neighbor.x && n.y === neighbor.y)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return [];
}

function updatePacman() {
  if (!pacman.moving) {
    const target = { x: mouse.x, y: mouse.y };
    if (pacman.path.length === 0 || Math.random() < 0.02) {
      pacman.path = findPath({ x: Math.round(pacman.px), y: Math.round(pacman.py) }, target);
    }
    if (pacman.path.length > 0) {
      pacman.target = pacman.path.shift();
      pacman.moving = true;

      if (pacman.target.x > pacman.px) pacman.direction = 'right';
      else if (pacman.target.x < pacman.px) pacman.direction = 'left';
      else if (pacman.target.y > pacman.py) pacman.direction = 'down';
      else if (pacman.target.y < pacman.py) pacman.direction = 'up';
    }
  }

  if (pacman.moving && pacman.target) {
    const dx = pacman.target.x - pacman.px;
    const dy = pacman.target.y - pacman.py;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < pacman.speed) {
      pacman.px = pacman.target.x;
      pacman.py = pacman.target.y;
      pacman.moving = false;
      pacman.x = pacman.target.x;
      pacman.y = pacman.target.y;
      pacman.target = null;
    } else {
      pacman.px += (dx / dist) * pacman.speed;
      pacman.py += (dy / dist) * pacman.speed;
    }
  }

  pacman.angle += 0.2;
}

function drawMaze() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = mazeColor;
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        ctx.strokeStyle = mazeColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
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

function animate() {
  ctx.clearRect(0, 0, width, height);

  drawMaze();
  updatePacman();
  drawPacman();

  for (const p of particles) {
    p.update();
    p.draw();
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});


// Pixeated effect
document.addEventListener("DOMContentLoaded", () => {
  const pixelatedSections = document.querySelectorAll(".pixelated");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, {
    threshold: 0.3 // ativa quando 30% da seção estiver visível
  });

  pixelatedSections.forEach(section => {
    observer.observe(section);
  });
});




// Tetris Viewport effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animated-section");

  const effects = [
    "effect-car-left",
    "effect-car-right",
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
