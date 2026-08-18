/* ============================================================
   DTU AUV — Work Page
   3D Perspective Carousel + Legacy Bot Spec Popup
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------------------------
       1. BOT DATA
       NOTE: These are placeholder specs. Swap in the real numbers
       for each legacy bot before publishing.
       ------------------------------------------------------------ */
    const BOT_DATA = {
        lapras: {
            name: 'LAPRAS 2.0',
            img: 'assets/images/bots/lapras-2.0.png',
            desc: 'Second-iteration AUV built for pool-trial autonomy tasks — gate transit, object manipulation, and vision-guided navigation.',
            seriesIteration: 'LAPRAS Series — Iteration II',
            developedIn: '2023',
            vehicleClass: 'Fully Autonomous Underwater Vehicle (AUV)',
            dimensions: '60 × 45 × 35 cm (L × W × H)',
            maxDepth: '4 m (pool-rated)',
            dofsAchieved: '4 DOF — Surge, Sway, Heave, Yaw',
            sbcBoard: 'NVIDIA Jetson Nano (4GB)',
            powerSource: '4S LiPo, 14.8V 10,000 mAh',
            mass: [
                { key: 'Frame (approx.)', val: '3.8 kg' },
                { key: 'Hull (approx.)', val: '2.6 kg' },
                { key: 'E-stack (approx.)', val: '1.9 kg' }
            ],
            chassisMaterial: [
                { key: 'Frame', val: '6061-T6 aluminium extrusion' },
                { key: 'Hull / enclosure', val: 'Cast acrylic tube, 8 mm wall' },
                { key: 'End caps', val: 'CNC-machined Delrin (POM)' }
            ],
            thrusterConfig: [
                { key: 'Surge', val: '2× T200, horizontal mount' },
                { key: 'Sway', val: '2× T200, horizontal mount' },
                { key: 'Heave', val: '2× T100, vertical mount' }
            ],
            sensorArray: [
                { key: 'IMU', val: 'BNO055 9-DOF absolute orientation' },
                { key: 'Depth', val: 'Bar30 pressure sensor (300 m rated)' },
                { key: 'Vision', val: '2× USB stereo cams, front + down facing' },
                { key: 'DVL', val: 'Not equipped' }
            ]
        },
        arkaja: {
            name: 'ARKAJA 2.0',
            img: 'assets/images/bots/arkaja-2.0.png',
            desc: 'Competition-focused AUV built for RoboSub-style task boards, emphasizing modular payload swaps and rapid turnaround between runs.',
            seriesIteration: 'ARKAJA Series — Iteration II',
            developedIn: '2024',
            vehicleClass: 'Fully Autonomous Underwater Vehicle (AUV)',
            dimensions: '65 × 48 × 38 cm (L × W × H)',
            maxDepth: '5 m (pool-rated)',
            dofsAchieved: '5 DOF — Surge, Sway, Heave, Pitch, Yaw',
            sbcBoard: 'NVIDIA Jetson Xavier NX',
            powerSource: '6S LiPo, 22.2V 12,000 mAh',
            mass: [
                { key: 'Frame (approx.)', val: '4.5 kg' },
                { key: 'Hull (approx.)', val: '3.1 kg' },
                { key: 'E-stack (approx.)', val: '2.3 kg' }
            ],
            chassisMaterial: [
                { key: 'Frame', val: '6061-T6 aluminium, welded joints' },
                { key: 'Hull / enclosure', val: 'Anodized aluminium tube, 6 mm wall' },
                { key: 'End caps', val: 'CNC-machined acrylic, dual O-ring seal' }
            ],
            thrusterConfig: [
                { key: 'Surge / Sway', val: '4× T200, vectored horizontal mount' },
                { key: 'Heave', val: '2× T200, vertical mount' },
                { key: 'Pitch trim', val: '2× T100, fore-aft vertical mount' }
            ],
            sensorArray: [
                { key: 'IMU', val: 'VectorNav VN-100 AHRS' },
                { key: 'Depth', val: 'Bar30 pressure sensor (300 m rated)' },
                { key: 'Vision', val: '2× global-shutter USB cams + down cam' },
                { key: 'Acoustics', val: 'Single hydrophone, pinger detection' }
            ]
        },
        varuna3: {
            name: 'VARUNA 3.0',
            img: 'assets/images/bots/varuna-3.0.png',
            desc: 'The predecessor to the current flagship — established the sensor fusion and control architecture VARUNA 4.0 builds on.',
            seriesIteration: 'VARUNA Series — Iteration III',
            developedIn: '2025',
            vehicleClass: 'Fully Autonomous Underwater Vehicle (AUV)',
            dimensions: '70 × 50 × 40 cm (L × W × H)',
            maxDepth: '8 m (pool + trial-pond rated)',
            dofsAchieved: '6 DOF — full Surge, Sway, Heave, Roll, Pitch, Yaw',
            sbcBoard: 'NVIDIA Jetson Orin Nano',
            powerSource: '6S LiPo, 22.2V 16,000 mAh',
            mass: [
                { key: 'Frame (approx.)', val: '5.2 kg' },
                { key: 'Hull (approx.)', val: '3.6 kg' },
                { key: 'E-stack (approx.)', val: '2.8 kg' }
            ],
            chassisMaterial: [
                { key: 'Frame', val: '6061-T6 aluminium, CNC-machined' },
                { key: 'Hull / enclosure', val: 'Anodized aluminium tube, 6 mm wall' },
                { key: 'Thruster mounts', val: '3D-printed PETG, carbon reinforced' },
                { key: 'End caps', val: 'CNC-machined acrylic, dual O-ring seal' }
            ],
            thrusterConfig: [
                { key: 'Surge / Sway', val: '4× T200, vectored horizontal mount' },
                { key: 'Heave / Roll / Pitch', val: '4× T200, vectored vertical mount' }
            ],
            sensorArray: [
                { key: 'IMU', val: 'VectorNav VN-100 AHRS' },
                { key: 'Depth', val: 'Bar30 pressure sensor (300 m rated)' },
                { key: 'Vision', val: '2× global-shutter stereo cams + down cam' },
                { key: 'DVL', val: 'Water Linked DVL A50' },
                { key: 'Acoustics', val: 'Hydrophone array, pinger localization' }
            ]
        },
        kujagara: {
            name: 'KUJAGARA 1.0',
            img: 'assets/images/arkaja bot.jpg.png',
            desc: 'First-generation platform used to validate the team\u2019s baseline thruster layout, buoyancy trim, and control loop before scaling up.',
            seriesIteration: 'KUJAGARA Series — Iteration I',
            developedIn: '2023',
            vehicleClass: 'Semi-Autonomous Underwater Vehicle (prototype)',
            dimensions: '55 × 40 × 32 cm (L × W × H)',
            maxDepth: '3 m (pool-rated)',
            dofsAchieved: '3 DOF — Surge, Sway, Heave',
            sbcBoard: 'Raspberry Pi 4B (8GB)',
            powerSource: '3S LiPo, 11.1V 8,000 mAh',
            mass: [
                { key: 'Frame (approx.)', val: '3.1 kg' },
                { key: 'Hull (approx.)', val: '2.1 kg' },
                { key: 'E-stack (approx.)', val: '1.4 kg' }
            ],
            chassisMaterial: [
                { key: 'Frame', val: '2020 aluminium extrusion' },
                { key: 'Hull / enclosure', val: 'PVC pipe housing, acrylic end caps' },
                { key: 'End caps', val: '3D-printed PETG with O-ring groove' }
            ],
            thrusterConfig: [
                { key: 'Surge / Sway', val: '4× Seabotix BTD150, fixed horizontal mount' },
                { key: 'Heave', val: '2× Seabotix BTD150, fixed vertical mount' }
            ],
            sensorArray: [
                { key: 'IMU', val: 'MPU9250 9-DOF' },
                { key: 'Depth', val: 'MS5837-30BA pressure sensor' },
                { key: 'Vision', val: '1× USB camera, front facing' }
            ]
        }
    };

    /* ------------------------------------------------------------
       2. CAROUSEL
       ------------------------------------------------------------ */
    const track   = document.getElementById('carousel-track');
    const cards   = track ? Array.from(track.querySelectorAll('.ccard')) : [];
    const dots    = Array.from(document.querySelectorAll('.nav-dot'));
    const prevBtn = document.getElementById('nav-prev');
    const nextBtn = document.getElementById('nav-next');

    let currentIndex = 0;
    const total = cards.length;

    function layout(diff) {
        switch (diff) {
            case 0:  return { cls: 'is-center',    x: 0,   scale: 1,    rot: 0,   z: 10, opacity: 1 };
            case -1: return { cls: 'is-left',       x: -260, scale: 0.82, rot: 22,  z: 5,  opacity: 1 };
            case 1:  return { cls: 'is-right',      x: 260,  scale: 0.82, rot: -22, z: 5,  opacity: 1 };
            case -2: return { cls: 'is-far-left',   x: -440, scale: 0.66, rot: 32,  z: 2,  opacity: 1 };
            case 2:  return { cls: 'is-far-right',  x: 440,  scale: 0.66, rot: -32, z: 2,  opacity: 1 };
            default: return { cls: 'is-hidden',     x: diff < 0 ? -600 : 600, scale: 0.55, rot: 0, z: 0, opacity: 0 };
        }
    }

    function updateCarousel() {
        cards.forEach((card, i) => {
            let diff = i - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const { cls, x, scale, rot, z, opacity } = layout(diff);

            card.classList.remove('is-center', 'is-left', 'is-right', 'is-far-left', 'is-far-right', 'is-hidden');
            card.classList.add(cls);

            card.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale}) rotateY(${rot}deg)`;
            card.style.zIndex = z;
            card.style.opacity = opacity;
        });

        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function goTo(index) {
        currentIndex = ((index % total) + total) % total;
        updateCarousel();
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    dots.forEach((dot) => {
        dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
    });

    cards.forEach((card, i) => {
        card.addEventListener('click', (e) => {
            // Let the explore/see-more link handle its own click.
            if (e.target.closest('.ccard-explore')) return;
            if (i !== currentIndex) goTo(i);
        });
    });

    // Basic swipe support on the stage
    const stage = document.getElementById('carousel-stage');
    if (stage) {
        let touchStartX = 0;
        stage.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        stage.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
        }, { passive: true });
    }

    // Keyboard arrows
    document.addEventListener('keydown', (e) => {
        if (overlay && overlay.classList.contains('active')) return; // let popup own arrow keys context
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    updateCarousel();

    /* ------------------------------------------------------------
       3. LEGACY BOT SPEC POPUP
       ------------------------------------------------------------ */
    const overlay      = document.getElementById('detail-overlay');
    const backdrop      = document.getElementById('detail-backdrop');
    const closeBtn       = document.getElementById('detail-close');
    const imgEl          = document.getElementById('detail-bot-img');
    const nameEl          = document.getElementById('detail-name');
    const descEl           = document.getElementById('detail-desc');
    const specsGrid          = document.getElementById('specs-grid');
    const fullSpecs            = document.getElementById('full-specs');
    const specBlocksEl          = document.getElementById('spec-blocks');
    const specsToggleBtn          = document.getElementById('btn-specs-toggle');

    function quickSpecCard(icon, value, label) {
        return `
            <div class="spec-card">
                <i class="fas ${icon}"></i>
                <span class="spec-value">${value}</span>
                <span class="spec-label">${label}</span>
            </div>`;
    }

    function fullSpecRow(key, val) {
        return `
            <div class="full-spec-row">
                <span class="spec-key">${key}</span>
                <span class="spec-val">${val}</span>
            </div>`;
    }

    function specBlock(icon, title, items) {
        const rows = items.map(item => `
            <div class="spec-subitem">
                <span class="spec-subitem-key">${item.key}</span>
                <span class="spec-subitem-val">${item.val}</span>
            </div>`).join('');

        return `
            <div class="spec-block">
                <div class="spec-block-title"><i class="fas ${icon}"></i> ${title}</div>
                <div class="spec-sublist">${rows}</div>
            </div>`;
    }

    function openPopup(botKey) {
        const bot = BOT_DATA[botKey];
        if (!bot || !overlay) return;

        imgEl.src = bot.img;
        imgEl.alt = bot.name;
        nameEl.textContent = bot.name;
        descEl.textContent = bot.desc;

        specsGrid.innerHTML = [
            quickSpecCard('fa-ship', bot.vehicleClass.includes('AUV') ? 'AUV' : 'ROV', 'Vehicle Class'),
            quickSpecCard('fa-water', bot.maxDepth, 'Max Depth'),
            quickSpecCard('fa-arrows-rotate', bot.dofsAchieved.split(' ')[0] + ' ' + bot.dofsAchieved.split(' ')[1], 'DOFs Achieved'),
            quickSpecCard('fa-calendar', bot.developedIn, 'Developed In')
        ].join('');

        const keyValueRows = [
            fullSpecRow('Series & Iteration', bot.seriesIteration),
            fullSpecRow('Vehicle Class', bot.vehicleClass),
            fullSpecRow('Dimensions', bot.dimensions),
            fullSpecRow('SBC Board', bot.sbcBoard),
            fullSpecRow('Power Source', bot.powerSource)
        ].join('');

        const blocks = [
            specBlock('fa-weight-hanging', 'Mass Breakdown', bot.mass),
            specBlock('fa-cubes', 'Chassis Material', bot.chassisMaterial),
            specBlock('fa-gauge-high', 'Thruster Configuration', bot.thrusterConfig),
            specBlock('fa-satellite-dish', 'Sensor Array', bot.sensorArray)
        ].join('');

        fullSpecs.innerHTML = keyValueRows + `<div class="spec-blocks" id="spec-blocks">${blocks}</div>`;
        fullSpecs.classList.remove('open');
        if (specsToggleBtn) {
            specsToggleBtn.innerHTML = '<i class="fas fa-list-ul"></i> Full Specifications';
        }

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        if (!overlay) return;
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-popup-bot]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openPopup(btn.dataset.popupBot);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    if (backdrop) backdrop.addEventListener('click', closePopup);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) closePopup();
    });

    if (specsToggleBtn) {
        specsToggleBtn.addEventListener('click', () => {
            const isOpen = fullSpecs.classList.toggle('open');
            specsToggleBtn.innerHTML = isOpen
                ? '<i class="fas fa-chevron-up"></i> Hide Full Specifications'
                : '<i class="fas fa-list-ul"></i> Full Specifications';
        });
    }

});