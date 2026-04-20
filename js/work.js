// ============================================================
// WORK PAGE — 3D Perspective Carousel & Detail Overlay
// ============================================================

const botsData = {
    lapras: {
        name: 'LAPRAS 2.0',
        gen: '2.0',
        img: 'assets/images/bots/lapras-2.0.png',
        desc: 'A compact AUV designed for agile underwater navigation and sensor integration testing.',
        specs: {
            'Length': '1.0 m', 'Width': '0.5 m', 'Depth Rating': '400 m',
            'Weight': '38 kg', 'Max Speed': '3.5 knots', 'Battery': 'Li-Po 44V',
            'Autonomy': '2.5 hours', 'Cameras': '2x Mono'
        },
        highlights: [
            { icon: 'fa-ruler-combined', value: '1.0m', label: 'Length' },
            { icon: 'fa-weight-hanging', value: '38kg', label: 'Weight' },
            { icon: 'fa-water', value: '400m', label: 'Depth' },
            { icon: 'fa-gauge-high', value: '3.5 kn', label: 'Speed' }
        ]
    },
    arkaja: {
        name: 'ARKAJA 2.0',
        gen: '2.0',
        img: 'assets/images/bots/arkaja-2.0.png',
        desc: 'Designed and built by the DTU AUV team for underwater exploration, autonomous navigation, and robotics competition.',
        specs: {
            'Length': '1.2 m', 'Width': '0.6 m', 'Depth Rating': '500 m',
            'Weight': '45 kg', 'Max Speed': '4 knots', 'Battery': 'Li-Po 48V',
            'Autonomy': '3 hours', 'Cameras': '2x Stereo'
        },
        highlights: [
            { icon: 'fa-ruler-combined', value: '1.2m', label: 'Length' },
            { icon: 'fa-weight-hanging', value: '45kg', label: 'Weight' },
            { icon: 'fa-water', value: '500m', label: 'Depth' },
            { icon: 'fa-gauge-high', value: '4 kn', label: 'Speed' }
        ]
    },
    varuna4: {
        name: 'VARUNA 4.0',
        gen: '4.0',
        img: 'assets/images/bots/varuna-4.0.png',
        desc: 'DTU AUV\'s flagship autonomous underwater vehicle — a modular, research-grade platform engineered for international competitions like RoboSub and SAUVC.',
        specs: {
            'Length': '0.75 m', 'Width': '0.5 m', 'Depth Rating': '200 m',
            'Weight': '~35 kg', 'Max Speed': '4 knots', 'Battery': 'Li-Po 48V',
            'Autonomy': '3 hours', 'Cameras': '2x Stereo + 1x Mono'
        },
        highlights: [
            { icon: 'fa-ruler-combined', value: '0.75m', label: 'Length' },
            { icon: 'fa-weight-hanging', value: '~35kg', label: 'Weight' },
            { icon: 'fa-water', value: '200m', label: 'Depth' },
            { icon: 'fa-gauge-high', value: '4 kn', label: 'Speed' }
        ],
        detailPage: 'varuna.html'
    },
    varuna3: {
        name: 'VARUNA 3.0',
        gen: '3.0',
        img: 'assets/images/bots/varuna-3.0.png',
        desc: 'The most advanced AUV in the fleet with deep-dive capability and extended autonomous operation range.',
        specs: {
            'Length': '1.4 m', 'Width': '0.7 m', 'Depth Rating': '600 m',
            'Weight': '52 kg', 'Max Speed': '5 knots', 'Battery': 'Li-Po 52V',
            'Autonomy': '4 hours', 'Cameras': '3x Stereo'
        },
        highlights: [
            { icon: 'fa-ruler-combined', value: '1.4m', label: 'Length' },
            { icon: 'fa-weight-hanging', value: '52kg', label: 'Weight' },
            { icon: 'fa-water', value: '600m', label: 'Depth' },
            { icon: 'fa-gauge-high', value: '5 kn', label: 'Speed' }
        ]
    },
    kujagara: {
        name: 'KUJAGARA 1.0',
        gen: '1.0',
        img: 'assets/images/arkaja bot.jpg.png',
        desc: 'The original AUV platform that started it all — a foundational design that established DTU AUV\'s engineering legacy.',
        specs: {
            'Length': '0.9 m', 'Width': '0.45 m', 'Depth Rating': '300 m',
            'Weight': '32 kg', 'Max Speed': '3 knots', 'Battery': 'Li-Po 44V',
            'Autonomy': '2 hours', 'Cameras': '1x Mono'
        },
        highlights: [
            { icon: 'fa-ruler-combined', value: '0.9m', label: 'Length' },
            { icon: 'fa-weight-hanging', value: '32kg', label: 'Weight' },
            { icon: 'fa-water', value: '300m', label: 'Depth' },
            { icon: 'fa-gauge-high', value: '3 kn', label: 'Speed' }
        ]
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.ccard'));
    const overlay = document.getElementById('detail-overlay');
    const closeBtn = document.getElementById('detail-close');
    const backdrop = document.getElementById('detail-backdrop');

    if (!cards.length) return;

    const total = cards.length;
    let activeIndex = 0;
    let isAnimating = false;


    // ===== 3D CAROUSEL POSITIONING =====

    // Position presets (relative to center)
    // Positions: far-left, left, center, right, far-right
    const positions = {
        center:    { x: 0,    z: 0,   rotateY: 0,    scale: 1,    opacity: 1   },
        left:      { x: -340, z: -100, rotateY: 14,   scale: 0.82, opacity: 0.9 },
        right:     { x: 340,  z: -100, rotateY: -14,  scale: 0.82, opacity: 0.9 },
        farLeft:   { x: -560, z: -200, rotateY: 22,   scale: 0.65, opacity: 0.5 },
        farRight:  { x: 560,  z: -200, rotateY: -22,  scale: 0.65, opacity: 0.5 },
        hidden:    { x: 0,    z: -400, rotateY: 0,    scale: 0.4,  opacity: 0   }
    };

    function getSlotForOffset(offset) {
        // offset: how far from center (can wrap)
        if (offset === 0) return 'center';
        if (offset === 1) return 'right';
        if (offset === -1) return 'left';
        if (offset === 2) return 'farRight';
        if (offset === -2) return 'farLeft';
        return 'hidden';
    }

    function arrangeCards(animate = true) {
        cards.forEach((card, i) => {
            // Calculate shortest offset from center
            let offset = i - activeIndex;
            // Wrap around
            if (offset > total / 2)  offset -= total;
            if (offset < -total / 2) offset += total;

            const slot = getSlotForOffset(offset);
            const pos = positions[slot];

            // Remove all state classes
            card.classList.remove('is-center', 'is-left', 'is-right', 'is-far-left', 'is-far-right', 'is-hidden');

            // Add state class
            const classMap = {
                center: 'is-center',
                left: 'is-left',
                right: 'is-right',
                farLeft: 'is-far-left',
                farRight: 'is-far-right',
                hidden: 'is-hidden'
            };
            card.classList.add(classMap[slot]);

            // Apply transform
            const dur = animate ? '0.7s' : '0s';
            card.style.transition = `transform ${dur} cubic-bezier(0.4,0,0.2,1), opacity ${dur} ease, filter ${dur} ease, box-shadow ${dur} ease`;
            card.style.transform = `translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) scale(${pos.scale})`;
            card.style.opacity = pos.opacity;
        });

        // Update dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }

    function setActive(index, animate = true) {
        if (isAnimating && animate) return;
        activeIndex = ((index % total) + total) % total;

        if (animate) {
            isAnimating = true;
            setTimeout(() => { isAnimating = false; }, 700);
        }

        arrangeCards(animate);
    }

    // Initial arrangement (no animation)
    setActive(0, false);


    // ===== CARD CLICKS =====

    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('is-center')) return;
            setActive(i);
        });
    });

    // Explore button — opens detail overlay or navigates to detail page
    document.querySelectorAll('.ccard-explore').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // If it's an <a> tag, let the browser follow the link
            if (btn.tagName === 'A') return;
            const botKey = btn.dataset.bot;
            const bot = botsData[botKey];
            // If bot has a dedicated detail page, navigate there
            if (bot && bot.detailPage) {
                window.location.href = bot.detailPage;
                return;
            }
            openDetail(botKey);
        });
    });

    // Arrow navigation
    document.getElementById('nav-prev')?.addEventListener('click', () => {
        setActive(activeIndex - 1);
    });
    document.getElementById('nav-next')?.addEventListener('click', () => {
        setActive(activeIndex + 1);
    });

    // Dot click
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.index, 10);
            if (!isNaN(idx)) setActive(idx);
        });
    });


    // ===== DETAIL OVERLAY =====

    let specsOpen = false;

    function openDetail(botKey) {
        const bot = botsData[botKey];
        if (!bot) return;

        // Image
        const img = document.getElementById('detail-bot-img');
        img.src = bot.img;
        img.alt = bot.name;

        // Text
        document.getElementById('detail-name').textContent = bot.name;
        document.getElementById('detail-desc').textContent = bot.desc;

        // Highlight spec cards (2x2 grid)
        const specsGrid = document.getElementById('specs-grid');
        specsGrid.innerHTML = bot.highlights.map(h => `
            <div class="spec-card">
                <i class="fas ${h.icon}"></i>
                <span class="spec-value">${h.value}</span>
                <span class="spec-label">${h.label}</span>
            </div>
        `).join('');

        // Full specs list
        const fullSpecs = document.getElementById('full-specs');
        fullSpecs.innerHTML = Object.entries(bot.specs).map(([key, val]) => `
            <div class="full-spec-row">
                <span class="spec-key">${key}</span>
                <span class="spec-val">${val}</span>
            </div>
        `).join('');

        // Reset toggle state
        specsOpen = false;
        fullSpecs.classList.remove('open');
        const toggleBtn = document.getElementById('btn-specs-toggle');
        toggleBtn.innerHTML = '<i class="fas fa-list-ul"></i> Full Specifications';

        // Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDetail() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn?.addEventListener('click', closeDetail);
    backdrop?.addEventListener('click', closeDetail);

    // Specs toggle button
    document.getElementById('btn-specs-toggle')?.addEventListener('click', () => {
        const fullSpecs = document.getElementById('full-specs');
        specsOpen = !specsOpen;
        fullSpecs.classList.toggle('open', specsOpen);

        const btn = document.getElementById('btn-specs-toggle');
        btn.innerHTML = specsOpen
            ? '<i class="fas fa-chevron-up"></i> Hide Specifications'
            : '<i class="fas fa-list-ul"></i> Full Specifications';

        // Re-trigger stagger animations on rows
        if (specsOpen) {
            fullSpecs.querySelectorAll('.full-spec-row').forEach(row => {
                row.style.animation = 'none';
                row.offsetHeight; // reflow
                row.style.animation = '';
            });
        }
    });


    // ===== KEYBOARD NAVIGATION =====

    document.addEventListener('keydown', (e) => {
        // ESC closes detail overlay
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeDetail();
            return;
        }

        // Arrow keys switch cards (only when overlay is closed)
        if (overlay.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            setActive(activeIndex - 1);
        } else if (e.key === 'ArrowRight') {
            setActive(activeIndex + 1);
        }
    });


    // ===== TOUCH SWIPE =====

    let touchStartX = 0;

    document.querySelector('.carousel-stage')?.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    document.querySelector('.carousel-stage')?.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            if (dx > 0) setActive(activeIndex - 1);
            else setActive(activeIndex + 1);
        }
    }, { passive: true });
});
