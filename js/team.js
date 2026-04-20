/* ============================================================
   TEAM PAGE — MEMBER DETAIL OVERLAY
   team.js  –  DTU AUV
   Redesigned: floating-card composition around central photo
   ============================================================ */

// ── Member Data ──────────────────────────────────────────────
const members = {
  'zack-hill': {
    name:        'Zack Hill',
    role:        'Team Lead & Project Director',
    subsystem:   'Leadership',
    email:       'zack@few.io',
    photo:       'assets/images/team/1.jpg',
    bio:         'Leads the overall strategy and execution of DTU AUV. Coordinates cross-functional teams and represents the club at international competitions including RoboSub and SAUVC.',
    skills:      ['Leadership', 'Project Management', 'Systems Engineering', 'RoboSub', 'SAUVC'],
    expertise:   92,
    contributions: 148,
    yearsActive: 3,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'Strategy',    pct: 95 },
      { label: 'Engineering', pct: 78 },
      { label: 'Teamwork',    pct: 98 },
    ],
  },
  'arlton-lowry': {
    name:        'Arlton Lowry',
    role:        'Chief Communications Officer',
    subsystem:   'Communications',
    email:       'arlton@few.io',
    photo:       'assets/images/team/4.jpg',
    bio:         'Manages all external communications, sponsorships and outreach. Builds relationships with industry partners and promotes DTU AUV\'s research and competition achievements globally.',
    skills:      ['Outreach', 'Sponsorship', 'Content Strategy', 'Public Relations'],
    expertise:   85,
    contributions: 112,
    yearsActive: 2,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'Communication', pct: 96 },
      { label: 'Marketing',     pct: 88 },
      { label: 'Writing',       pct: 82 },
    ],
  },
  'sarah-devine': {
    name:        'Sarah Devine',
    role:        'Director of Projects',
    subsystem:   'Mechanical',
    email:       'sarah@few.io',
    photo:       'assets/images/team/5a.jpg',
    bio:         'Oversees mechanical design and manufacturing of AUV hull, thrusters and pressure vessels. Expert in SolidWorks, CFD simulations and composite fabrication techniques.',
    skills:      ['SolidWorks', 'CFD', 'FEA', 'Composites', 'Waterproofing'],
    expertise:   90,
    contributions: 136,
    yearsActive: 3,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'CAD Design', pct: 94 },
      { label: 'CFD/FEA',    pct: 87 },
      { label: 'Fabrication', pct: 82 },
    ],
  },
  'will-carter': {
    name:        'Will Carter',
    role:        'Director of Accounts',
    subsystem:   'Electronics',
    email:       'will@few.io',
    photo:       'assets/images/team/5.jpeg',
    bio:         'Designs and implements the electronics architecture including power distribution, sensor integration and custom PCBs for the AUV\'s control systems and communication modules.',
    skills:      ['PCB Design', 'KiCad', 'Embedded C', 'Power Systems', 'ROS'],
    expertise:   88,
    contributions: 124,
    yearsActive: 2,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'PCB Design',  pct: 91 },
      { label: 'Embedded',    pct: 86 },
      { label: 'Power Mgmt',  pct: 88 },
    ],
  },
  'brent-fulford': {
    name:        'Brent Fulford',
    role:        'Software & Controls Lead',
    subsystem:   'Software',
    email:       'brent@few.io',
    photo:       'assets/images/team/7.jpeg',
    bio:         'Develops the autonomy stack, computer vision pipelines and mission planning algorithms that allow the AUV to navigate and complete tasks in dynamic underwater environments.',
    skills:      ['Python', 'ROS2', 'OpenCV', 'Machine Learning', 'SLAM'],
    expertise:   93,
    contributions: 201,
    yearsActive: 3,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'ROS2/Python', pct: 95 },
      { label: 'Computer Vision', pct: 90 },
      { label: 'Controls',    pct: 88 },
    ],
  },
  'correne-spero': {
    name:        'Correne Spero',
    role:        'Finance & Administration',
    subsystem:   'Operations',
    email:       'spero@few.io',
    photo:       'assets/images/team/8.jpeg',
    bio:         'Manages the club\'s budget, procurement and administrative operations. Handles competition registrations, travel logistics and ensures all documentation meets compliance requirements.',
    skills:      ['Budgeting', 'Procurement', 'Logistics', 'Documentation'],
    expertise:   83,
    contributions: 98,
    yearsActive: 2,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'Finance',     pct: 90 },
      { label: 'Logistics',   pct: 85 },
      { label: 'Compliance',  pct: 88 },
    ],
  },
  'calvin-bramlett': {
    name:        'Calvin Bramlett',
    role:        'Senior Hardware Designer',
    subsystem:   'Mechanical',
    email:       'calvin@few.io',
    photo:       'assets/images/team/9.jpeg',
    bio:         'Specialises in precision machining and prototype fabrication. Designs thruster mounts, camera housings and the main frame structure, ensuring every component meets underwater pressure tolerances.',
    skills:      ['CNC Machining', 'SolidWorks', '3D Printing', 'Waterjet', 'Assembly'],
    expertise:   86,
    contributions: 119,
    yearsActive: 2,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'Machining',   pct: 90 },
      { label: '3D Printing', pct: 85 },
      { label: 'CAD Design',  pct: 88 },
    ],
  },
  'john-cater': {
    name:        'John Cater',
    role:        'Senior UI / UX Designer',
    subsystem:   'Interface',
    email:       'john@few.io',
    photo:       'assets/images/team/10.jpeg',
    bio:         'Creates the visual identity and user interfaces for DTU AUV — from the operator dashboards and mission control UI to the public-facing website and competition presentation materials.',
    skills:      ['Figma', 'CSS / HTML', 'Motion Design', 'Branding', 'React'],
    expertise:   91,
    contributions: 105,
    yearsActive: 2,
    social: { linkedin: '#', github: '#', twitter: '#' },
    bars: [
      { label: 'UI Design',   pct: 94 },
      { label: 'Motion',      pct: 88 },
      { label: 'Branding',    pct: 90 },
    ],
  },
};

// ── Subsystem → decorative character mapping ─────────────────
const subsystemChar = {
  Leadership:     '⚑',
  Communications: '✦',
  Mechanical:     '⚙',
  Electronics:    '⚡',
  Software:       '◈',
  Operations:     '◉',
  Interface:      '◎',
};

// ── Generate bar chart heights from member data ──────────────
function generateBarHeights(data) {
  // Use the expertise + bar percentages to seed a histogram pattern
  const base = data.expertise / 100;
  const barCount = 18;
  const heights = [];
  // Create a natural-looking wave pattern based on skill data
  for (let i = 0; i < barCount; i++) {
    const phase = (i / barCount) * Math.PI * 2;
    const wave  = Math.sin(phase * 1.5 + data.contributions * 0.1) * 0.3;
    const noise = Math.sin(i * 3.7 + data.expertise * 0.2) * 0.2;
    const h     = Math.max(0.12, Math.min(1, base * 0.6 + wave + noise + 0.3));
    heights.push(Math.round(h * 100));
  }
  return heights;
}

// ── Build overlay DOM once ───────────────────────────────────
function buildOverlay() {
  const overlay = document.createElement('div');
  overlay.id        = 'member-overlay';
  overlay.className = 'member-overlay';
  overlay.innerHTML = `
    <div class="member-backdrop" id="member-backdrop"></div>

    <div class="member-composition" id="member-composition">
      <!-- Close -->
      <button class="mp-close" id="mp-close" aria-label="Close">
        <i class="fas fa-times"></i>
      </button>

      <!-- Photo area: holds main card + floating cards -->
      <div class="mp-photo-area">

        <!-- Floating logo -->
        <div class="mp-logo-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
        </div>

        <!-- Messages / Contributions card — top right -->
        <div class="mp-card mp-card--messages" id="mp-card-messages">
          <div class="mp-card__header">
            <span class="mp-card__title">Contributions</span>
            <span class="mp-card__badge" id="mp-contrib-badge">–</span>
          </div>
          <div class="mp-card__thumb-wrap">
            <img class="mp-card__thumb" id="mp-thumb-msg" src="" alt="">
          </div>
        </div>

        <!-- Main photo card — centre -->
        <div class="mp-main-card" id="mp-main-card">
          <img class="mp-main-photo" id="mp-photo" src="" alt="" style="display:none">
          <div class="mp-photo-placeholder" id="mp-photo-placeholder" style="display:none">
            <i class="fas fa-user"></i>
          </div>
          <div class="mp-main-gradient"></div>
        </div>

        <!-- Knowledge card — bottom left -->
        <div class="mp-card mp-card--knowledge" id="mp-card-knowledge">
          <div class="mp-card__header">
            <span class="mp-card__title">Knowledge</span>
            <span class="mp-card__arrow">→</span>
          </div>
          <div class="mp-card__big-char" id="mp-big-char">●</div>
          <div class="mp-card__user">
            <img class="mp-card__avatar" id="mp-avatar-know" src="" alt="">
            <div class="mp-card__user-info">
              <div class="mp-card__user-name" id="mp-name-know">–</div>
              <div class="mp-card__user-pct" id="mp-pct-know">–%</div>
            </div>
          </div>
        </div>

        <!-- Efficiency card — bottom right -->
        <div class="mp-card mp-card--efficiency" id="mp-card-efficiency">
          <div class="mp-card__header">
            <span class="mp-card__title">Efficiency</span>
            <span class="mp-card__arrow">→</span>
          </div>
          <div class="mp-card__bars" id="mp-eff-bars"></div>
          <div class="mp-card__user">
            <img class="mp-card__avatar" id="mp-avatar-eff" src="" alt="">
            <div class="mp-card__user-info">
              <div class="mp-card__user-name" id="mp-name-eff">–</div>
              <div class="mp-card__user-pct" id="mp-pct-eff">–%</div>
            </div>
          </div>
        </div>

      </div><!-- /.mp-photo-area -->

      <!-- Brand -->
      <div class="mp-brand">DTU·AUV</div>

      <!-- Details below composition -->
      <div class="mp-details">
        <div class="mp-details__header">
          <span class="mp-details__role" id="mp-role">–</span>
          <h2 class="mp-details__name" id="mp-name">–</h2>
        </div>
        <p class="mp-details__bio" id="mp-bio">–</p>
        <div class="mp-details__skills" id="mp-skills"></div>
        <div class="mp-details__social" id="mp-social"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close listeners
  document.getElementById('member-backdrop').addEventListener('click', closeOverlay);
  document.getElementById('mp-close').addEventListener('click', closeOverlay);
  document.addEventListener('keydown', onKeyDown);
}

// ── Populate & open ──────────────────────────────────────────
function openMember(slug) {
  const data = members[slug];
  if (!data) return;

  const overlay = document.getElementById('member-overlay');

  // ── Photo ──
  const img  = document.getElementById('mp-photo');
  const phld = document.getElementById('mp-photo-placeholder');
  if (data.photo) {
    img.src            = data.photo;
    img.alt            = data.name;
    img.style.display  = 'block';
    phld.style.display = 'none';
  } else {
    img.style.display  = 'none';
    phld.style.display = 'flex';
  }

  // ── Contributions card ──
  document.getElementById('mp-contrib-badge').textContent = data.contributions;
  const thumbMsg = document.getElementById('mp-thumb-msg');
  thumbMsg.src = data.photo || '';
  thumbMsg.alt = data.name;

  // ── Knowledge card ──
  const charEl = document.getElementById('mp-big-char');
  charEl.textContent = subsystemChar[data.subsystem] || data.name.charAt(0);
  document.getElementById('mp-name-know').textContent = data.name;
  document.getElementById('mp-pct-know').textContent  = data.expertise + '%';
  const avatarKnow = document.getElementById('mp-avatar-know');
  avatarKnow.src = data.photo || '';
  avatarKnow.alt = data.name;

  // ── Efficiency card ──
  const avgPct = Math.round(data.bars.reduce((s, b) => s + b.pct, 0) / data.bars.length);
  document.getElementById('mp-name-eff').textContent = data.name;
  document.getElementById('mp-pct-eff').textContent  = avgPct + '%';
  const avatarEff = document.getElementById('mp-avatar-eff');
  avatarEff.src = data.photo || '';
  avatarEff.alt = data.name;

  // Generate bars
  const barsContainer = document.getElementById('mp-eff-bars');
  barsContainer.innerHTML = '';
  const heights = generateBarHeights(data);
  heights.forEach(h => {
    const bar = document.createElement('div');
    bar.className = 'mp-card__bar';
    bar.style.height = '0%';
    barsContainer.appendChild(bar);
    // Animate in after overlay activates
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.height = h + '%';
      });
    });
  });

  // ── Details section ──
  document.getElementById('mp-name').textContent = data.name;
  document.getElementById('mp-role').textContent = data.role;
  document.getElementById('mp-bio').textContent  = data.bio;

  // Skills
  const skillsEl = document.getElementById('mp-skills');
  skillsEl.innerHTML = '';
  data.skills.forEach(s => {
    const tag = document.createElement('span');
    tag.className   = 'mp-skill-tag';
    tag.textContent = s;
    skillsEl.appendChild(tag);
  });

  // Social
  const socialEl = document.getElementById('mp-social');
  socialEl.innerHTML = '';
  const icons = {
    linkedin:  'fab fa-linkedin-in',
    github:    'fab fa-github',
    twitter:   'fab fa-twitter',
    instagram: 'fab fa-instagram',
  };
  Object.entries(data.social || {}).forEach(([key, href]) => {
    const a = document.createElement('a');
    a.href      = href || '#';
    a.title     = key;
    a.innerHTML = `<i class="${icons[key] || 'fas fa-link'}"></i>`;
    socialEl.appendChild(a);
  });
  // Always add email link
  const emailA = document.createElement('a');
  emailA.href      = 'mailto:' + data.email;
  emailA.title     = 'Email';
  emailA.innerHTML = '<i class="fas fa-envelope"></i>';
  socialEl.appendChild(emailA);

  // ── Activate ──
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Highlight card in grid
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('is-selected'));
  const card = document.querySelector(`.team-card[data-member="${slug}"]`);
  if (card) card.classList.add('is-selected');
}

// ── Close ────────────────────────────────────────────────────
function closeOverlay() {
  const overlay = document.getElementById('member-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('is-selected'));

  // Reset bar heights for next animation
  setTimeout(() => {
    document.querySelectorAll('.mp-card__bar').forEach(b => (b.style.height = '0%'));
  }, 350);
}

function onKeyDown(e) {
  if (e.key === 'Escape') closeOverlay();
}

// ── Init ─────────────────────────────────────────────────────
function initTeam() {
  if (document.getElementById('member-overlay')) return;
  buildOverlay();

  document.querySelectorAll('.team-card[data-member]').forEach(card => {
    card.addEventListener('click', () => openMember(card.dataset.member));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTeam);
} else {
  initTeam();
}
