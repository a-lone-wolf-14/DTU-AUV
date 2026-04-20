/* ============================================================
   TEAM PAGE — MEMBER DETAIL OVERLAY
   team.js  –  DTU AUV
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
    expertise:   92,          // % – used for the expertise bar (Knowledge widget)
    contributions: 148,       // number shown in the Contributions widget
    yearsActive: 3,
    social: {
      linkedin: '#',
      github:   '#',
      twitter:  '#',
    },
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

// ── Build overlay HTML once, then reuse ──────────────────────
function buildOverlay() {
  const overlay = document.createElement('div');
  overlay.id        = 'member-overlay';
  overlay.className = 'member-overlay';
  overlay.innerHTML = `
    <div class="member-backdrop" id="member-backdrop"></div>

    <div class="member-panel-wrap">
      <!-- Floating external widgets (scattered around the panel) -->
      <div class="mp-float mp-float--years" id="mp-float-years">
        <span class="mp-float-label">Years Active</span>
        <div class="mp-float-value" id="mpf-years">–</div>
        <span class="mp-float-sub">in the team</span>
      </div>
      <div class="mp-float mp-float--knowledge" id="mp-float-knowledge">
        <span class="mp-float-label">Knowledge</span>
        <div class="mp-float-value" id="mpf-expertise">–%</div>
        <span class="mp-float-sub" id="mpf-subsystem">–</span>
      </div>
      <div class="mp-float mp-float--efficiency" id="mp-float-efficiency">
        <span class="mp-float-label">Efficiency</span>
        <div class="mp-float-value" id="mpf-contributions">–</div>
        <span class="mp-float-sub">contributions</span>
      </div>

      <!-- Main panel -->
      <div class="member-panel" id="member-panel">

        <!-- Left: Photo -->
        <div class="mp-photo-col">
          <img src="" alt="" class="mp-photo" id="mp-photo" style="display:none">
          <div class="mp-photo-placeholder" id="mp-photo-placeholder">
            <i class="fas fa-user"></i>
          </div>
          <span class="mp-sub-badge" id="mp-sub-badge">– Subsystem</span>
        </div>

        <!-- Right: Info -->
        <div class="mp-info-col">
          <button class="mp-close" id="mp-close" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>

          <div class="mp-header">
            <span class="mp-role-label" id="mp-role">–</span>
            <h2 class="mp-name" id="mp-name">–</h2>
            <p class="mp-bio" id="mp-bio">–</p>
          </div>

          <!-- Stat widgets (inside panel) -->
          <div class="mp-widgets">
            <div class="mp-widget mp-widget--msg">
              <div class="mp-msg-icon">
                <i class="fas fa-code-branch"></i>
                <span class="mp-msg-dot"></span>
              </div>
              <div class="mp-msg-text">
                <div class="mp-msg-count" id="mp-contrib-inline">–</div>
                <div class="mp-msg-desc">contributions</div>
              </div>
            </div>

            <div class="mp-widget">
              <span class="mp-widget-label">Expertise</span>
              <div class="mp-widget-value" id="mp-expertise-inline">–%</div>
              <span class="mp-widget-sub" id="mp-subsystem-inline">–</span>
            </div>

            <div class="mp-widget mp-widget--accent">
              <div style="flex:1">
                <span class="mp-widget-label">Skill Proficiency</span>
                <div class="mp-bar-wrap" id="mp-bars"></div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="mp-skills" id="mp-skills"></div>

          <!-- Social -->
          <div class="mp-social" id="mp-social"></div>
        </div>
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

  // Photo
  const img   = document.getElementById('mp-photo');
  const phld  = document.getElementById('mp-photo-placeholder');
  if (data.photo) {
    img.src          = data.photo;
    img.alt          = data.name;
    img.style.display = 'block';
    phld.style.display = 'none';
  } else {
    img.style.display  = 'none';
    phld.style.display = 'flex';
  }

  // Texts
  document.getElementById('mp-name').textContent            = data.name;
  document.getElementById('mp-role').textContent            = data.role;
  document.getElementById('mp-bio').textContent             = data.bio;
  document.getElementById('mp-sub-badge').textContent       = data.subsystem;
  document.getElementById('mp-expertise-inline').textContent = data.expertise + '%';
  document.getElementById('mp-subsystem-inline').textContent = data.subsystem;
  document.getElementById('mp-contrib-inline').textContent   = data.contributions;

  // Floating widget values
  document.getElementById('mpf-years').textContent        = data.yearsActive;
  document.getElementById('mpf-expertise').textContent    = data.expertise + '%';
  document.getElementById('mpf-subsystem').textContent    = data.subsystem;
  document.getElementById('mpf-contributions').textContent = data.contributions;

  // Skill bars
  const barsEl = document.getElementById('mp-bars');
  barsEl.innerHTML = '';
  data.bars.forEach(b => {
    barsEl.innerHTML += `
      <div class="mp-bar-row">
        <span class="mp-bar-label">${b.label}</span>
        <div class="mp-bar-track">
          <div class="mp-bar-fill" style="--bar-pct:${b.pct}%"></div>
        </div>
      </div>`;
  });

  // Skills
  const skillsEl = document.getElementById('mp-skills');
  skillsEl.innerHTML = '';
  data.skills.forEach(s => {
    const tag = document.createElement('span');
    tag.className   = 'mp-skill-tag';
    tag.textContent = s;
    skillsEl.appendChild(tag);
  });

  // Social links
  const socialEl = document.getElementById('mp-social');
  socialEl.innerHTML = '';
  const icons = { linkedin: 'fab fa-linkedin-in', github: 'fab fa-github', twitter: 'fab fa-twitter', instagram: 'fab fa-instagram' };
  Object.entries(data.social || {}).forEach(([key, href]) => {
    if (!href || href === '#') { /* still render placeholder */ }
    const a = document.createElement('a');
    a.href  = href || '#';
    a.title = key;
    a.innerHTML = `<i class="${icons[key] || 'fas fa-link'}"></i>`;
    socialEl.appendChild(a);
  });
  // Always add email
  const emailA = document.createElement('a');
  emailA.href  = 'mailto:' + data.email;
  emailA.title = 'Email';
  emailA.innerHTML = '<i class="fas fa-envelope"></i>';
  socialEl.appendChild(emailA);

  // Show overlay → triggers CSS bar animations via .active
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Selected card highlight
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('is-selected'));
  const card = document.querySelector(`.team-card[data-member="${slug}"]`);
  if (card) card.classList.add('is-selected');
}

function closeOverlay() {
  const overlay = document.getElementById('member-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('is-selected'));

  // Re-zero bars so they animate in again on next open
  setTimeout(() => {
    document.querySelectorAll('.mp-bar-fill').forEach(b => (b.style.width = '0%'));
  }, 300);
}

function onKeyDown(e) {
  if (e.key === 'Escape') closeOverlay();
}

// ── Init ─────────────────────────────────────────────────────
function initTeam() {
  // Prevent double-init
  if (document.getElementById('member-overlay')) return;

  buildOverlay();

  document.querySelectorAll('.team-card[data-member]').forEach(card => {
    card.addEventListener('click', () => {
      openMember(card.dataset.member);
    });
  });
}

// Run immediately if DOM is ready, otherwise wait for it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTeam);
} else {
  initTeam();
}
