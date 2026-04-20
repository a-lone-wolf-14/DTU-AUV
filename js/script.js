// ========== SCROLL PROGRESS BAR ==========
const scrollProgress = document.createElement('div');
scrollProgress.classList.add('scroll-progress');
document.body.prepend(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

<<<<<<< HEAD
// ========== MOBILE MENU TOGGLE ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking a link
    const mobileNavLinks = document.querySelectorAll('.nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

=======
>>>>>>> 29eb3300b577327feb75de72bd80e871f17b7440
// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========== SCROLL REVEAL ANIMATIONS ==========
function revealOnScroll() {
    const elements = document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

revealOnScroll();

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out cubic
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = (easeOut * target).toFixed(1);

                    entry.target.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

animateCounters();

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== POSSIBILITIES TABS ==========
const possTabs = document.querySelectorAll('.poss-tab');
const possTabData = [
    {
        image: 'assets/images/lapras%202.0%20underwater.png',
        alt: 'LAPRAS 2.0',
        title: 'LAPRAS 2.0 — Next-Gen Underwater Explorer',
        desc: "LAPRAS 2.0 is DTU AUV's second-generation autonomous underwater vehicle built for the SAUVC competition. Featuring a streamlined hull, enhanced thruster configuration, and an upgraded vision pipeline, it pushes the boundaries of underwater autonomy.",
        link: 'work.html'
    },
    {
        image: 'assets/images/arkaja%202.0%20underwater.png',
        alt: 'ARKAJA 2.0',
        title: 'ARKAJA 2.0 — Deep-Sea Challenger',
        desc: "ARKAJA 2.0 is engineered for the RoboSub competition, featuring advanced AI-driven navigation, a robust 6-DOF thruster array, and a custom acoustic localisation system for precision underwater manoeuvres.",
        link: 'work.html'
    },
    {
        image: 'assets/images/competition.jpeg',
        alt: 'Competitions',
        title: 'AMU-ROVc 4.0',
        desc: "AMUROVE 4.0 is a national-level, remotely operated underwater vehicle (ROV) competition hosted by MTS AUV-ZHCET in collaboration with IEEE RAS ZHCET, challenging students to design and build innovative marine robotics solutions.",
        link: 'work.html'
    }
];

possTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        possTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const idx = parseInt(tab.getAttribute('data-tab'), 10);
        const data = possTabData[idx];
        if (!data) return;

        const possImage = document.querySelector('.poss-image img');
        const possTitle = document.querySelector('.poss-article-title');
        const possDesc  = document.querySelector('.poss-article-desc');

        // Fade out
        possImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        possImage.style.opacity = '0';
        possImage.style.transform = 'scale(0.95)';

        if (possTitle) { possTitle.style.transition = 'opacity 0.25s ease'; possTitle.style.opacity = '0'; }
        if (possDesc)  { possDesc.style.transition  = 'opacity 0.25s ease'; possDesc.style.opacity  = '0'; }

        setTimeout(() => {
            possImage.src = data.image;
            possImage.alt = data.alt;
            if (possTitle) possTitle.textContent = data.title;
            if (possDesc)  possDesc.textContent  = data.desc;

            possImage.style.opacity = '1';
            possImage.style.transform = 'scale(1)';
            if (possTitle) possTitle.style.opacity = '1';
            if (possDesc)  possDesc.style.opacity  = '1';
        }, 300);
    });
});

// ========== SERVICE CARDS HOVER TILT ==========
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== TESTIMONIAL CARDS STAGGER ON SCROLL ==========
const testimonialCards = document.querySelectorAll('.testimonial-card');

const testObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
            testObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

testimonialCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(40px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    testObserver.observe(card);
});

// ========== PARALLAX EFFECT ON DIVE SECTION ==========
const diveSection = document.querySelector('.dive-section');
const diveBgImg = document.querySelector('.dive-bg-img');

window.addEventListener('scroll', () => {
    if (diveSection) {
        const rect = diveSection.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            diveBgImg.style.transform = `scale(1.1) translateY(${scrollPercent * 30}px)`;
        }
    }
});

// ========== SERVICE NAV ARROWS (SCROLL ANIMATION) ==========
const prevBtn = document.getElementById('prev-service');
const nextBtn = document.getElementById('next-service');
const servicesGrid = document.querySelector('.services-grid');
let currentServiceScroll = 0;

if (nextBtn && servicesGrid) {
    nextBtn.addEventListener('click', () => {
        currentServiceScroll += 350;
        const maxScroll = servicesGrid.scrollWidth - servicesGrid.clientWidth;
        if (currentServiceScroll > maxScroll) currentServiceScroll = 0;
        servicesGrid.scrollTo({ left: currentServiceScroll, behavior: 'smooth' });

        // Animate cards
        serviceCards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 150);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentServiceScroll -= 350;
        if (currentServiceScroll < 0) {
            currentServiceScroll = servicesGrid.scrollWidth - servicesGrid.clientWidth;
        }
        servicesGrid.scrollTo({ left: currentServiceScroll, behavior: 'smooth' });

        serviceCards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 150);
        });
    });
}

// ========== MAGNETIC BUTTON EFFECT ==========
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline, .play-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform += ` translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ========== LOGO STRIP INFINITE FEELING (hover pause) ==========
const logoStrip = document.querySelector('.logo-strip-inner');
if (logoStrip) {
    logoStrip.addEventListener('mouseenter', () => {
        logoStrip.style.animationPlayState = 'paused';
    });
    logoStrip.addEventListener('mouseleave', () => {
        logoStrip.style.animationPlayState = 'running';
    });
}

// ========== TEXT SCRAMBLE EFFECT FOR HERO TITLE ==========
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.frame = 0;
        this.queue = [];
        this.resolve = null;
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span style="opacity:0.5">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update.bind(this));
            this.frame++;
        }
    }
}

// Apply scramble effect on hero title when it comes into view
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const originalText = heroTitle.innerText;
                const scrambler = new TextScramble(heroTitle);
                scrambler.setText(originalText);
                titleObserver.unobserve(heroTitle);
            }
        });
    }, { threshold: 0.5 });
    titleObserver.observe(heroTitle);
}

// ========== PLAY BTN RIPPLE EFFECT ==========
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
    playBtn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '100%';
        ripple.style.height = '100%';
        ripple.style.borderRadius = '50%';
        ripple.style.border = '2px solid rgba(255,255,255,0.6)';
        ripple.style.animation = 'ripple-out 0.8s ease forwards';
        ripple.style.top = '0';
        ripple.style.left = '0';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    });

    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-out {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
