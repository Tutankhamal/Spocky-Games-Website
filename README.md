# 🎮 Tema Spocky Games - Documentação Completa

## 📋 Índice

1. [Visão Geral](#-visão-geral)
2. [Estrutura de Arquivos](#-estrutura-de-arquivos)
3. [Páginas Principais](#-páginas-principais)
4. [Sistema de Navegação](#-sistema-de-navegação)
5. [Animações e Efeitos Visuais](#-animações-e-efeitos-visuais)
6. [Banner Animado com Personagens](#-banner-animado-com-personagens)
7. [Carrosséis e Banners](#-carrosséis-e-banners)
8. [Sistema WooCommerce](#-sistema-woocommerce)
9. [Integrações de API](#-integrações-de-api)
10. [Configurações do Tema](#-configurações-do-tema)
11. [Responsividade](#-responsividade)
12. [Otimizações](#-otimizações)
13. [Manutenção](#-manutenção)
14. [Guia de Desenvolvimento](#-guia-de-desenvolvimento)
15. [Solução de Problemas](#-solução-de-problemas)

---

## 🎯 Visão Geral

O **Tema Spocky Games** é um tema WordPress personalizado desenvolvido para o canal de jogos Spocky Games. Combina design moderno com funcionalidades avançadas, incluindo integração com YouTube, sistema de e-commerce WooCommerce, animações interativas e efeitos visuais únicos.

### Características Principais
- 🎨 Design retrô-futurista com efeitos de glitch
- 🎮 Integração completa com YouTube API
- 🛒 Sistema de loja WooCommerce customizado
- ⚡ Animações e transições fluidas
- 📱 Design totalmente responsivo
- 🎪 Banner animado com personagens GIFs
- 🎯 Carrosséis interativos para parceiros
- 🎨 Background animado estilo Pac-Man

---

## 📁 Estrutura de Arquivos

```
wp-content/themes/spockygames/
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos principais
│   ├── js/
│   │   ├── script.js              # JavaScript principal
│   │   └── script-fixed.js        # Correções específicas de JavaScript
│   └── images/
│       ├── mummy.gif              # Personagens animados
│       ├── sonic.gif
│       ├── mario.gif
│       ├── luigi.gif
│       ├── wario.gif
│       ├── dk.gif
│       ├── mickey.gif
│       ├── banner_wide.png        # Background do banner
│       ├── partnerlogos/          # Logos dos patrocinadores
│       │   ├── ecast.webp
│       │   ├── entretonic.webp
│       │   └── sejaumpatrocinador.webp
│       ├── partnerch/             # Logos dos canais parceiros
│       │   ├── anielleom.webp
│       │   ├── attomicgames.webp
│       │   ├── creativegames.webp
│       │   ├── defenestrando.webp
│       │   ├── detonabits.webp
│       │   ├── diretodosconsoles.webp
│       │   ├── fernandolucas.webp
│       │   ├── gameplaybr.webp
│       │   ├── gamesdasantigas.webp
│       │   ├── gorilassisters.webp
│       │   ├── guaxazx.webp
│       │   ├── janagamer.webp
│       │   ├── jogamais.webp
│       │   ├── maddrugamers.webp
│       │   ├── minadosgames.webp
│       │   ├── miriniorgames.webp
│       │   ├── nostalgamesretro.webp
│       │   ├── opassadorecente.webp
│       │   ├── retrozera.webp
│       │   └── toloigames.webp
│       ├── team/                  # Fotos da equipe
│       │   ├── 1berto.png
│       │   ├── 1berto.webp
│       │   ├── detonabits.png
│       │   ├── detonabits.webp
│       │   ├── edson.png
│       │   ├── edson.webp
│       │   ├── natan.png
│       │   ├── natan.webp
│       │   ├── rene.png
│       │   ├── rene.webp
│       │   ├── spocky.png
│       │   ├── spocky.webp
│       │   ├── tutas.png
│       │   └── tutas.webp
│       └── icons/                 # Ícones do tema
│           ├── 100x100.png
│           └── 75x75.png
├── woocommerce/
│   ├── archive-product.php        # Página da loja (lista de produtos)
│   ├── single-product.php         # Template de produto individual
│   ├── cart/
│   │   └── cart.php              # Template do carrinho de compras
│   └── checkout/
│       ├── form-checkout.php      # Formulário de checkout
│       └── review-order.php       # Revisão do pedido
├── old_static_html/               # Versões HTML estáticas
├── header.php                     # Cabeçalho do site
├── footer.php                     # Rodapé com carrossel
├── index.php                      # Página inicial
├── single.php                     # Template para posts individuais
├── functions.php                  # Funções do tema
├── page-aovivo.php               # Página Ao Vivo - Transmissões
├── page-ondemand.php             # Página On Demand - Vídeos
├── page-extras.php               # Página Extras - Jogos e aplicativos
├── page-parceiros.php            # Página Parceiros - Equipe e patrocinadores
├── page-contato.php              # Página Contato - Formulário e informações
├── page-novidades.php            # Página Novidades - Últimas notícias
├── page-loja.php                 # Página Loja - Produtos exclusivos
├── page-loja-BAD.php             # Página Loja - Versão antiga (backup)
├── page-carrinho.php             # Página Carrinho - Wrapper WooCommerce
├── page-checkout.php             # Página Checkout - Finalização de compras
└── style.css                     # Arquivo de estilo base
```

---

## 📄 Páginas Principais

### 🏠 Página Inicial (`index.php`)
- **Hero Section**: Logo animado com efeitos de hover
- **Estatísticas**: Contadores animados (inscritos, visualizações, vídeos)
- **Seção de Vídeos**: Grid responsivo com player integrado
- **Sobre**: História e missão do canal
- **Call-to-Action**: Botões para páginas principais

### 🔴 Página Ao Vivo (`page-aovivo.php`)
- **Banner Animado**: Personagens GIFs com efeito "empurrar"
- **Player de Live**: Integração com YouTube para transmissões ao vivo
- **Chat Integrado**: Chat do YouTube incorporado
- **Detecção Automática**: Identifica se há live ativa

### 📺 Página On Demand (`page-ondemand.php`)
- **Banner Animado**: Mesmo sistema da página Ao Vivo
- **Player Aleatório**: Vídeo anterior aleatório do canal
- **Grid de Conteúdo**: Todos os vídeos do canal organizados
- **Filtros**: Sistema de busca e categorização

### 🎮 Página Extras (`page-extras.php`)
- **Banner Animado**: Personagens e conteúdo promocional
- **Jogos Interativos**: Matrix Rain, Roleta, Fogos de Artifício
- **Controles de Áudio**: Player de música ambiente
- **Efeitos Especiais**: Animações de partículas

### 🤝 Página Parceiros (`page-parceiros.php`)
- **Seção de Patrocinadores**: Cards com logos e descrições
- **Equipe**: Membros da equipe Spocky Games
- **Canais Parceiros**: Carrossel dinâmico
- **Call-to-Action**: Formulário para novos parceiros

### 📞 Página Contato (`page-contato.php`)
- **Formulário de Contato**: Sistema completo com validação
- **FAQ Interativo**: Perguntas frequentes com acordeão
- **Informações**: Dados de contato e redes sociais
- **Mapa**: Localização (se aplicável)

### 📰 Página Novidades (`page-novidades.php`)
- **Estatísticas Semanais**: Lives mais longas, primeiras lives
- **Integração YouTube**: Dados em tempo real
- **Cache Inteligente**: Sistema de cache para performance
- **Cards Dinâmicos**: Conteúdo atualizado automaticamente

---

## 🧭 Sistema de Navegação

### 🎯 Navbar Principal Inteligente

#### 📱 Design e Comportamento
- **Posição**: Navbar fixa no topo com z-index elevado
- **Transparência**: Efeito de transparência dinâmica baseada no scroll
- **Logo**: Animado com efeitos de hover e transições suaves
- **Menu**: Links para todas as páginas principais com indicadores visuais
- **Auto-Hide**: Sistema inteligente de ocultação/exibição baseado na direção do scroll

#### 🔄 Sistema Auto-Hide Inteligente - Detecção de Scroll Avançada

**Visão Geral:**
O sistema auto-hide da navbar é uma funcionalidade avançada que detecta a direção e velocidade do scroll do usuário para automaticamente ocultar ou exibir a barra de navegação, proporcionando uma experiência de navegação mais fluida e imersiva. O sistema funciona em qualquer área do site e economiza tempo de scrolling para o usuário.

**Características Principais:**
- **Detecção Bidirecional**: Monitora scroll para cima e para baixo
- **Sensibilidade Configurável**: Threshold personalizável para ativação
- **Velocidade Inteligente**: Considera velocidade do scroll para decisões
- **Inércia de Scroll**: Detecta quando o usuário para de fazer scroll
- **Proximidade do Mouse**: Mostra navbar quando mouse se aproxima do topo
- **Suporte Touch**: Otimizado para dispositivos móveis
- **Performance Otimizada**: Throttling e debouncing para 60fps

**Implementação JavaScript Completa:**
```javascript
// wp-content/themes/spockygames/assets/js/navbar-autohide.js

class NavbarAutoHide {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.scrollDirection = 'up';
        this.scrollSpeed = 0;
        this.isScrolling = false;
        this.scrollTimer = null;
        this.rafId = null;
        
        // Configurações avançadas
        this.config = {
            hideThreshold: 100,      // pixels para começar a ocultar
            showThreshold: 50,       // pixels para mostrar novamente
            speedThreshold: 5,       // velocidade mínima para ocultar
            debounceTime: 150,       // tempo de debounce (ms)
            animationDuration: 300,  // duração da animação (ms)
            transparentZone: 200,    // zona transparente no topo
            peekDuration: 2000,      // tempo que fica visível após peek
            mouseProximity: 100,     // distância do mouse para mostrar
            touchSensitivity: true   // sensibilidade ao toque
        };
        
        // Estados possíveis da navbar
        this.states = {
            VISIBLE: 'visible',
            HIDDEN: 'hidden',
            PEEK: 'peek',
            TRANSPARENT: 'transparent',
            SOLID: 'solid'
        };
        
        this.currentState = this.states.VISIBLE;
        this.peekTimer = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateNavbarState();
        console.log('NavbarAutoHide initialized');
    }
    
    setupEventListeners() {
        // Scroll listener com throttling para 60fps
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16), { passive: true });
        
        // Resize listener para recalcular em mudanças de viewport
        window.addEventListener('resize', this.debounce(() => {
            this.updateNavbarState();
        }, this.config.debounceTime));
        
        // Mouse movement para peek quando próximo ao topo
        document.addEventListener('mousemove', this.throttle((e) => {
            this.handleMouseMove(e);
        }, 100));
        
        // Touch events para dispositivos móveis
        document.addEventListener('touchstart', () => {
            this.handleTouchStart();
        }, { passive: true });
        
        // Visibility change para reativar quando tab volta ao foco
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.updateNavbarState();
            }
        });
        
        // Escape key para mostrar navbar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentState === this.states.HIDDEN) {
                this.setState(this.states.PEEK);
                this.startPeekTimer();
            }
        });
    }
    
    handleScroll() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        
        this.rafId = requestAnimationFrame(() => {
            this.updateScrollData();
            this.updateNavbarState();
            this.handleScrollEnd();
        });
    }
    
    updateScrollData() {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - this.lastScrollY;
        
        // Calcula velocidade do scroll
        this.scrollSpeed = Math.abs(scrollDelta);
        
        // Determina direção do scroll
        if (scrollDelta > 0) {
            this.scrollDirection = 'down';
        } else if (scrollDelta < 0) {
            this.scrollDirection = 'up';
        }
        
        this.lastScrollY = currentScrollY;
        this.isScrolling = true;
        
        // Clear existing scroll end timer
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
        }
    }
    
    updateNavbarState() {
        const scrollY = window.scrollY;
        const { hideThreshold, showThreshold, speedThreshold, transparentZone } = this.config;
        
        let newState = this.currentState;
        
        // Determina novo estado baseado na posição e movimento
        if (scrollY <= transparentZone) {
            // Zona transparente no topo da página
            newState = this.states.TRANSPARENT;
        } else if (scrollY <= hideThreshold) {
            // Zona sempre visível
            newState = this.states.VISIBLE;
        } else {
            // Zona de auto-hide ativa
            if (this.scrollDirection === 'down' && this.scrollSpeed > speedThreshold) {
                // Scroll rápido para baixo - oculta
                newState = this.states.HIDDEN;
            } else if (this.scrollDirection === 'up') {
                if (this.scrollSpeed > speedThreshold) {
                    // Scroll rápido para cima - peek
                    newState = this.states.PEEK;
                    this.startPeekTimer();
                } else if (scrollY <= this.lastScrollY + showThreshold) {
                    // Scroll lento para cima - mostra
                    newState = this.states.VISIBLE;
                }
            }
        }
        
        // Aplica o estado se mudou
        if (newState !== this.currentState) {
            this.setState(newState);
        }
        
        // Atualiza estilo visual da navbar
        this.updateNavbarStyle(scrollY);
    }
    
    setState(newState) {
        // Remove classes de estado anterior
        Object.values(this.states).forEach(state => {
            this.navbar.classList.remove(`navbar--${state}`);
        });
        
        // Adiciona nova classe de estado
        this.navbar.classList.add(`navbar--${newState}`);
        
        // Atualiza estado atual
        this.currentState = newState;
        
        // Trigger custom event para outros scripts
        this.navbar.dispatchEvent(new CustomEvent('navbarStateChange', {
            detail: { 
                state: newState, 
                scrollY: window.scrollY,
                timestamp: Date.now()
            }
        }));
        
        console.log(`Navbar state changed to: ${newState}`);
    }
    
    updateNavbarStyle(scrollY) {
        const { transparentZone } = this.config;
        
        // Controla transparência baseada na posição
        if (scrollY <= transparentZone) {
            this.navbar.classList.add('navbar--transparent');
            this.navbar.classList.remove('navbar--solid');
        } else {
            this.navbar.classList.remove('navbar--transparent');
            this.navbar.classList.add('navbar--solid');
        }
        
        // Atualiza opacidade do background gradualmente
        const opacity = Math.min(1, scrollY / transparentZone);
        this.navbar.style.setProperty('--navbar-bg-opacity', opacity);
        
        // Atualiza blur do backdrop
        const blurAmount = Math.min(20, (scrollY / transparentZone) * 20);
        this.navbar.style.setProperty('--navbar-blur', `${blurAmount}px`);
    }
    
    handleScrollEnd() {
        // Detecta quando o usuário para de fazer scroll
        this.scrollTimer = setTimeout(() => {
            this.isScrolling = false;
            
            // Se estava oculta e parou de fazer scroll, mostra navbar brevemente
            if (this.currentState === this.states.HIDDEN && window.scrollY > this.config.hideThreshold) {
                this.setState(this.states.PEEK);
                this.startPeekTimer();
            }
        }, this.config.debounceTime);
    }
    
    startPeekTimer() {
        // Limpa timer anterior se existir
        if (this.peekTimer) {
            clearTimeout(this.peekTimer);
        }
        
        // Oculta navbar após período de peek
        this.peekTimer = setTimeout(() => {
            if (this.currentState === this.states.PEEK && !this.isScrolling) {
                this.setState(this.states.HIDDEN);
            }
        }, this.config.peekDuration);
    }
    
    handleMouseMove(e) {
        // Mostra navbar quando mouse está próximo ao topo
        if (e.clientY <= this.config.mouseProximity && this.currentState === this.states.HIDDEN) {
            this.setState(this.states.PEEK);
            this.startPeekTimer();
        }
    }
    
    handleTouchStart() {
        // Em dispositivos touch, sempre mostra navbar ao tocar
        if (this.currentState === this.states.HIDDEN) {
            this.setState(this.states.PEEK);
            this.startPeekTimer();
        }
    }
    
    // Utility functions para performance
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Métodos públicos para controle manual
    show() {
        this.setState(this.states.VISIBLE);
        console.log('Navbar manually shown');
    }
    
    hide() {
        this.setState(this.states.HIDDEN);
        console.log('Navbar manually hidden');
    }
    
    toggle() {
        if (this.currentState === this.states.HIDDEN) {
            this.show();
        } else {
            this.hide();
        }
    }
    
    // Método para atualizar configurações dinamicamente
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        console.log('Navbar config updated:', this.config);
    }
    
    // Cleanup method
    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
        }
        if (this.peekTimer) {
            clearTimeout(this.peekTimer);
        }
        
        // Remove todos os event listeners
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateNavbarState);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('touchstart', this.handleTouchStart);
        document.removeEventListener('visibilitychange', this.updateNavbarState);
        
        console.log('NavbarAutoHide destroyed');
    }
}

// Inicialização automática quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.navbar')) {
        window.navbarAutoHide = new NavbarAutoHide();
        
        // Expõe métodos globalmente para debug
        window.showNavbar = () => window.navbarAutoHide.show();
        window.hideNavbar = () => window.navbarAutoHide.hide();
        window.toggleNavbar = () => window.navbarAutoHide.toggle();
    }
});
```

**Estados Avançados da Navbar:**
- **Visible**: `transform: translateY(0)` - Navbar totalmente visível
- **Hidden**: `transform: translateY(-100%)` - Navbar desliza para cima e fica oculta
- **Peek**: `transform: translateY(0)` - Aparece brevemente durante scroll para cima
- **Transparent**: `background: rgba(26,26,46,0.1)` - Transparente no topo da página
- **Solid**: `background: rgba(26,26,46,0.95)` - Sólida durante scroll com backdrop blur

**CSS para Estados da Navbar:**
```css
/* wp-content/themes/spockygames/assets/css/navbar-autohide.css */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                background-color 0.3s ease,
                backdrop-filter 0.3s ease;
    will-change: transform;
    --navbar-bg-opacity: 0;
    --navbar-blur: 0px;
}

/* Estado visível */
.navbar--visible {
    transform: translateY(0);
}

/* Estado oculto */
.navbar--hidden {
    transform: translateY(-100%);
}

/* Estado peek (espiada rápida) */
.navbar--peek {
    transform: translateY(0);
    animation: navbarPeek 0.3s ease-out;
}

/* Estado transparente no topo */
.navbar--transparent {
    background-color: rgba(26, 26, 46, calc(0.1 + 0.7 * var(--navbar-bg-opacity)));
    backdrop-filter: blur(var(--navbar-blur));
    box-shadow: none;
}

/* Estado sólido durante scroll */
.navbar--solid {
    background-color: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Animação de peek */
@keyframes navbarPeek {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Otimizações de performance */
.navbar {
    transform: translateZ(0); /* Force hardware acceleration */
    backface-visibility: hidden;
}

/* Responsividade mobile */
@media (max-width: 768px) {
    .navbar--hidden {
        transform: translateY(-100%);
    }
    
    .navbar--peek {
        animation-duration: 0.2s;
    }
    
    /* Ajustes para dispositivos touch */
    .navbar {
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
    }
}

/* Estados de hover para desktop */
@media (min-width: 769px) {
    .navbar:hover {
        transform: translateY(0) !important;
        transition-duration: 0.2s;
    }
}
```

**Configurações Avançadas:**
```javascript
// Configurações customizáveis do sistema auto-hide
const navbarAutoHideConfig = {
    // Thresholds de ativação
    hideThreshold: 100,      // pixels para começar a ocultar
    showThreshold: 50,       // pixels para mostrar novamente
    speedThreshold: 5,       // velocidade mínima de scroll
    
    // Timing e performance
    debounceTime: 150,       // tempo de debounce (ms)
    animationDuration: 300,  // duração da animação (ms)
    throttleLimit: 16,       // limite de throttling (ms) - 60fps
    
    // Zonas e proximidade
    transparentZone: 200,    // zona transparente no topo
    mouseProximity: 100,     // distância do mouse para mostrar
    peekDuration: 2000,      // tempo que fica visível após peek
    
    // Funcionalidades
    touchSensitivity: true,  // sensibilidade ao toque
    keyboardControl: true,   // controle por teclado (ESC)
    hoverToShow: true,       // mostrar ao hover (desktop)
    
    // Debug e logging
    debug: false,            // ativa logs de debug
    analytics: true          // ativa tracking de eventos
};
```

#### 📱 Sistema Responsivo Avançado - Adaptação Completa

**Visão Geral da Responsividade:**
O sistema responsivo do site é projetado com uma abordagem mobile-first, garantindo que todos os elementos se adaptem perfeitamente a qualquer tamanho de tela. Utilizamos breakpoints estratégicos, CSS Grid, Flexbox e JavaScript adaptativo para criar uma experiência consistente em todos os dispositivos.

**Breakpoints Principais:**
```css
/* Breakpoints do sistema */
:root {
    --mobile-max: 767px;
    --tablet-min: 768px;
    --tablet-max: 1023px;
    --desktop-min: 1024px;
    --desktop-large: 1440px;
    --desktop-xl: 1920px;
}

/* Media queries otimizadas */
@media (max-width: 767px) { /* Mobile */ }
@media (min-width: 768px) and (max-width: 1023px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Desktop Large */ }
@media (min-width: 1920px) { /* Desktop XL */ }
```

**🖥️ Desktop (≥1024px) - Experiência Completa:**
- **Navbar**: Menu horizontal completo com todos os itens visíveis
- **Logo**: Tamanho completo (180px) à esquerda
- **Menu**: Centralizado com espaçamento generoso (40px entre itens)
- **Efeitos**: Hover complexos com transformações e sombras
- **Background Pac-Man**: Resolução máxima com 60fps
- **Carrosséis**: 4-6 itens visíveis simultaneamente
- **Banner Animado**: Personagens em tamanho completo
- **Auto-Hide**: Sensibilidade ao mouse para peek

```css
/* Desktop navbar styling */
@media (min-width: 1024px) {
    .navbar {
        height: 80px;
        padding: 0 2rem;
    }
    
    .navbar-brand img {
        height: 60px;
        width: auto;
    }
    
    .navbar-nav {
        display: flex;
        gap: 2.5rem;
        margin: 0 auto;
    }
    
    .nav-item {
        position: relative;
        padding: 1rem 1.5rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-item:hover {
        transform: translateY(-2px);
        text-shadow: 0 0 10px rgba(0,255,136,0.5);
    }
    
    .nav-item::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #00ff88, #0099ff);
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    .nav-item:hover::after,
    .nav-item.active::after {
        width: 100%;
    }
}
```

**📱 Tablet (768px - 1023px) - Experiência Otimizada:**
- **Navbar**: Menu compacto com ícones + texto reduzido
- **Logo**: Tamanho médio (140px)
- **Menu**: Espaçamento reduzido (20px entre itens)
- **Background**: Resolução média, 30fps para performance
- **Carrosséis**: 2-3 itens visíveis
- **Touch**: Gestos otimizados para navegação

```css
/* Tablet responsive design */
@media (min-width: 768px) and (max-width: 1023px) {
    .navbar {
        height: 70px;
        padding: 0 1.5rem;
    }
    
    .navbar-brand img {
        height: 50px;
    }
    
    .navbar-nav {
        gap: 1.5rem;
    }
    
    .nav-item {
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
    }
    
    /* Ícones + texto compacto */
    .nav-item i {
        display: inline-block;
        margin-right: 0.5rem;
        font-size: 1rem;
    }
    
    /* Background Pac-Man otimizado */
    .pacman-background {
        --maze-size: 20;
        --animation-speed: 1.5s;
    }
    
    /* Carrosséis adaptados */
    .carousel-container {
        --items-visible: 2.5;
        --item-gap: 1rem;
    }
}
```

**📱 Mobile (<768px) - Experiência Touch-First:**
- **Navbar**: Menu hambúrguer com overlay fullscreen
- **Logo**: Centralizado, tamanho compacto (100px)
- **Menu**: Overlay vertical com animações sequenciais
- **Background**: Resolução baixa, 15fps, otimizado para touch
- **Carrosséis**: 1-2 itens com swipe gestures
- **Auto-Hide**: Sensibilidade ao toque aumentada

```css
/* Mobile-first design */
@media (max-width: 767px) {
    .navbar {
        height: 60px;
        padding: 0 1rem;
        justify-content: space-between;
    }
    
    .navbar-brand {
        order: 2; /* Logo centralizado */
        flex: 1;
        text-align: center;
    }
    
    .navbar-brand img {
        height: 40px;
    }
    
    .hamburger-menu {
        order: 1;
        z-index: 1001;
    }
    
    .navbar-nav {
        display: none; /* Oculto por padrão */
    }
    
    /* Mobile menu overlay */
    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(26, 26, 46, 0.98);
        backdrop-filter: blur(20px);
        z-index: 1000;
        transform: translateY(-100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .mobile-menu-overlay.active {
        transform: translateY(0);
    }
    
    .mobile-navigation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 2rem;
    }
    
    .mobile-menu-items {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }
    
    .mobile-menu-items li {
        margin: 1.5rem 0;
        opacity: 0;
        transform: translateY(30px);
        animation: mobileMenuItemSlide 0.6s ease forwards;
    }
    
    .mobile-menu-items li:nth-child(1) { animation-delay: 0.1s; }
    .mobile-menu-items li:nth-child(2) { animation-delay: 0.2s; }
    .mobile-menu-items li:nth-child(3) { animation-delay: 0.3s; }
    .mobile-menu-items li:nth-child(4) { animation-delay: 0.4s; }
    .mobile-menu-items li:nth-child(5) { animation-delay: 0.5s; }
    .mobile-menu-items li:nth-child(6) { animation-delay: 0.6s; }
    .mobile-menu-items li:nth-child(7) { animation-delay: 0.7s; }
    .mobile-menu-items li:nth-child(8) { animation-delay: 0.8s; }
    
    .mobile-menu-items a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 10px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .mobile-menu-items a::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,136,0.2), transparent);
        transition: left 0.6s ease;
    }
    
    .mobile-menu-items a:hover::before {
        left: 100%;
    }
    
    .mobile-menu-items a:hover {
        background: rgba(0,255,136,0.1);
        transform: scale(1.05);
        box-shadow: 0 5px 20px rgba(0,255,136,0.3);
    }
}

@keyframes mobileMenuItemSlide {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**🎯 Elementos Responsivos Específicos:**

**Background Pac-Man Adaptativo:**
```javascript
// Configurações responsivas do background
const responsiveConfig = {
    mobile: {
        mazeSize: 15,
        fps: 15,
        particleCount: 20,
        fruitSpawnRate: 0.3
    },
    tablet: {
        mazeSize: 20,
        fps: 30,
        particleCount: 40,
        fruitSpawnRate: 0.5
    },
    desktop: {
        mazeSize: 25,
        fps: 60,
        particleCount: 80,
        fruitSpawnRate: 0.8
    }
};

// Detecção automática de dispositivo
function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}
```

**Carrosséis Responsivos:**
```css
/* Sistema de carrossel adaptativo */
.carousel-container {
    --items-mobile: 1.2;
    --items-tablet: 2.5;
    --items-desktop: 4;
    --gap-mobile: 0.5rem;
    --gap-tablet: 1rem;
    --gap-desktop: 1.5rem;
}

@media (max-width: 767px) {
    .carousel-container {
        --items-visible: var(--items-mobile);
        --item-gap: var(--gap-mobile);
    }
    
    .carousel-item {
        min-width: calc((100% - (var(--item-gap) * (var(--items-visible) - 1))) / var(--items-visible));
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .carousel-container {
        --items-visible: var(--items-tablet);
        --item-gap: var(--gap-tablet);
    }
}

@media (min-width: 1024px) {
    .carousel-container {
        --items-visible: var(--items-desktop);
        --item-gap: var(--gap-desktop);
    }
}
```

**Banner Animado Responsivo:**
```css
/* Banner com personagens adaptativo */
.animated-banner {
    height: 200px; /* Mobile */
}

@media (min-width: 768px) {
    .animated-banner {
        height: 300px; /* Tablet */
    }
}

@media (min-width: 1024px) {
    .animated-banner {
        height: 400px; /* Desktop */
    }
}

.banner-character {
    width: 60px; /* Mobile */
    height: 60px;
}

@media (min-width: 768px) {
    .banner-character {
        width: 80px; /* Tablet */
        height: 80px;
    }
}

@media (min-width: 1024px) {
    .banner-character {
        width: 120px; /* Desktop */
        height: 120px;
    }
}
```

**Otimizações de Performance por Dispositivo:**
```javascript
// Otimizações baseadas no dispositivo
class ResponsiveOptimizer {
    constructor() {
        this.deviceType = this.getDeviceType();
        this.applyOptimizations();
    }
    
    getDeviceType() {
        const width = window.innerWidth;
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile || width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    }
    
    applyOptimizations() {
        switch(this.deviceType) {
            case 'mobile':
                this.optimizeForMobile();
                break;
            case 'tablet':
                this.optimizeForTablet();
                break;
            case 'desktop':
                this.optimizeForDesktop();
                break;
        }
    }
    
    optimizeForMobile() {
        // Reduz animações complexas
        document.documentElement.style.setProperty('--animation-complexity', 'low');
        // Desabilita alguns efeitos visuais
        document.documentElement.style.setProperty('--enable-particles', '0');
        // Reduz qualidade de imagens
        document.documentElement.style.setProperty('--image-quality', '0.7');
    }
    
    optimizeForTablet() {
        document.documentElement.style.setProperty('--animation-complexity', 'medium');
        document.documentElement.style.setProperty('--enable-particles', '1');
        document.documentElement.style.setProperty('--image-quality', '0.85');
    }
    
    optimizeForDesktop() {
        document.documentElement.style.setProperty('--animation-complexity', 'high');
        document.documentElement.style.setProperty('--enable-particles', '1');
        document.documentElement.style.setProperty('--image-quality', '1');
    }
}

// Inicialização automática
new ResponsiveOptimizer();
```

#### 🍔 Menu Hambúrguer Detalhado

**Estrutura HTML:**
```html
<button class="hamburger-menu" aria-label="Menu">
    <span class="hamburger-line line1"></span>
    <span class="hamburger-line line2"></span>
    <span class="hamburger-line line3"></span>
</button>

<div class="mobile-menu-overlay">
    <nav class="mobile-navigation">
        <ul class="mobile-menu-items">
            <!-- Itens do menu -->
        </ul>
    </nav>
</div>
```

**Animações do Hambúrguer:**
```css
/* Estado normal */
.hamburger-line {
    width: 25px;
    height: 3px;
    background: #fff;
    transition: all 0.3s ease;
    transform-origin: center;
}

/* Estado ativo (X) */
.hamburger-menu.active .line1 {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-menu.active .line2 {
    opacity: 0;
    transform: scale(0);
}

.hamburger-menu.active .line3 {
    transform: rotate(-45deg) translate(6px, -6px);
}
```

**Overlay Mobile:**
- **Entrada**: Slide from top com easing
- **Background**: Backdrop blur com transparência
- **Itens**: Animação sequencial com delay
- **Saída**: Fade out com scale

#### ⚡ Otimizações de Performance
- **Throttling**: Scroll events limitados a 16ms (60fps)
- **Passive Listeners**: Event listeners otimizados
- **Transform**: Uso de transform em vez de position para animações
- **Will-change**: Propriedade CSS para otimização de GPU

#### 🎨 Estados Visuais

**Indicadores de Página Ativa:**
```css
.nav-item.active {
    color: #00ff88;
    border-bottom: 2px solid #00ff88;
    background: linear-gradient(45deg, transparent, rgba(0,255,136,0.1));
}
```

**Efeitos de Hover:**
```css
.nav-item:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 10px rgba(0,255,136,0.5);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 🗺️ Estrutura do Menu
```php
$menu_items = [
    'Início' => [
        'url' => home_url('/'),
        'icon' => 'fas fa-home',
        'description' => 'Página inicial do canal'
    ],
    'Ao Vivo' => [
        'url' => home_url('/aovivo/'),
        'icon' => 'fas fa-broadcast-tower',
        'description' => 'Transmissões ao vivo'
    ],
    'On Demand' => [
        'url' => home_url('/ondemand/'),
        'icon' => 'fas fa-play-circle',
        'description' => 'Vídeos sob demanda'
    ],
    'Extras' => [
        'url' => home_url('/extras/'),
        'icon' => 'fas fa-gamepad',
        'description' => 'Jogos e conteúdo extra'
    ],
    'Parceiros' => [
        'url' => home_url('/parceiros/'),
        'icon' => 'fas fa-handshake',
        'description' => 'Nossos parceiros'
    ],
    'Novidades' => [
        'url' => home_url('/novidades/'),
        'icon' => 'fas fa-newspaper',
        'description' => 'Últimas novidades'
    ],
    'Contato' => [
        'url' => home_url('/contato/'),
        'icon' => 'fas fa-envelope',
        'description' => 'Entre em contato'
    ],
    'Loja' => [
        'url' => home_url('/loja/'),
        'icon' => 'fas fa-shopping-cart',
        'description' => 'Nossa loja oficial'
    ]
];
```

#### 🔧 Configurações Customizáveis
```javascript
// Configurações da navbar
const navbarConfig = {
    scrollThreshold: 5,        // Pixels mínimos para ativar auto-hide
    hideDelay: 150,           // Delay antes de ocultar (ms)
    showDelay: 0,             // Delay antes de mostrar (ms)
    transparencyStart: 50,    // Pixel onde inicia transparência
    mobileBreakpoint: 768,    // Breakpoint para mobile
    animationDuration: 300    // Duração das animações (ms)
};
```

---

## ⚡ Animações e Efeitos Visuais

### 🎨 Efeito Glitch
- **Aplicação**: Títulos principais e elementos de destaque
- **Implementação**: CSS animations com clip-path
- **Cores**: Ciano (#0ff) e Magenta (#f0f)
- **Duração**: 1.2s com infinite loop

```css
@keyframes glitchTop {
    0% { transform: translate(0,0); }
    20% { transform: translate(-2px,-2px); }
    40% { transform: translate(-4px,2px); }
    60% { transform: translate(2px,-1px); }
    80% { transform: translate(-1px,2px); }
    100% { transform: translate(0,0); }
}
```

### 🎯 Animações de Entrada
- **Fade In**: Elementos aparecem gradualmente
- **Slide In**: Movimento lateral suave
- **Scale**: Efeito de zoom
- **Intersection Observer**: Ativação baseada na visibilidade

### 🎪 Background Animado Dinâmico (Pac-Man)

#### 🎯 Visão Geral Completa
O background do site apresenta um sistema dinâmico altamente sofisticado inspirado no clássico jogo Pac-Man. Este sistema cria uma experiência interativa única que responde ao movimento do cursor do usuário, oferecendo um labirinto proceduralmente gerado com inteligência artificial para pathfinding, sistema de frutas coletáveis, modo RGB dinâmico e otimizações avançadas de performance.

#### 🏗️ Geração Procedural do Labirinto - Arquitetura Completa

**Algoritmo de Geração:**
```javascript
function generateMaze(width, height) {
    // Inicializa matriz com paredes
    const maze = Array(height).fill().map(() => Array(width).fill(1));
    
    // Gera metade esquerda do labirinto
    const halfWidth = Math.floor(width / 2);
    
    // Algoritmo de geração recursiva
    function carvePath(x, y) {
        maze[y][x] = 0; // Marca como caminho
        
        // Direções possíveis (cima, direita, baixo, esquerda)
        const directions = [
            [0, -2], [2, 0], [0, 2], [-2, 0]
        ].sort(() => Math.random() - 0.5); // Randomiza
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx > 0 && nx < halfWidth && ny > 0 && ny < height - 1 && maze[ny][nx] === 1) {
                maze[y + dy/2][x + dx/2] = 0; // Remove parede entre
                carvePath(nx, ny);
            }
        }
    }
    
    // Inicia geração do ponto (1,1)
    carvePath(1, 1);
    
    // Espelha metade esquerda para direita
    for (let y = 0; y < height; y++) {
        for (let x = halfWidth; x < width; x++) {
            const mirrorX = width - 1 - x;
            maze[y][x] = maze[y][mirrorX];
        }
    }
    
    return maze;
}
```

**Características Avançadas:**
- **Simetria Perfeita**: Metade esquerda espelhada para criar equilíbrio visual
- **Abertura Central**: Corredor de 4x4 no centro garantindo conectividade
- **Aberturas Extras**: 8% de chance de criar passagens adicionais para fluidez
- **Validação de Conectividade**: Algoritmo garante que todos os caminhos sejam acessíveis
- **Bordas Seguras**: Paredes nas bordas sempre mantidas para contenção

**Sistema de Cores Dinâmicas:**
```javascript
const mazeColorSchemes = {
    classic: [
        'hsla(348, 97%, 56%, 0.15)',  // Vermelho neon
        'hsla(282, 60%, 55%, 0.15)'   // Roxo cyberpunk
    ],
    neon: [
        'hsla(180, 100%, 50%, 0.15)', // Ciano
        'hsla(300, 100%, 50%, 0.15)'  // Magenta
    ],
    retro: [
        'hsla(60, 100%, 50%, 0.15)',  // Amarelo
        'hsla(120, 100%, 50%, 0.15)'  // Verde
    ]
};
```

#### 🎮 Sistema Pac-Man Inteligente - IA Avançada

**Estrutura Completa do Pac-Man:**
```javascript
const pacman = {
    // Posição atual
    x: 1, y: 1,
    // Posição anterior (para interpolação)
    px: 1, py: 1,
    // Posição renderizada (suavizada)
    renderX: 1, renderY: 1,
    
    // Movimento e direção
    angle: 0,
    direction: 'right',
    targetDirection: 'right',
    
    // Pathfinding
    path: [],
    pathIndex: 0,
    speed: 0.07,
    
    // Estados
    moving: false,
    target: null,
    lastGoal: { x: 1, y: 1 },
    
    // Animação
    mouthAngle: 0,
    mouthSpeed: 0.3,
    mouthOpen: true,
    
    // Performance
    lastPathUpdate: 0,
    pathUpdateInterval: 100,
    
    // Efeitos visuais
    trail: [],
    maxTrailLength: 10
};
```

**Sistema de Movimento Suavizado:**
```javascript
function updatePacmanMovement() {
    if (pacman.path.length > 0 && pacman.pathIndex < pacman.path.length) {
        const currentTarget = pacman.path[pacman.pathIndex];
        const dx = currentTarget.x - pacman.x;
        const dy = currentTarget.y - pacman.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 0.1) {
            // Chegou ao próximo ponto do path
            pacman.x = currentTarget.x;
            pacman.y = currentTarget.y;
            pacman.pathIndex++;
            
            // Atualiza direção baseada no próximo ponto
            if (pacman.pathIndex < pacman.path.length) {
                const nextTarget = pacman.path[pacman.pathIndex];
                updatePacmanDirection(nextTarget.x - pacman.x, nextTarget.y - pacman.y);
            }
        } else {
            // Move em direção ao próximo ponto
            pacman.px = pacman.x;
            pacman.py = pacman.y;
            pacman.x += (dx / distance) * pacman.speed;
            pacman.y += (dy / distance) * pacman.speed;
            pacman.moving = true;
        }
    } else {
        pacman.moving = false;
    }
    
    // Atualiza posição renderizada com interpolação
    pacman.renderX = lerp(pacman.renderX, pacman.x, 0.3);
    pacman.renderY = lerp(pacman.renderY, pacman.y, 0.3);
    
    // Atualiza animação da boca
    pacman.mouthAngle += pacman.mouthSpeed;
    if (pacman.mouthAngle > Math.PI / 2) {
        pacman.mouthAngle = Math.PI / 2;
        pacman.mouthSpeed = -pacman.mouthSpeed;
    } else if (pacman.mouthAngle < 0) {
        pacman.mouthAngle = 0;
        pacman.mouthSpeed = -pacman.mouthSpeed;
    }
}
```

#### 🎯 Algoritmo de Pathfinding (A*) - Implementação Completa

**Estrutura do Algoritmo A*:**
```javascript
function findPath(start, goal, maze) {
    const openSet = [start];
    const closedSet = new Set();
    const cameFrom = new Map();
    const gScore = new Map();
    const fScore = new Map();
    
    gScore.set(getKey(start), 0);
    fScore.set(getKey(start), heuristic(start, goal));
    
    while (openSet.length > 0) {
        // Encontra nó com menor fScore
        let current = openSet.reduce((min, node) => 
            fScore.get(getKey(node)) < fScore.get(getKey(min)) ? node : min
        );
        
        // Se chegou ao objetivo
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(cameFrom, current);
        }
        
        // Remove do openSet e adiciona ao closedSet
        openSet.splice(openSet.indexOf(current), 1);
        closedSet.add(getKey(current));
        
        // Verifica vizinhos
        for (const neighbor of getNeighbors(current, maze)) {
            const neighborKey = getKey(neighbor);
            
            if (closedSet.has(neighborKey)) continue;
            
            const tentativeGScore = gScore.get(getKey(current)) + 1;
            
            if (!openSet.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                openSet.push(neighbor);
            } else if (tentativeGScore >= gScore.get(neighborKey)) {
                continue;
            }
            
            cameFrom.set(neighborKey, current);
            gScore.set(neighborKey, tentativeGScore);
            fScore.set(neighborKey, tentativeGScore + heuristic(neighbor, goal));
        }
    }
    
    return []; // Caminho não encontrado
}

// Função heurística (Distância Manhattan)
function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Reconstrói o caminho
function reconstructPath(cameFrom, current) {
    const path = [current];
    while (cameFrom.has(getKey(current))) {
        current = cameFrom.get(getKey(current));
        path.unshift(current);
    }
    return path;
}
```

#### 🍎 Sistema de Frutas Avançado

**Estrutura das Frutas:**
```javascript
const fruitSystem = {
    fruits: [],
    maxFruits: 3,
    spawnChance: 0.02, // 2% por frame
    collectedCount: 0,
    
    types: [
        { name: 'cherry', color: '#ff0040', points: 100, size: 8 },
        { name: 'strawberry', color: '#ff4080', points: 300, size: 10 },
        { name: 'orange', color: '#ff8000', points: 500, size: 12 },
        { name: 'apple', color: '#ff0000', points: 700, size: 14 },
        { name: 'melon', color: '#00ff00', points: 1000, size: 16 }
    ],
    
    effects: {
        sparkles: [],
        collectAnimation: null
    }
};

function spawnFruit() {
    if (fruitSystem.fruits.length >= fruitSystem.maxFruits) return;
    if (Math.random() > fruitSystem.spawnChance) return;
    
    // Encontra posição válida
    let attempts = 0;
    let position;
    
    do {
        position = {
            x: Math.floor(Math.random() * (mazeWidth - 2)) + 1,
            y: Math.floor(Math.random() * (mazeHeight - 2)) + 1
        };
        attempts++;
    } while (maze[position.y][position.x] !== 0 && attempts < 50);
    
    if (attempts < 50) {
        const fruitType = fruitSystem.types[Math.floor(Math.random() * fruitSystem.types.length)];
        fruitSystem.fruits.push({
            ...position,
            type: fruitType,
            spawnTime: Date.now(),
            pulsePhase: Math.random() * Math.PI * 2,
            collected: false
        });
    }
}
```

#### 🌈 Modo RGB Dinâmico - Sistema Completo

**Implementação do Modo RGB:**
```javascript
const rgbSystem = {
    active: false,
    hue: 0,
    speed: 2,
    intensity: 0.15,
    pattern: 'wave', // 'wave', 'spiral', 'checkerboard'
    
    activate() {
        this.active = true;
        this.hue = 0;
        // Efeito de ativação
        createRGBActivationEffect();
    },
    
    update() {
        if (!this.active) return;
        
        this.hue = (this.hue + this.speed) % 360;
        
        // Atualiza cores do labirinto
        for (let y = 0; y < mazeHeight; y++) {
            for (let x = 0; x < mazeWidth; x++) {
                if (maze[y][x] === 1) { // Se é parede
                    let colorHue;
                    
                    switch (this.pattern) {
                        case 'wave':
                            colorHue = (this.hue + (x + y) * 10) % 360;
                            break;
                        case 'spiral':
                            const centerX = mazeWidth / 2;
                            const centerY = mazeHeight / 2;
                            const angle = Math.atan2(y - centerY, x - centerX);
                            colorHue = (this.hue + angle * 180 / Math.PI) % 360;
                            break;
                        case 'checkerboard':
                            colorHue = (this.hue + ((x + y) % 2) * 180) % 360;
                            break;
                    }
                    
                    mazeColors[y][x] = `hsla(${colorHue}, 90%, 55%, ${this.intensity})`;
                }
            }
        }
    }
};
```

#### ✨ Sistema de Partículas Avançado

**Estrutura das Partículas:**
```javascript
const particleSystem = {
    particles: [],
    maxParticles: 0, // Calculado baseado no tamanho da tela
    
    init() {
        // 1 partícula por 12.000 pixels
        this.maxParticles = Math.floor((canvas.width * canvas.height) / 12000);
        this.generateParticles();
    },
    
    generateParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: this.getParticleColor(),
                life: 1.0,
                decay: Math.random() * 0.002 + 0.001
            });
        }
    },
    
    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            // Atualiza posição
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Atualiza vida
            particle.life -= particle.decay;
            
            // Remove partículas mortas
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
                // Gera nova partícula
                this.particles.push(this.createNewParticle());
            }
            
            // Wrap around screen
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
        }
    },
    
    render(ctx) {
        ctx.save();
        for (const particle of this.particles) {
            ctx.globalAlpha = particle.opacity * particle.life;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
};
```

#### 📱 Sistema de Responsividade Adaptativa Completo

**Cálculo Dinâmico de Tamanhos:**
```javascript
function calculateResponsiveSettings() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = screenWidth / screenHeight;
    
    let tileSize, mazeWidth, mazeHeight;
    
    // Configurações baseadas no tamanho da tela
    if (screenWidth >= 1920) {
        // 4K e ultra-wide
        tileSize = 52;
        mazeWidth = Math.floor(screenWidth / tileSize);
        mazeHeight = Math.floor(screenHeight / tileSize);
    } else if (screenWidth >= 1024) {
        // Desktop
        tileSize = 48;
        mazeWidth = Math.floor(screenWidth / tileSize);
        mazeHeight = Math.floor(screenHeight / tileSize);
    } else if (screenWidth >= 768) {
        // Tablet
        tileSize = 42;
        mazeWidth = Math.floor(screenWidth / tileSize);
        mazeHeight = Math.floor(screenHeight / tileSize);
    } else {
        // Mobile
        tileSize = 36;
        mazeWidth = Math.floor(screenWidth / tileSize);
        mazeHeight = Math.floor(screenHeight / tileSize);
    }
    
    // Garante números ímpares para simetria
    if (mazeWidth % 2 === 0) mazeWidth--;
    if (mazeHeight % 2 === 0) mazeHeight--;
    
    // Limites mínimos e máximos
    mazeWidth = Math.max(21, Math.min(mazeWidth, 101));
    mazeHeight = Math.max(15, Math.min(mazeHeight, 71));
    
    return { tileSize, mazeWidth, mazeHeight };
}
```

#### ⚡ Otimizações de Performance Avançadas

**Sistema de Cache Inteligente:**
```javascript
const performanceCache = {
    pathCache: new Map(),
    renderCache: new Map(),
    lastCacheClean: 0,
    cacheCleanInterval: 30000, // 30 segundos
    
    getPath(start, goal) {
        const key = `${start.x},${start.y}-${goal.x},${goal.y}`;
        const cached = this.pathCache.get(key);
        
        if (cached && Date.now() - cached.timestamp < 5000) {
            return cached.path;
        }
        
        const path = findPath(start, goal, maze);
        this.pathCache.set(key, {
            path: path,
            timestamp: Date.now()
        });
        
        return path;
    },
    
    cleanCache() {
        const now = Date.now();
        if (now - this.lastCacheClean > this.cacheCleanInterval) {
            // Remove entradas antigas
            for (const [key, value] of this.pathCache.entries()) {
                if (now - value.timestamp > 10000) {
                    this.pathCache.delete(key);
                }
            }
            this.lastCacheClean = now;
        }
    }
};
```

**Throttling de Eventos:**
```javascript
const eventThrottler = {
    lastMouseMove: 0,
    lastResize: 0,
    mouseMoveThrottle: 16, // 60fps
    resizeThrottle: 250,   // 4fps
    
    handleMouseMove(event) {
        const now = Date.now();
        if (now - this.lastMouseMove > this.mouseMoveThrottle) {
            updateMouseTarget(event);
            this.lastMouseMove = now;
        }
    },
    
    handleResize() {
        const now = Date.now();
        if (now - this.lastResize > this.resizeThrottle) {
            resizeCanvas();
            regenerateMaze();
            this.lastResize = now;
        }
    }
};
```

#### 🎨 Configurações Técnicas Avançadas

**Configuração Completa do Sistema:**
```javascript
const backgroundConfig = {
    // Configurações do labirinto
    maze: {
        colors: {
            classic: ['hsla(348, 97%, 56%, 0.15)', 'hsla(282, 60%, 55%, 0.15)'],
            neon: ['hsla(180, 100%, 50%, 0.15)', 'hsla(300, 100%, 50%, 0.15)'],
            retro: ['hsla(60, 100%, 50%, 0.15)', 'hsla(120, 100%, 50%, 0.15)']
        },
        currentScheme: 'classic',
        extraOpeningsChance: 0.08,
        centralOpeningSize: 4
    },
    
    // Configurações do Pac-Man
    pacman: {
        speed: 0.07,
        size: 0.8, // Relativo ao tile
        color: '#ffff00',
        mouthSpeed: 0.3,
        trailLength: 10,
        pathUpdateInterval: 100
    },
    
    // Configurações das frutas
    fruits: {
        maxCount: 3,
        spawnChance: 0.02,
        respawnTime: 3000,
        rgbModeThreshold: 3,
        pulseSpeed: 0.1
    },
    
    // Configurações do modo RGB
    rgb: {
        speed: 2,
        intensity: 0.15,
        pattern: 'wave', // 'wave', 'spiral', 'checkerboard'
        transitionDuration: 2000
    },
    
    // Configurações das partículas
    particles: {
        density: 12000, // pixels por partícula
        speed: 0.5,
        sizeRange: [1, 3],
        opacityRange: [0.1, 0.6],
        lifespan: [500, 2000]
    },
    
    // Configurações de performance
    performance: {
        targetFPS: 60,
        mouseMoveThrottle: 16,
        resizeThrottle: 250,
        pathCacheTimeout: 5000,
        cacheCleanInterval: 30000
    }
};
```

#### 🔧 Sistema de Inicialização e Manutenção

**Inicialização Completa:**
```javascript
class PacManBackground {
    constructor(canvasId, config = backgroundConfig) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.config = config;
        this.animationId = null;
        this.isRunning = false;
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.generateMaze();
        this.initializePacman();
        this.initializeParticles();
        this.setupEventListeners();
        this.start();
    }
    
    setupCanvas() {
        const { tileSize, mazeWidth, mazeHeight } = calculateResponsiveSettings();
        this.tileSize = tileSize;
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.gameLoop();
        }
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.isRunning = false;
    }
    
    gameLoop() {
        if (!this.isRunning) return;
        
        this.update();
        this.render();
        
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }
    
    destroy() {
        this.stop();
        this.removeEventListeners();
        this.canvas.remove();
    }
}

// Inicialização automática
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('retro-bg')) {
        window.pacmanBackground = new PacManBackground('retro-bg');
    }
});
```

#### 🛠️ Guia de Customização

**Como Modificar Cores:**
```javascript
// Adicionar novo esquema de cores
backgroundConfig.maze.colors.custom = [
    'hsla(200, 100%, 50%, 0.15)', // Azul
    'hsla(40, 100%, 50%, 0.15)'   // Laranja
];

// Aplicar novo esquema
backgroundConfig.maze.currentScheme = 'custom';
```

**Como Ajustar Velocidade:**
```javascript
// Pac-Man mais rápido
backgroundConfig.pacman.speed = 0.1;

// Modo RGB mais lento
backgroundConfig.rgb.speed = 1;
```

**Como Modificar Densidade de Partículas:**
```javascript
// Mais partículas (menor número = mais partículas)
backgroundConfig.particles.density = 8000;

// Menos partículas
backgroundConfig.particles.density = 20000;
```

---

## 🎭 Banner Animado com Personagens - Sistema Completo

### 📍 Localização e Estrutura
- **Arquivo Principal**: `wp-content/themes/spockygames/assets/js/banner-animation.js`
- **Arquivo de Configuração**: `wp-content/themes/spockygames/assets/js/banner-config.js`
- **Diretório de Assets**: `wp-content/themes/spockygames/assets/images/characters/`
- **Diretório de Banners**: `wp-content/themes/spockygames/assets/images/banners/`
- **Posição**: Presente nas páginas: **Ao Vivo**, **On Demand** e **Extras**
- **Container**: `.hero-banner`
- **CSS**: `wp-content/themes/spockygames/assets/css/banner-animations.css`

### 🎨 Sistema de Personagens Avançado

**Estrutura de Dados dos Personagens:**
```javascript
const characterSystem = {
    characters: [
        {
            id: 'mummy',
            name: 'Mummy',
            gif: 'mummy.gif',
            width: 72,
            height: 72,
            speed: 3.5,
            pushForce: 8,
            soundEffect: 'mummy-groan.mp3',
            direction: 'right',
            specialEffect: 'dust',
            rarity: 'common'
        },
        {
            id: 'sonic',
            name: 'Sonic',
            gif: 'sonic.gif',
            width: 72,
            height: 72,
            speed: 5.0,
            pushForce: 12,
            soundEffect: 'sonic-spin.mp3',
            direction: 'left',
            specialEffect: 'rings',
            rarity: 'common'
        },
        {
            id: 'dk',
            name: 'Donkey Kong',
            gif: 'dk.gif',
            width: 72,
            height: 72,
            speed: 2.8,
            pushForce: 15,
            soundEffect: 'dk-pound.mp3',
            direction: 'right',
            specialEffect: 'barrels',
            rarity: 'rare'
        },
        {
            id: 'mario',
            name: 'Mario',
            gif: 'mario.gif',
            width: 72,
            height: 72,
            speed: 3.2,
            pushForce: 10,
            soundEffect: 'mario-jump.mp3',
            direction: 'right',
            specialEffect: 'coins',
            rarity: 'common'
        },
        {
            id: 'wario',
            name: 'Wario',
            gif: 'wario.gif',
            width: 72,
            height: 72,
            speed: 2.5,
            pushForce: 13,
            soundEffect: 'wario-laugh.mp3',
            direction: 'right',
            specialEffect: 'gold',
            rarity: 'rare'
        },
        {
            id: 'luigi',
            name: 'Luigi',
            gif: 'luigi.gif',
            width: 72,
            height: 72,
            speed: 3.8,
            pushForce: 9,
            soundEffect: 'luigi-jump.mp3',
            direction: 'right',
            specialEffect: 'green-stars',
            rarity: 'common'
        },
        {
            id: 'mickey',
            name: 'Mickey Mouse',
            gif: 'mickey.gif',
            width: 72,
            height: 72,
            speed: 4.0,
            pushForce: 7,
            soundEffect: 'mickey-whistle.mp3',
            direction: 'right',
            specialEffect: 'sparkles',
            rarity: 'epic'
        }
    ],
    
    // Sistema de raridade
    rarityWeights: {
        common: 0.6,   // 60% de chance
        rare: 0.3,     // 30% de chance
        epic: 0.1      // 10% de chance
    },
    
    // Configurações de animação
    animation: {
        enterDuration: 3400,   // Fase Enter (ms)
        returnDuration: 2040,  // Fase Return Left (ms)
        waitDuration: 10000,   // Fase Wait (ms)
        exitDuration: 6800,    // Fase Exit (ms)
        totalCycleDuration: 22240, // Duração total do ciclo
        charGap: 12           // Espaço entre elementos (px)
    }
};
```

### 🎯 Sistema de Banners e Anunciantes

**Estrutura de Dados dos Banners:**
```javascript
const bannerSystem = {
    banners: [
        {
            id: 'anuncie-aqui',
            type: 'text',
            title: 'Anuncie aqui',
            text: 'Anuncie aqui',
            link: '/contato',
            priority: 'medium',
            active: true,
            animation: {
                enterFrom: 'right',
                exitTo: 'left',
                duration: 1500
            }
        },
        {
            id: 'ecast-partner',
            type: 'logo',
            title: 'Ecast - Parceiro Oficial',
            img: 'ecast.webp',
            alt: 'Ecast',
            link: 'https://ecast.site',
            priority: 'high',
            active: true,
            animation: {
                enterFrom: 'left',
                exitTo: 'right',
                duration: 1800
            }
        },
        {
            id: 'discord-community',
            type: 'text',
            title: 'Entre no Discord',
            text: 'Entre no Discord da Comunidade',
            link: 'https://discord.gg/spockygames',
            priority: 'medium',
            active: true,
            animation: {
                enterFrom: 'top',
                exitTo: 'bottom',
                duration: 2000
            }
        }
    ],
    
    // Sistema de prioridades
    priorityWeights: {
        low: 0.1,
        medium: 0.3,
        high: 0.6
    },
    
    // Configurações de exibição
    display: {
        maxBannersPerHour: 12,
        minIntervalBetweenSame: 1800000, // 30 minutos
        randomizeOrder: true
    }
};
```

### ⚡ Efeito "Empurrar" - Fases da Animação Detalhadas

**Controlador Principal de Animação:**
```javascript
class BannerAnimationController {
    constructor() {
        this.currentBanner = null;
        this.currentCharacter = null;
        this.animationState = 'idle';
        this.animationQueue = [];
        this.lastBannerTime = {};
        this.isRunning = false;
        
        this.init();
    }
    
    // Ciclo completo de animação
    async playFullCycle() {
        if (this.animationState !== 'idle') return;
        
        const banner = this.selectNextBanner();
        const character = this.selectRandomCharacter();
        
        if (!banner || !character) return;
        
        this.animationState = 'running';
        
        try {
            await this.phaseEnter(character, banner);     // 3.4s
            await this.phaseReturnLeft(character);        // 2.04s
            await this.phaseWait();                       // 10s
            await this.phaseExit(character, banner);      // 6.8s
        } catch (error) {
            console.error('Erro na animação:', error);
        } finally {
            this.animationState = 'idle';
        }
    }
}
```

**1. Fase Enter (3.4s)**
```javascript
async phaseEnter(character, banner) {
    return new Promise((resolve) => {
        const characterElement = this.createCharacterElement(character);
        const bannerElement = this.createBannerElement(banner);
        
        // Posições iniciais (fora da tela à esquerda)
        const startX = -character.width - 50;
        const centerX = window.innerWidth / 2 - banner.width / 2;
        
        characterElement.style.left = startX + 'px';
        bannerElement.style.left = (startX - characterSystem.animation.charGap) + 'px';
        
        document.body.appendChild(characterElement);
        document.body.appendChild(bannerElement);
        
        // Animação: personagem "empurra" o banner até o centro
        const animation = characterElement.animate([
            { left: startX + 'px' },
            { left: (centerX - character.width - characterSystem.animation.charGap) + 'px' }
        ], {
            duration: characterSystem.animation.enterDuration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Banner acompanha o movimento
        bannerElement.animate([
            { left: (startX - characterSystem.animation.charGap) + 'px' },
            { left: centerX + 'px' }
        ], {
            duration: characterSystem.animation.enterDuration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            this.playCharacterSound(character);
            this.createSpecialEffect(character, centerX);
            resolve();
        };
    });
}
```

**2. Fase Return Left (2.04s)**
```javascript
async phaseReturnLeft(character) {
    return new Promise((resolve) => {
        const characterElement = document.querySelector('.character-sprite');
        const currentX = parseInt(characterElement.style.left);
        const leftX = -character.width;
        
        // Personagem retorna para a esquerda e inverte horizontalmente
        characterElement.animate([
            { left: currentX + 'px', transform: 'scaleX(1)' },
            { left: leftX + 'px', transform: 'scaleX(-1)' }
        ], {
            duration: characterSystem.animation.returnDuration,
            easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
        }).onfinish = () => {
            characterElement.style.display = 'none';
            resolve();
        };
    });
}
```

**3. Fase Wait (10s)**
```javascript
async phaseWait() {
    return new Promise((resolve) => {
        // Banner permanece visível no centro
        const bannerElement = document.querySelector('.current-banner');
        if (bannerElement) {
            bannerElement.classList.add('banner-active');
        }
        
        setTimeout(resolve, characterSystem.animation.waitDuration);
    });
}
```

**4. Fase Exit (6.8s)**
```javascript
async phaseExit(character, banner) {
    return new Promise((resolve) => {
        const characterElement = document.querySelector('.character-sprite');
        const bannerElement = document.querySelector('.current-banner');
        
        // Personagem retorna ao centro
        characterElement.style.display = 'block';
        const centerX = window.innerWidth / 2 - banner.width / 2;
        const exitX = window.innerWidth + character.width;
        
        characterElement.style.left = (-character.width) + 'px';
        
        // Animação: ambos saem pela direita
        characterElement.animate([
            { left: (-character.width) + 'px', transform: 'scaleX(-1)' },
            { left: (centerX - character.width - characterSystem.animation.charGap) + 'px', transform: 'scaleX(1)' },
            { left: exitX + 'px', transform: 'scaleX(1)' }
        ], {
            duration: characterSystem.animation.exitDuration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        bannerElement.animate([
            { left: (window.innerWidth / 2 - banner.width / 2) + 'px' },
            { left: (exitX + characterSystem.animation.charGap) + 'px' }
        ], {
            duration: characterSystem.animation.exitDuration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            characterElement.remove();
            bannerElement.remove();
            resolve();
        };
    });
}
```

### 🎯 Configurações Técnicas
```javascript
const animationConfig = {
    // Durações das fases (em milissegundos)
    phases: {
        enter: 3400,      // Entrada do personagem e banner
        returnLeft: 2040, // Retorno do personagem para esquerda
        wait: 10000,      // Tempo de exibição do banner
        exit: 6800        // Saída de ambos pela direita
    },
    
    // Configurações visuais
    visual: {
        charGap: 12,           // Espaço entre personagem e banner (px)
        characterSize: 72,     // Tamanho padrão dos personagens (px)
        bannerMaxWidth: 400,   // Largura máxima do banner (px)
        bannerMaxHeight: 200   // Altura máxima do banner (px)
    },
    
    // Configurações de performance
    performance: {
        preloadAssets: true,     // Pré-carregar GIFs e sons
        useGPUAcceleration: true, // Usar aceleração por GPU
        throttleAnimations: false, // Throttle em dispositivos lentos
        maxConcurrentEffects: 5   // Máximo de efeitos simultâneos
    }
};
```

---

## 🎠 Carrosséis e Banners

### 🤝 Carrossel de Parceiros (Footer)
- **Localização**: `footer.php`
- **Conteúdo**: Logos de parceiros com links
- **Animação**: Deslizamento automático horizontal
- **Interação**: Pausa no hover, clique para navegar

```html
<section class="parceiros-carroussel">
    <div class="carousel-track">
        <div class="carousel-slide">
            <img src="logo.png" alt="Parceiro" data-link="https://site.com">
        </div>
    </div>
</section>
```

### 📺 Carrossel de Canais Parceiros (YouTube) - Sistema Completo

#### 📍 Localização e Estrutura
- **Arquivo Principal**: `wp-content/themes/spockygames/footer.php`
- **Arquivo de Configuração**: `wp-content/themes/spockygames/inc/youtube-partners.php`
- **Diretório de Logos**: `wp-content/themes/spockygames/assets/images/partners/`
- **CSS**: `wp-content/themes/spockygames/assets/css/carousel-partners.css`
- **JavaScript**: `wp-content/themes/spockygames/assets/js/carousel-partners.js`
- **Seção**: Footer do site
- **Container**: `.youtube-partners-carousel`

#### 🎯 Sistema de Parceiros Avançado

**Estrutura de Dados dos Parceiros:**
```php
<?php
// wp-content/themes/spockygames/inc/youtube-partners.php

class YouTubePartnersManager {
    private $partners = [];
    
    public function __construct() {
        $this->loadPartners();
    }
    
    private function loadPartners() {
        $this->partners = [
            [
                'id' => 'canal-games-retro',
                'name' => 'Games Retro BR',
                'logo' => 'games-retro-br.png',
                'url' => 'https://youtube.com/@gamesretrobr',
                'subscribers' => 150000,
                'category' => 'gaming',
                'priority' => 'high',
                'active' => true,
                'partnership_date' => '2023-01-15',
                'description' => 'Canal especializado em jogos retrô e nostalgia gamer',
                'social_media' => [
                    'twitter' => '@gamesretrobr',
                    'instagram' => '@gamesretrobr',
                    'discord' => 'https://discord.gg/gamesretro'
                ]
            ],
            [
                'id' => 'pixel-adventures',
                'name' => 'Pixel Adventures',
                'logo' => 'pixel-adventures.png',
                'url' => 'https://youtube.com/@pixeladventures',
                'subscribers' => 89000,
                'category' => 'indie-games',
                'priority' => 'medium',
                'active' => true,
                'partnership_date' => '2023-03-22',
                'description' => 'Explorando o mundo dos jogos indie e pixel art',
                'social_media' => [
                    'twitter' => '@pixeladv',
                    'twitch' => 'pixeladventures'
                ]
            ],
            [
                'id' => 'speedrun-masters',
                'name' => 'Speedrun Masters',
                'logo' => 'speedrun-masters.png',
                'url' => 'https://youtube.com/@speedrunmasters',
                'subscribers' => 245000,
                'category' => 'speedrun',
                'priority' => 'high',
                'active' => true,
                'partnership_date' => '2022-11-08',
                'description' => 'Os melhores speedruns e recordes mundiais',
                'social_media' => [
                    'twitter' => '@speedrunmasters',
                    'twitch' => 'speedrunmasters',
                    'discord' => 'https://discord.gg/speedrun'
                ]
            ],
            [
                'id' => 'retro-reviews',
                'name' => 'Retro Reviews',
                'logo' => 'retro-reviews.png',
                'url' => 'https://youtube.com/@retroreviews',
                'subscribers' => 67000,
                'category' => 'reviews',
                'priority' => 'medium',
                'active' => true,
                'partnership_date' => '2023-05-10',
                'description' => 'Reviews detalhadas de jogos clássicos',
                'social_media' => [
                    'instagram' => '@retroreviews',
                    'facebook' => 'RetroReviewsBR'
                ]
            ],
            [
                'id' => 'arcade-legends',
                'name' => 'Arcade Legends',
                'logo' => 'arcade-legends.png',
                'url' => 'https://youtube.com/@arcadelegends',
                'subscribers' => 123000,
                'category' => 'arcade',
                'priority' => 'high',
                'active' => true,
                'partnership_date' => '2023-02-14',
                'description' => 'A história dos fliperamas e jogos de arcade',
                'social_media' => [
                    'twitter' => '@arcadelegends',
                    'youtube' => '@arcadelegends',
                    'website' => 'https://arcadelegends.com.br'
                ]
            ]
        ];
    }
    
    public function getActivePartners() {
        return array_filter($this->partners, function($partner) {
            return $partner['active'] === true;
        });
    }
    
    public function getPartnersByPriority($priority = null) {
        $partners = $this->getActivePartners();
        
        if ($priority) {
            $partners = array_filter($partners, function($partner) use ($priority) {
                return $partner['priority'] === $priority;
            });
        }
        
        // Ordena por prioridade e número de inscritos
        usort($partners, function($a, $b) {
            $priorityOrder = ['high' => 3, 'medium' => 2, 'low' => 1];
            $aPriority = $priorityOrder[$a['priority']] ?? 0;
            $bPriority = $priorityOrder[$b['priority']] ?? 0;
            
            if ($aPriority === $bPriority) {
                return $b['subscribers'] - $a['subscribers'];
            }
            
            return $bPriority - $aPriority;
        });
        
        return $partners;
    }
    
    public function addPartner($partnerData) {
        // Validação dos dados
        $required = ['id', 'name', 'logo', 'url'];
        foreach ($required as $field) {
            if (!isset($partnerData[$field]) || empty($partnerData[$field])) {
                throw new Exception("Campo obrigatório '{$field}' não fornecido");
            }
        }
        
        // Verifica se o ID já existe
        foreach ($this->partners as $partner) {
            if ($partner['id'] === $partnerData['id']) {
                throw new Exception("Parceiro com ID '{$partnerData['id']}' já existe");
            }
        }
        
        // Adiciona valores padrão
        $partnerData = array_merge([
            'subscribers' => 0,
            'category' => 'gaming',
            'priority' => 'medium',
            'active' => true,
            'partnership_date' => date('Y-m-d'),
            'description' => '',
            'social_media' => []
        ], $partnerData);
        
        $this->partners[] = $partnerData;
        $this->savePartners();
        
        return true;
    }
    
    public function removePartner($partnerId) {
        $index = null;
        foreach ($this->partners as $i => $partner) {
            if ($partner['id'] === $partnerId) {
                $index = $i;
                break;
            }
        }
        
        if ($index !== null) {
            unset($this->partners[$index]);
            $this->partners = array_values($this->partners); // Reindexar
            $this->savePartners();
            return true;
        }
        
        return false;
    }
    
    public function updatePartner($partnerId, $updateData) {
        foreach ($this->partners as &$partner) {
            if ($partner['id'] === $partnerId) {
                $partner = array_merge($partner, $updateData);
                $this->savePartners();
                return true;
            }
        }
        
        return false;
    }
    
    private function savePartners() {
        // Salva no banco de dados ou arquivo de configuração
        update_option('youtube_partners_data', $this->partners);
    }
}

// Instância global
$youtube_partners_manager = new YouTubePartnersManager();
```

#### 🎨 Sistema de Carrossel Avançado

**JavaScript do Carrossel:**
```javascript
// wp-content/themes/spockygames/assets/js/carousel-partners.js

class YouTubePartnersCarousel {
    constructor(container) {
        this.container = document.querySelector(container);
        this.track = this.container.querySelector('.carousel-track');
        this.items = this.container.querySelectorAll('.partner-item');
        this.isPlaying = true;
        this.speed = 1; // pixels por frame
        this.currentOffset = 0;
        this.totalWidth = 0;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.calculateDimensions();
        this.cloneItems();
        this.setupEventListeners();
        this.start();
    }
    
    calculateDimensions() {
        this.totalWidth = 0;
        this.items.forEach(item => {
            this.totalWidth += item.offsetWidth + 30; // 30px de margem
        });
    }
    
    cloneItems() {
        // Clona itens para criar loop infinito
        const itemsToClone = Math.ceil(window.innerWidth / this.totalWidth) + 1;
        
        for (let i = 0; i < itemsToClone; i++) {
            this.items.forEach(item => {
                const clone = item.cloneNode(true);
                clone.classList.add('cloned');
                this.track.appendChild(clone);
            });
        }
    }
    
    setupEventListeners() {
        // Pausa ao passar o mouse
        this.container.addEventListener('mouseenter', () => {
            this.pause();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.resume();
        });
        
        // Redimensionamento da janela
        window.addEventListener('resize', () => {
            this.handleResize();
        });
        
        // Visibilidade da página
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }
    
    start() {
        if (!this.animationId) {
            this.animate();
        }
    }
    
    pause() {
        this.isPlaying = false;
    }
    
    resume() {
        this.isPlaying = true;
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.isPlaying = false;
    }
    
    animate() {
        if (this.isPlaying) {
            this.currentOffset += this.speed;
            
            // Reset quando completar um ciclo
            if (this.currentOffset >= this.totalWidth) {
                this.currentOffset = 0;
            }
            
            this.track.style.transform = `translateX(-${this.currentOffset}px)`;
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        // Recalcula dimensões e reconstrói o carrossel
        this.stop();
        this.removeClones();
        this.calculateDimensions();
        this.cloneItems();
        this.start();
    }
    
    removeClones() {
        const clones = this.track.querySelectorAll('.cloned');
        clones.forEach(clone => clone.remove());
    }
    
    // Métodos para controle dinâmico
    setSpeed(newSpeed) {
        this.speed = Math.max(0.1, Math.min(5, newSpeed));
    }
    
    addPartner(partnerData) {
        const partnerElement = this.createPartnerElement(partnerData);
        this.track.insertBefore(partnerElement, this.track.querySelector('.cloned'));
        this.handleResize();
    }
    
    removePartner(partnerId) {
        const partnerElement = this.track.querySelector(`[data-partner-id="${partnerId}"]`);
        if (partnerElement && !partnerElement.classList.contains('cloned')) {
            partnerElement.remove();
            this.handleResize();
        }
    }
    
    createPartnerElement(partner) {
        const element = document.createElement('div');
        element.className = 'partner-item';
        element.setAttribute('data-partner-id', partner.id);
        
        element.innerHTML = `
            <a href="${partner.url}" target="_blank" rel="noopener noreferrer" 
               title="${partner.name} - ${partner.description}">
                <img src="${partner.logo}" alt="${partner.name}" 
                     loading="lazy" width="120" height="80">
                <div class="partner-info">
                    <h4>${partner.name}</h4>
                    <span class="subscribers">${this.formatSubscribers(partner.subscribers)}</span>
                </div>
            </a>
        `;
        
        return element;
    }
    
    formatSubscribers(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    }
}

// Inicialização automática
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.youtube-partners-carousel');
    if (carousel) {
        window.youtubePartnersCarousel = new YouTubePartnersCarousel('.youtube-partners-carousel');
    }
});
```

#### 🛠️ Guia de Adição/Remoção de Parceiros

**Como Adicionar um Novo Parceiro:**

1. **Preparar Logo:**
   ```bash
   # Adicionar logo do parceiro (recomendado: 240x160px, formato PNG/WebP)
   wp-content/themes/spockygames/assets/images/partners/novo-parceiro.png
   ```

2. **Via Código (Método Programático):**
   ```php
   // Em functions.php ou arquivo específico
   $youtube_partners_manager->addPartner([
       'id' => 'novo-parceiro',
       'name' => 'Nome do Canal',
       'logo' => 'novo-parceiro.png',
       'url' => 'https://youtube.com/@novocanal',
       'subscribers' => 50000,
       'category' => 'gaming', // gaming, indie-games, speedrun, reviews, arcade
       'priority' => 'medium', // low, medium, high
       'active' => true,
       'description' => 'Descrição do canal parceiro',
       'social_media' => [
           'twitter' => '@novocanal',
           'twitch' => 'novocanal',
           'discord' => 'https://discord.gg/novocanal'
       ]
   ]);
   ```

3. **Via Interface Admin (WordPress):**
   ```php
   // Criar página de administração
   add_action('admin_menu', function() {
       add_submenu_page(
           'themes.php',
           'Parceiros YouTube',
           'Parceiros YouTube',
           'manage_options',
           'youtube-partners',
           'youtube_partners_admin_page'
       );
   });
   
   function youtube_partners_admin_page() {
       // Interface para adicionar/editar/remover parceiros
       include get_template_directory() . '/admin/youtube-partners-admin.php';
   }
   ```

**Como Remover um Parceiro:**

1. **Desativar Temporariamente:**
   ```php
   $youtube_partners_manager->updatePartner('id-do-parceiro', [
       'active' => false
   ]);
   ```

2. **Remover Permanentemente:**
   ```php
   $youtube_partners_manager->removePartner('id-do-parceiro');
   ```

3. **Via JavaScript (Dinâmico):**
   ```javascript
   // Remove do carrossel em tempo real
   window.youtubePartnersCarousel.removePartner('id-do-parceiro');
   ```

#### 🎨 Configurações de Estilização

**CSS Avançado:**
```css
/* wp-content/themes/spockygames/assets/css/carousel-partners.css */

.youtube-partners-carousel {
    width: 100%;
    overflow: hidden;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    padding: 20px 0;
    position: relative;
}

.youtube-partners-carousel::before,
.youtube-partners-carousel::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 2;
    pointer-events: none;
}

.youtube-partners-carousel::before {
    left: 0;
    background: linear-gradient(to right, #1a1a2e, transparent);
}

.youtube-partners-carousel::after {
    right: 0;
    background: linear-gradient(to left, #1a1a2e, transparent);
}

.carousel-track {
    display: flex;
    align-items: center;
    will-change: transform;
}

.partner-item {
    flex-shrink: 0;
    margin-right: 30px;
    transition: transform 0.3s ease, filter 0.3s ease;
}

.partner-item:hover {
    transform: scale(1.1) translateY(-5px);
    filter: brightness(1.2);
}

.partner-item a {
    display: block;
    text-decoration: none;
    color: inherit;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.partner-item a:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.partner-item img {
    width: 120px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
    padding: 5px;
}

.partner-info {
    margin-top: 10px;
    text-align: center;
}

.partner-info h4 {
    margin: 0 0 5px 0;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.partner-info .subscribers {
    font-size: 12px;
    color: #ff6b6b;
    font-weight: 500;
}

/* Responsividade */
@media (max-width: 768px) {
    .partner-item img {
        width: 100px;
        height: 67px;
    }
    
    .partner-info h4 {
        font-size: 12px;
    }
    
    .partner-info .subscribers {
        font-size: 10px;
    }
}

/* Animações especiais */
@keyframes partnerGlow {
    0%, 100% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.3); }
    50% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.6); }
}

.partner-item.featured a {
    animation: partnerGlow 3s ease-in-out infinite;
}
```

#### ⚙️ Configurações Avançadas

**Configuração de Performance:**
```javascript
const carouselConfig = {
    // Velocidade do carrossel
    speed: {
        default: 1,      // pixels por frame
        slow: 0.5,       // modo lento
        fast: 2,         // modo rápido
        turbo: 3         // modo turbo
    },
    
    // Configurações visuais
    visual: {
        itemSpacing: 30,     // espaço entre itens (px)
        itemWidth: 150,      // largura do item (px)
        itemHeight: 120,     // altura do item (px)
        fadeEdges: true,     // fade nas bordas
        fadeWidth: 50        // largura do fade (px)
    },
    
    // Configurações de comportamento
    behavior: {
        pauseOnHover: true,      // pausar ao passar mouse
        pauseOnFocus: true,      // pausar quando fora de foco
        autoRestart: true,       // reiniciar automaticamente
        smoothTransition: true,   // transições suaves
        infiniteLoop: true       // loop infinito
    },
    
    // Configurações de responsividade
    responsive: {
        mobile: {
            speed: 0.8,
            itemSpacing: 20,
            itemWidth: 120,
            itemHeight: 100
        },
        tablet: {
            speed: 0.9,
            itemSpacing: 25,
            itemWidth: 135,
            itemHeight: 110
        }
    }
};
```

### 🎯 Carrossel Shine (Novos Parceiros)
- **Efeito**: Brilho animado nos slides ativos
- **Transição**: Fade entre slides
- **Controles**: Automático com pausa manual
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

---

## 🛒 Sistema WooCommerce

### 🎨 Template de Produto (`woocommerce/single-product.php`)
- **Hero Section**: Imagem principal com efeitos
- **Galeria**: Carrossel de imagens do produto
- **Variações**: Suporte a cores e tamanhos
- **Campos Customizados**: Imagens front, back e variações de cor

### 🖼️ Sistema de Imagens
```php
// Campos customizados para produtos
$front_image = get_post_meta($product_id, '_front_image', true);
$back_image = get_post_meta($product_id, '_back_image', true);
$color_variant = get_post_meta($product_id, '_color_variant_image', true);
```

### 🛍️ Funcionalidades Customizadas
- **Produtos por Página**: 12 produtos
- **Colunas**: 4 colunas no desktop
- **Botão Personalizado**: "Adicionar ao Carrinho" customizado
- **Campos Desnecessários**: Removidos do checkout
- **Informações Extras**: SKU e categorias na página do produto

### 📱 Modal de Produto
- **Abertura**: Clique em cards de produto
- **Conteúdo**: Nome, descrição, preço, imagens
- **Seleção**: Tamanhos com validação
- **Integração**: Adicionar ao carrinho direto do modal

### 🛒 Melhorias no Carrinho
- **Seletores de Quantidade**: Botões +/- personalizados
- **Atualização Automática**: Delay de 1.5s após mudança
- **Validação**: Valores mínimos e máximos
- **Feedback Visual**: Indicadores de carregamento

---

## 🔗 Integrações de API

### 📺 YouTube API
- **Configuração**: Chaves API armazenadas em `functions.php`
- **Feeds RSS**: Conversão via rss2json.com
- **Cache**: Sistema de cache local para performance
- **Funcionalidades**:
  - Listagem de vídeos do canal
  - Detecção de lives ativas
  - Estatísticas do canal
  - Player integrado

```php
// Configuração da API
function get_youtube_api_key() {
    return get_option('youtube_api_key', '');
}

function get_youtube_channel_id() {
    return 'UCSPC6X4M-tVPeK4IZMbK5aw';
}
```

### 🎮 Twitch Integration
- **Configuração**: Suporte para chaves Twitch
- **Player**: Embed de streams Twitch
- **Status**: Verificação de live ativa

---

## ⚙️ Configurações do Tema

### 🔧 Functions.php - Principais Funções

#### 📝 Custom Post Types
```php
// Post Type para Lives
function create_live_post_type() {
    register_post_type('lives', [
        'labels' => [
            'name' => 'Lives',
            'singular_name' => 'Live'
        ],
        'public' => true,
        'supports' => ['title', 'editor', 'thumbnail']
    ]);
}
```

#### 👤 Campos de Perfil Customizados
- **Gamer Tag**: Campo para tag de jogador
- **Jogos Favoritos**: Lista de jogos preferidos
- **Discord Username**: Nome de usuário do Discord

#### 📧 Sistema de Contato
- **Formulário**: Processamento via AJAX
- **Validação**: Campos obrigatórios e formato de email
- **Envio**: Sistema de email integrado
- **Feedback**: Mensagens de sucesso/erro

### 🎨 Configurações de Tema
- **Logo**: Upload via customizer
- **Cores**: Paleta de cores personalizável
- **Tipografia**: Fontes Google Fonts integradas
- **Layout**: Opções de layout flexíveis

---

## 📱 Responsividade

### 📐 Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

### 🎯 Adaptações Principais
- **Navbar**: Menu hambúrguer em mobile
- **Grid**: Colunas adaptáveis (1-2-3-4)
- **Carrosséis**: Touch/swipe em dispositivos móveis
- **Modais**: Fullscreen em mobile
- **Tipografia**: Escalas fluidas
- **Imagens**: Responsive images com srcset

### 📱 Mobile Optimizations
- **Touch Targets**: Mínimo 44px para elementos clicáveis
- **Performance**: Lazy loading de imagens
- **Gestos**: Suporte a swipe e pinch-to-zoom
- **Viewport**: Meta tag otimizada

---

## 🚀 Otimizações

### ⚡ Performance
- **Minificação**: CSS e JS minificados
- **Lazy Loading**: Imagens carregadas sob demanda
- **Cache**: Sistema de cache para APIs
- **Compression**: Gzip habilitado
- **CDN**: Suporte a CDN para assets

### 🔍 SEO
- **Meta Tags**: Open Graph e Twitter Cards
- **Schema.org**: Structured data
- **Sitemap**: Geração automática
- **URLs**: Estrutura amigável
- **Alt Tags**: Todas as imagens com descrições

### 🛡️ Segurança
- **Sanitização**: Todos os inputs sanitizados
- **Nonces**: Proteção CSRF
- **Validação**: Server-side validation
- **Escape**: Output escapado
- **Headers**: Security headers configurados

---

## 🔧 Manutenção

### 📝 Logs e Debugging
- **Error Logging**: Sistema de logs personalizado
- **Debug Mode**: Modo de debug para desenvolvimento
- **Performance Monitoring**: Métricas de performance
- **API Monitoring**: Status das integrações

### 🔄 Atualizações
- **Backup**: Sistema de backup automático
- **Staging**: Ambiente de teste
- **Version Control**: Git para controle de versão
- **Documentation**: Changelog detalhado

### 🧹 Limpeza
- **Cache Clearing**: Limpeza automática de cache
- **Database Optimization**: Otimização do banco
- **File Cleanup**: Remoção de arquivos temporários
- **Log Rotation**: Rotação de logs

---

## 👨‍💻 Guia de Desenvolvimento

### 🛠️ Ambiente de Desenvolvimento
```bash
# Estrutura recomendada
wamp64/
└── www/
    └── wordpress/
        └── wp-content/
            └── themes/
                └── spockygames/
```

### 📋 Checklist de Desenvolvimento
- [ ] Testar em múltiplos navegadores
- [ ] Validar responsividade
- [ ] Verificar performance
- [ ] Testar integrações de API
- [ ] Validar acessibilidade
- [ ] Revisar SEO
- [ ] Testar formulários
- [ ] Verificar segurança

### 🎨 Padrões de Código
- **PHP**: PSR-12 coding standards
- **CSS**: BEM methodology
- **JavaScript**: ES6+ features
- **HTML**: Semantic markup
- **Comentários**: Documentação inline

### 🔧 Ferramentas Recomendadas
- **IDE**: VS Code com extensões WordPress
- **Browser**: Chrome DevTools
- **Testing**: Local by Flywheel
- **Version Control**: Git
- **Task Runner**: Gulp/Webpack

---

## 🆘 Solução de Problemas

### ❌ Problemas Comuns

#### 🎥 YouTube API não funciona
```php
// Verificar configuração
$api_key = get_option('youtube_api_key');
if (empty($api_key)) {
    // Configurar chave API no admin
}
```

#### 🎨 Animações não carregam
```javascript
// Verificar se o DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animações
});
```

#### 🛒 WooCommerce não funciona
- Verificar se o plugin está ativo
- Confirmar templates customizados
- Testar hooks e filters

#### 📱 Problemas de responsividade
- Verificar viewport meta tag
- Testar breakpoints CSS
- Validar media queries

### 🔍 Debug
```php
// Habilitar debug no wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

### 📞 Suporte
- **Documentação**: Este arquivo README
- **Logs**: `/wp-content/debug.log`
- **Community**: Fóruns WordPress
- **Developer**: Contato direto com o desenvolvedor

---

## 📊 Métricas e Analytics

### 📈 Performance Targets
- **Page Load**: < 3 segundos
- **First Contentful Paint**: < 1.5 segundos
- **Largest Contentful Paint**: < 2.5 segundos
- **Cumulative Layout Shift**: < 0.1

### 🎯 KPIs
- **Bounce Rate**: < 40%
- **Session Duration**: > 2 minutos
- **Page Views**: Múltiplas páginas por sessão
- **Conversion Rate**: Metas de e-commerce

---

## 🔮 Roadmap Futuro

### 🚀 Próximas Features
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light mode toggle
- [ ] Sistema de comentários customizado
- [ ] Integração com Discord
- [ ] Sistema de gamificação
- [ ] Marketplace de mods
- [ ] Streaming integrado
- [ ] Sistema de notificações

### 🔧 Melhorias Técnicas
- [ ] Migração para Gutenberg blocks
- [ ] API REST customizada
- [ ] GraphQL integration
- [ ] Headless WordPress option
- [ ] Advanced caching
- [ ] CDN integration
- [ ] Performance optimization
- [ ] Security hardening

---

## 📄 Licença e Créditos

### 📜 Licença
Este tema é proprietário e desenvolvido exclusivamente para o canal Spocky Games.

### 👥 Créditos
- **Desenvolvimento**: André Borba, Rene Machado, Equipe Spocky Games
- **Design**: Conceito retrô-futurista
- **Integrações**: YouTube, WooCommerce, APIs diversas
- **Assets**: Imagens e GIFs personalizados

### 🙏 Agradecimentos
- Comunidade WordPress
- Desenvolvedores de plugins utilizados
- Beta testers e feedback da comunidade
- Parceiros e patrocinadores

---

**🔢 Versão**: 1.0
**👨‍💻 Desenvolvedores**: Equipe Spocky Games  
**🌐 Website**: [spockygames.com.br](https://spockygames.com.br)

---

*Este documento é mantido atualizado com todas as funcionalidades e mudanças do tema. Para sugestões ou correções, entre em contato através da página de contato do site.*
