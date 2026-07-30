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

  function cardHTML(m, order) {
    const stagger = 90 + order * 70; // one cascading reveal, ms
    return `
      <article class="card" style="--stagger:${stagger}ms">
        <img class="card-photo" src="${esc(m.image)}" alt="Dirty martini at ${esc(m.location)}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-name">${esc(m.name)}</h3>
          ${m.location ? `<p class="card-loc">${esc(m.location)}</p>` : ""}
          ${m.notes ? `<p class="card-notes">“${esc(m.notes)}”</p>` : ""}
          ${m.date ? `<p class="card-date">${fmtDate(m.date)}</p>` : ""}
        </div>
      </article>`;
  }

  function render() {
    let order = 0;
    board.innerHTML = TIERS.map((tier) => {
      const items = MARTINIS
        .filter((m) => m.tier === tier.id)
        .map((m) => cardHTML(m, order++))
        .join("");
      return `
        <section class="tier-row tier-${tier.id}">
          <div class="tier-badge">
            <span class="letter">${esc(tier.label)}</span>
            <span class="blurb">${esc(tier.blurb)}</span>
          </div>
          <div class="tier-items">${items}</div>
        </section>`;
    }).join("");

    const total = MARTINIS.length;
    const places = new Set(MARTINIS.map((m) => m.location)).size;
    const m = total === 1 ? "martini" : "martinis";
    const p = places === 1 ? "bar" : "bars";
    tallyEl.textContent = `${total} ${m} judged across ${places} ${p}. The list grows.`;
  }

  render();
})();
