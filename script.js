(function () {
  const board = document.getElementById("board");
  const tallyEl = document.getElementById("tally");

  function fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return "";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
    ));
  }

  function entryHTML(m) {
    return `
      <article class="entry pre">
        <img class="entry-photo" src="${esc(m.image)}" alt="Dirty martini at ${esc(m.location)}" loading="lazy" />
        <div class="entry-copy">
          <div class="entry-line">
            <span class="entry-name">${esc(m.name)}</span>
            ${m.spirit ? `<span class="entry-spirit">${esc(m.spirit)}</span>` : ""}
            <span class="leader" aria-hidden="true"></span>
            ${m.date ? `<span class="entry-date">${fmtDate(m.date)}</span>` : ""}
          </div>
          ${m.city ? `<p class="entry-place">${esc(m.city)}</p>` : ""}
          ${m.notes ? `<p class="entry-note">“${esc(m.notes)}”</p>` : ""}
        </div>
      </article>`;
  }

  function render() {
    board.innerHTML = TIERS.map((tier) => {
      const inTier = MARTINIS.filter((m) => m.tier === tier.id);
      const body = inTier.length
        ? `<div class="entries">${inTier.map(entryHTML).join("")}</div>`
        : `<p class="tier-empty">no entries yet — the night is young</p>`;
      return `
        <section class="tier tier-${tier.id}">
          <div class="tier-head">
            <span class="seal">${esc(tier.label)}</span>
            <span class="tier-name">${esc(tier.blurb)}</span>
            <span class="tier-rule" aria-hidden="true"></span>
          </div>
          ${body}
        </section>`;
    }).join("");

    const total = MARTINIS.length;
    const places = new Set(MARTINIS.map((m) => m.location)).size;
    const m = total === 1 ? "martini" : "martinis";
    const p = places === 1 ? "bar" : "bars";
    tallyEl.textContent = `${total} ${m} judged across ${places} ${p}. The list grows.`;

    revealEntries();
  }

  // Staggered reveal via class removal + CSS transition (no keyframe fill,
  // so hover and un-hover never fight over transform).
  function revealEntries() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const entries = board.querySelectorAll(".entry.pre");
    if (reduce) {
      entries.forEach((el) => el.classList.remove("pre"));
      return;
    }
    entries.forEach((el, i) => {
      setTimeout(() => el.classList.remove("pre"), 90 + i * 80);
    });
  }

  render();
})();
