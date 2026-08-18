/* ============================================================
   TEAM PAGE — MEMBER DETAIL OVERLAY
   team.js  –  DTU AUV
   Redesigned: floating-card composition around central photo
   ============================================================ */

// ── Member Data ──────────────────────────────────────────────
// Pulled live from TEAM_MEMBERS (js/team-data.js) — that file is
// now the ONLY place you edit to add/update team members. Any
// optional fields (bio, skills, subsystem, etc.) you don't set
// there just fall back to sensible defaults below, so a member
// with just name/role/email/image still works fine in the popup.
function getMemberData(slug) {
  if (typeof TEAM_MEMBERS === 'undefined') return null;
  const base = TEAM_MEMBERS.find(m => m.id === slug);
  if (!base) return null;

  return {
    name: base.name,
    role: base.role,
    subsystem: base.subsystem || 'General',
    email: base.email,
    photo: base.image,
    bio: base.bio || `${base.name} contributes to DTU AUV as ${base.role}.`,
    skills: (base.skills && base.skills.length) ? base.skills : [base.role],
    expertise: typeof base.expertise === 'number' ? base.expertise : 85,
    contributions: typeof base.contributions === 'number' ? base.contributions : 100,
    yearsActive: typeof base.yearsActive === 'number' ? base.yearsActive : 1,
    social: base.social || {},
    bars: (base.bars && base.bars.length) ? base.bars : [
      { label: 'Skill',     pct: 85 },
      { label: 'Teamwork',  pct: 90 },
      { label: 'Growth',    pct: 80 },
    ],
  };
}

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
  const data = getMemberData(slug);
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
