// Portfolio Application JavaScript
class PortfolioApp {
    constructor() {
        this.activeTab = 'home';
        this.isLoading = true;
        this.init();
    }

    init() {
        // Initialize loading screen
        this.initLoadingScreen();
        
        // Initialize Matrix rain
        this.initMatrixRain();
        
        // Initialize navigation
        this.initNavigation();
        
        // Initialize typing animations
        this.initTypingAnimations();
        
        // Initialize interactive elements
        this.initInteractiveElements();
    }

    // Loading Screen
    initLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainApp = document.getElementById('main-app');
        
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainApp.classList.remove('hidden');
                mainApp.classList.add('show');
                this.isLoading = false;
            }, 500);
        }, 3000);
    }

    // Matrix Rain Effect
    initMatrixRain() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Matrix characters
        const matrixChars = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}()+-*/=!@#$%^&*';
        const matrix = matrixChars.split('');

        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        // Draw matrix
        const drawMatrix = () => {
            // Semi-transparent black background for fade effect
            ctx.fillStyle = 'rgba(10, 15, 15, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#06b6d4';
            ctx.font = fontSize + 'px JetBrains Mono, monospace';

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                
                // x position, y position
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Random reset and opacity
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        // Start animation
        setInterval(drawMatrix, 50);
    }

    // Navigation
    initNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.content-section');

        navTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const targetTab = tab.dataset.tab;
                this.switchTab(targetTab);
            });
        });
    }

    switchTab(tabId) {
        if (tabId === this.activeTab) return;

        // Update active tab
        const currentTab = document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`);
        const newTab = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
        const currentSection = document.getElementById(`${this.activeTab}-section`);
        const newSection = document.getElementById(`${tabId}-section`);

        if (currentTab) currentTab.classList.remove('active');
        if (newTab) newTab.classList.add('active');

        // Animate section transition
        if (currentSection) {
            currentSection.style.animation = 'section-exit 0.4s ease-out forwards';
            setTimeout(() => {
                currentSection.classList.remove('active');
                currentSection.style.animation = '';
            }, 400);
        }

        if (newSection) {
            setTimeout(() => {
                newSection.classList.add('active');
            }, 200);
        }

        this.activeTab = tabId;

        // Trigger specific animations for certain sections
        if (tabId === 'home') {
            setTimeout(() => this.initTypingAnimations(), 300);
        }
    }

    // Typing Animations
    initTypingAnimations() {
        // Only run if on home section and not loading
        if (this.activeTab !== 'home' || this.isLoading) return;

        // Reset typing elements
        const nameElement = document.getElementById('typing-name');
        const titleElement = document.getElementById('typing-title');
        
        if (nameElement) nameElement.textContent = '';
        if (titleElement) titleElement.textContent = '';

        // Start name typing
        setTimeout(() => {
            this.typeText('typing-name', 'Sandra Demition', 80);
        }, 500);

        // Start title typing
        setTimeout(() => {
            this.typeText('typing-title', "Hi, I'm Sandra Demition", 60, true);
        }, 2000);
    }

    typeText(elementId, text, speed = 50, withCursor = false) {
        const element = document.getElementById(elementId);
        if (!element) return;

        let i = 0;
        const cursorSymbols = ['🔍', '💡', '⚡', '🎨', '💻'];
        let currentCursorIndex = 0;

        const typeChar = () => {
            if (i < text.length) {
                element.textContent = text.slice(0, i + 1);
                i++;
                setTimeout(typeChar, speed);
            } else if (withCursor) {
                // Add rotating cursor symbols
                this.addRotatingCursor(element, cursorSymbols);
            }
        };

        typeChar();
    }

    addRotatingCursor(element, symbols) {
        let currentSymbol = 0;
        const cursorSpan = document.createElement('span');
        cursorSpan.className = 'typing-cursor';
        element.appendChild(cursorSpan);

        const rotateCursor = () => {
            cursorSpan.textContent = ' ' + symbols[currentSymbol];
            currentSymbol = (currentSymbol + 1) % symbols.length;
        };

        rotateCursor();
        setInterval(rotateCursor, 1000);
    }

    // Interactive Elements
    initInteractiveElements() {
        // Add hover effects to cards
        this.initCardHovers();
        
        // Add scroll animations
        this.initScrollAnimations();
        
        // Add particle effects on hover
        this.initParticleEffects();
    }

    initCardHovers() {
        const cards = document.querySelectorAll('.project-card, .certificate-card, .service-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    createRippleEffect(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const ripple = document.createElement('div');
        
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(6, 182, 212, 0.1)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1';
        
        card.style.position = 'relative';
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe animated elements
        const animatedElements = document.querySelectorAll('.project-card, .certificate-card, .service-card');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    initParticleEffects() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.createParticles(card);
            });
        });
    }

    createParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = '#06b6d4';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '100';
                
                const startX = rect.left + Math.random() * rect.width;
                const startY = rect.top + Math.random() * rect.height;
                
                particle.style.left = startX + 'px';
                particle.style.top = startY + 'px';
                
                document.body.appendChild(particle);
                
                // Animate particle
                const angle = Math.random() * Math.PI * 2;
                const velocity = 50 + Math.random() * 50;
                const duration = 1000 + Math.random() * 1000;
                
                particle.animate([
                    {
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 1
                    },
                    {
                        transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => {
                    particle.remove();
                };
            }, i * 100);
        }
    }

    // Utility Methods
    addCSSRule(rule) {
        const style = document.createElement('style');
        style.textContent = rule;
        document.head.appendChild(style);
    }
}

// Additional CSS animations via JavaScript
const additionalCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes section-exit {
    from {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
    to {
        opacity: 0;
        transform: translateX(-300px) scale(1.1);
    }
}

.skill-card:hover {
    animation: skill-glow 0.3s ease-out forwards;
}

@keyframes skill-glow {
    from {
        box-shadow: none;
    }
    to {
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
    }
}

.project-card {
    animation-delay: calc(var(--card-index) * 0.1s);
}

.certificate-card {
    animation-delay: calc(var(--card-index) * 0.3s);
}

/* Smooth page transitions */
.content-section {
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced button interactions */
.dev-button:active {
    transform: translateY(-1px) scale(0.98);
}

/* Improved focus states */
.nav-tab:focus,
.dev-button:focus {
    outline: 2px solid var(--cyan-400);
    outline-offset: 2px;
}

/* Loading animations */
.terminal-window {
    animation: terminal-enter 0.6s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
}

@keyframes terminal-enter {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
`;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add additional CSS
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
    
    // Start the application
    window.portfolioApp = new PortfolioApp();
    
    // Add card index for staggered animations
    const projectCards = document.querySelectorAll('.project-card');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    projectCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
    
    certificateCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize canvas size for matrix effect
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const app = window.portfolioApp;
    if (!app || app.isLoading) return;
    
    const tabs = ['home', 'about', 'services', 'portfolio', 'certificates', 'contact'];
    const currentIndex = tabs.indexOf(app.activeTab);
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        app.switchTab(tabs[prevIndex]);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        app.switchTab(tabs[nextIndex]);
    }
});

// Performance optimizations
const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
};

// Optimized scroll handler
const handleScroll = throttle(() => {
    // Add any scroll-based animations here
}, 16); // 60fps

window.addEventListener('scroll', handleScroll);

// Preload critical resources
const preloadResources = () => {
    const criticalImages = [
        'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop&crop=entropy&auto=format',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=entropy&auto=format',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=entropy&auto=format'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Start preloading
preloadResources();

// Export for global access
window.PortfolioApp = PortfolioApp;