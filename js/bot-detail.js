/* ============================================================
   BOT DETAIL PAGE — Scroll-driven frame animation
   bot-detail.js  –  DTU AUV
   Sticky "frozen" viewport: text fades in/out, bot rotates
   ============================================================ */

(function () {
    'use strict';

    // ── Config ───────────────────────────────────────────────
    const FRAME_COUNT  = 100;
    const FRAME_PATH   = 'assets/images/bots/frames/';
    const FRAME_EXT    = '.webp';
    const PANEL_COUNT  = 5;

    // ── State ────────────────────────────────────────────────
    const frames       = [];
    let   loadedCount  = 0;
    let   currentFrame = -1;
    let   activePanel  = -1;
    let   canvas, ctx;
    let   canvasReady  = false;

    // DOM refs (set in init)
    let stageEl, panels, dots, progressFill, counterCurrent;

    // ── Preload all frames ───────────────────────────────────
    function preloadFrames() {
        const fill = document.getElementById('preloader-fill');
        return new Promise(resolve => {
            let done = false;
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                img.src = FRAME_PATH + String(i).padStart(4, '0') + FRAME_EXT;
                img.onload = img.onerror = () => {
                    loadedCount++;
                    if (fill) fill.style.width = Math.round((loadedCount / FRAME_COUNT) * 100) + '%';
                    if (loadedCount >= FRAME_COUNT && !done) { done = true; resolve(); }
                };
                frames[i - 1] = img;
            }
        });
    }

    // ── Draw a single frame ──────────────────────────────────
    function drawFrame(idx) {
        if (!canvasReady || !frames[idx]) return;
        const img = frames[idx];
        const cw = canvas.width, ch = canvas.height;
        ctx.clearRect(0, 0, cw, ch);
        const s = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
        const w = img.naturalWidth * s, h = img.naturalHeight * s;
        ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    }

    // ── Helpers ──────────────────────────────────────────────
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

    // ── Compute scroll progress through the sticky stage (0→1) ─
    function getStageProgress() {
        if (!stageEl) return 0;
        const rect = stageEl.getBoundingClientRect();
        // rect.top starts at 0 when the stage enters the viewport top
        // We want 0 when top=0, 1 when the bottom reaches the viewport bottom
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return 0;
        return clamp(-rect.top / scrollable, 0, 1);
    }

    // ── Update which panel is active ─────────────────────────
    function updatePanels(progress) {
        // Divide progress evenly among panels
        const raw   = progress * PANEL_COUNT;
        const idx   = clamp(Math.floor(raw), 0, PANEL_COUNT - 1);

        // Progress bar
        if (progressFill) progressFill.style.width = (progress * 100).toFixed(1) + '%';

        // Counter
        if (counterCurrent) counterCurrent.textContent = String(idx + 1).padStart(2, '0');

        if (idx === activePanel) return;
        activePanel = idx;

        panels.forEach((p, i) => p.classList.toggle('active', i === idx));
        dots.forEach((d, i)   => d.classList.toggle('active', i === idx));
    }

    // ── Main scroll tick ─────────────────────────────────────
    function onScroll() {
        const progress = getStageProgress();

        // Frame animation
        const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
        if (frameIdx !== currentFrame) {
            drawFrame(frameIdx);
            currentFrame = frameIdx;
        }

        // Panel crossfade
        updatePanels(progress);
    }

    // ── Intersection Observer for spec/subsystem fade-ups ────
    function initFadeUps() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.15 });
        document.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
    }

    // ── Init ─────────────────────────────────────────────────
    async function init() {
        canvas  = document.getElementById('bot-canvas');
        stageEl = document.getElementById('bot-scroll-stage');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        canvasReady = true;

        panels = Array.from(document.querySelectorAll('#stage-text .sp-content'));
        dots   = Array.from(document.querySelectorAll('#stage-dots .dot'));
        progressFill   = document.getElementById('stage-progress-fill');
        counterCurrent = document.querySelector('.counter-current');

        await preloadFrames();

        // Hide preloader
        const pl = document.getElementById('bot-preloader');
        if (pl) pl.classList.add('done');

        drawFrame(0);
        currentFrame = 0;

        // Activate first panel immediately
        if (panels.length) panels[0].classList.add('active');
        if (dots.length)   dots[0].classList.add('active');
        activePanel = 0;

        // Scroll listener (rAF-throttled)
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => { onScroll(); ticking = false; });
                ticking = true;
            }
        }, { passive: true });

        onScroll();
        initFadeUps();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
