// ========== SEWA - ROVC 2026 PROMOTIONAL POPUP ==========
(() => {
    function initPromoModal() {
        const modal = document.getElementById('sewa-promo-modal');
        if (!modal) return;

        const closeBtn = document.getElementById('promo-close');
        const dismissBtn = document.getElementById('promo-dismiss');
        const backdrop = document.getElementById('promo-backdrop');

        const STORAGE_KEY = 'sewa_promo_seen';

        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            try {
                localStorage.setItem(STORAGE_KEY, 'true');
            } catch (e) {}
        }

        // Auto-open only once per user
        let hasSeen = false;
        try {
            hasSeen = localStorage.getItem(STORAGE_KEY) === 'true';
        } catch (e) {}

        if (!hasSeen) {
            setTimeout(() => {
                openModal();
                try {
                    localStorage.setItem(STORAGE_KEY, 'true');
                } catch (e) {}
            }, 800);
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);

        const bannerTrigger = document.getElementById('open-sewa-popup-btn');
        if (bannerTrigger) {
            bannerTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPromoModal);
    } else {
        initPromoModal();
    }
})();
