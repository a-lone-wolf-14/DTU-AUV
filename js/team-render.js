/* ============================================================
   TEAM GRID RENDERER
   ============================================================
   You should not need to edit this file. It just reads
   TEAM_MEMBERS (from team-data.js) and builds the cards that
   used to be hand-written in team.html, using the exact same
   classes/markup structure as before — so all existing CSS,
   animations, and JS hooks (team.js) keep working unchanged.
   ============================================================ */

(function () {
  // Inline placeholder — always works, no dependency on a file existing on disk.
  const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
      '<rect width="200" height="200" fill="#e5e5e5"/>' +
      '<circle cx="100" cy="80" r="38" fill="#bbb"/>' +
      '<path d="M30 190c0-45 31-70 70-70s70 25 70 70" fill="#bbb"/>' +
      "</svg>"
    );
  const DELAY_CLASSES = ["", "delay-1", "delay-2", "delay-3"];

  function buildCard(member, index) {
    const card = document.createElement("div");
    const delayClass = DELAY_CLASSES[index % DELAY_CLASSES.length];
    card.className = ["team-card", "anim-fade-up", delayClass]
      .filter(Boolean)
      .join(" ");
    card.dataset.member = member.id;

    card.innerHTML = `
      <div class="team-img-wrapper">
        <div class="team-blob"></div>
        <div class="team-photo">
          <img src="${member.image}" alt="${member.name}"
               onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
        </div>
      </div>
      <span class="team-role">${member.role}</span>
      <h3 class="team-name">${member.name}</h3>
    `;
    return card;
  }

  function renderTeam() {
    const grid = document.getElementById("teamGrid");
    if (!grid || typeof TEAM_MEMBERS === "undefined") return;

    const fragment = document.createDocumentFragment();
    TEAM_MEMBERS.forEach((member, index) => {
      fragment.appendChild(buildCard(member, index));
    });

    grid.innerHTML = "";
    grid.appendChild(fragment);

    // Let team.js's scroll/animation observers (if any) pick up
    // the newly added cards.
    document.dispatchEvent(new CustomEvent("teamRendered"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderTeam);
  } else {
    renderTeam();
  }
})();
