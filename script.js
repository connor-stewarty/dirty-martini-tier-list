(function () {
  const board = document.getElementById("board");
  const statsEl = document.getElementById("stats");

  function fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return "";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function cardHTML(m) {
    return `
      <article class="card">
        <img class="card-photo" src="${m.image}" alt="Dirty martini at ${m.location}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-name">${m.name}</h3>
          ${m.location ? `<p class="card-loc">${m.location}</p>` : ""}
          ${m.notes ? `<p class="card-notes">“${m.notes}”</p>` : ""}
          ${m.date ? `<p class="card-date">${fmtDate(m.date)}</p>` : ""}
        </div>
      </article>`;
  }

  function render() {
    board.innerHTML = TIERS.map((tier) => {
      const items = MARTINIS.filter((m) => m.tier === tier.id).map(cardHTML).join("");
      return `
        <section class="tier-row tier-${tier.id}">
          <div class="tier-badge">
            <span class="letter">${tier.label}</span>
            <span class="blurb">${tier.blurb}</span>
          </div>
          <div class="tier-items">${items}</div>
        </section>`;
    }).join("");

    const total = MARTINIS.length;
    const places = new Set(MARTINIS.map((m) => m.location)).size;
    statsEl.innerHTML = `
      <div class="stat"><b>${total}</b><span>Martini${total === 1 ? "" : "s"}</span></div>
      <div class="stat"><b>${places}</b><span>Place${places === 1 ? "" : "s"}</span></div>`;
  }

  render();
})();
