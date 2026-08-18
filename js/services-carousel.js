/* ============================================================
   DTU AUV — "Our Work" paged carousel
   Page 1: Mechanical, Embedded, Software
   Page 2: R&D, Corporate
   ============================================================ */

function initServicesCarousel() {
    const oldTrack = document.getElementById('services-track');
    if (!oldTrack) return;

    const cardsByIndex = {};
    oldTrack.querySelectorAll('.service-card').forEach(card => {
        cardsByIndex[card.dataset.index] = card;
    });

    const prevBtn = document.getElementById('prev-service');
    const nextBtn = document.getElementById('next-service');

    // Grouping by original data-index values
    const pageOrders = [
        [2, 1, 0], // Mechanical, Embedded, Software
        [4, 3]     // R&D, Corporate
    ];

    const viewport = document.createElement('div');
    viewport.className = 'services-viewport';

    const slider = document.createElement('div');
    slider.className = 'services-slider';

    pageOrders.forEach(order => {
        const page = document.createElement('div');
        page.className = 'services-page';
        order.forEach(idx => {
            const card = cardsByIndex[idx];
            if (card) {
                // Strip any leftover inline styles from the old 3D carousel
                card.removeAttribute('style');
                page.appendChild(card);
            }
        });
        slider.appendChild(page);
    });

    viewport.appendChild(slider);
    oldTrack.replaceWith(viewport);

    const totalPages = pageOrders.length;
    let currentPage = 0;

    function update() {
        slider.style.transform = `translateX(-${currentPage * 100}%)`;
        if (prevBtn) prevBtn.classList.toggle('is-disabled', currentPage === 0);
        if (nextBtn) nextBtn.classList.toggle('is-disabled', currentPage === totalPages - 1);
    }

    function goTo(page) {
        currentPage = Math.max(0, Math.min(totalPages - 1, page));
        update();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentPage - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentPage + 1));

    // Swipe support
    let touchStartX = 0;
    viewport.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(dx) > 40) goTo(currentPage + (dx < 0 ? 1 : -1));
    }, { passive: true });

    update();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesCarousel);
} else {
    initServicesCarousel();
}