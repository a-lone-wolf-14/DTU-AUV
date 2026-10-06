/* ============================================================
   DTU AUV — "Our Work" Carousel
   Desktop (> 768px): 2 pages ([Mechanical, Embedded, Software] & [R&D, Corporate])
   Mobile (<= 768px): 5 single-card slides ([Mechanical], [Embedded], [Software], [R&D], [Corporate])
   ============================================================ */

(() => {
    let cachedCards = null;
    let currentMode = null; // 'desktop' or 'mobile'
    let currentPage = 0;

    function buildCarousel() {
        const stage = document.getElementById('services-stage');
        if (!stage) return;

        // On first run, find and cache cards
        if (!cachedCards) {
            const track = document.getElementById('services-track');
            if (!track) return;
            cachedCards = {};
            track.querySelectorAll('.service-card').forEach(card => {
                cachedCards[card.dataset.index] = card.cloneNode(true);
            });
        }

        const isMobile = window.innerWidth <= 768;
        const newMode = isMobile ? 'mobile' : 'desktop';

        // Check if mode actually changed
        const existingViewport = stage.querySelector('.services-viewport');
        if (existingViewport && currentMode === newMode) return;
        currentMode = newMode;
        currentPage = 0;

        const pageOrders = isMobile
            ? [[2], [1], [0], [4], [3]] // 1 card per slide on mobile: Mechanical, Embedded, Software, R&D, Corporate
            : [[2, 1, 0], [4, 3]];       // 2 pages on desktop

        // Remove old controls wrapper if any
        const existingControls = stage.querySelector('.services-controls-wrapper');
        if (existingControls) existingControls.remove();
        const existingDots = stage.querySelector('.services-dots');
        if (existingDots) existingDots.remove();
        const oldTrack = document.getElementById('services-track');
        if (oldTrack) oldTrack.remove();

        const viewport = document.createElement('div');
        viewport.className = 'services-viewport';

        const slider = document.createElement('div');
        slider.className = 'services-slider';

        pageOrders.forEach(order => {
            const page = document.createElement('div');
            page.className = 'services-page';
            order.forEach(idx => {
                const card = cachedCards[idx].cloneNode(true);
                card.removeAttribute('style');
                page.appendChild(card);
            });
            slider.appendChild(page);
        });

        viewport.appendChild(slider);

        // Insert viewport before next button
        const nextBtn = document.getElementById('next-service');
        stage.insertBefore(viewport, nextBtn);

        // Create unified controls wrapper
        const controlsWrapper = document.createElement('div');
        controlsWrapper.className = 'services-controls-wrapper';

        // Mobile prev button
        const mobilePrev = document.createElement('button');
        mobilePrev.className = 'services-mobile-btn services-mobile-btn--prev';
        mobilePrev.setAttribute('aria-label', 'Previous slide');
        mobilePrev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        mobilePrev.addEventListener('click', () => goTo(currentPage - 1));

        // Mobile next button
        const mobileNext = document.createElement('button');
        mobileNext.className = 'services-mobile-btn services-mobile-btn--next';
        mobileNext.setAttribute('aria-label', 'Next slide');
        mobileNext.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        mobileNext.addEventListener('click', () => goTo(currentPage + 1));

        // Create indicator dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'services-dots';
        pageOrders.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = `service-dot ${idx === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
            dot.addEventListener('click', () => goTo(idx));
            dotsContainer.appendChild(dot);
        });

        controlsWrapper.appendChild(mobilePrev);
        controlsWrapper.appendChild(dotsContainer);
        controlsWrapper.appendChild(mobileNext);
        stage.appendChild(controlsWrapper);

        const prevBtn = document.getElementById('prev-service');
        const totalPages = pageOrders.length;

        function update() {
            slider.style.transform = `translateX(-${currentPage * 100}%)`;
            if (prevBtn) prevBtn.classList.toggle('is-disabled', currentPage === 0);
            if (nextBtn) nextBtn.classList.toggle('is-disabled', currentPage === totalPages - 1);
            if (mobilePrev) mobilePrev.classList.toggle('is-disabled', currentPage === 0);
            if (mobileNext) mobileNext.classList.toggle('is-disabled', currentPage === totalPages - 1);
            dotsContainer.querySelectorAll('.service-dot').forEach((d, i) => {
                d.classList.toggle('active', i === currentPage);
            });
        }

        function goTo(p) {
            currentPage = Math.max(0, Math.min(totalPages - 1, p));
            update();
        }

        if (prevBtn) {
            const newPrev = prevBtn.cloneNode(true);
            prevBtn.replaceWith(newPrev);
            newPrev.addEventListener('click', () => goTo(currentPage - 1));
        }

        if (nextBtn) {
            const newNext = nextBtn.cloneNode(true);
            nextBtn.replaceWith(newNext);
            newNext.addEventListener('click', () => goTo(currentPage + 1));
        }

        // Touch swipe support
        let touchStartX = 0;
        let touchStartY = 0;
        viewport.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        viewport.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].screenX - touchStartX;
            const dy = e.changedTouches[0].screenY - touchStartY;
            if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
                goTo(currentPage + (dx < 0 ? 1 : -1));
            }
        }, { passive: true });

        update();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildCarousel);
    } else {
        buildCarousel();
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildCarousel, 150);
    });
})();