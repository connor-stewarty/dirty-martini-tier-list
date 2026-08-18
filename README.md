# Dirty Martini Tier List 🫒

A running, ruthlessly honest tier list of dirty martinis. Static site — just open `index.html`.

## Adding a martini

1. Drop the photo in `images/`.
2. Add an entry to the `MARTINIS` array in `data.js`:

```js
{
  id: "some-place",
  name: "Some Place",
  location: "Some Place",
  city: "City, ST",        // optional
  spirit: "Vodka",        // optional — omit unless it's not gin
  tier: "A",              // S, A, B, C, D, or F
  image: "images/some-place.jpeg",
  notes: "Your tasting note.",
  date: "2026-07-26",
}
```

That's it — the board rebuilds itself.

## Current rankings

- **S** — Chuck's Fish: "Good alcohol flavor and good olive flavor."
- **F** — Prohibition Rooftop Bar & Grill (vodka): "Obviously made with vodka. Olives dry, not juicy."
- **A** — Salt Factory Pub: "Actually really good. Full flavored. Better than Texas de Brazil."
- **A** — Texas de Brazil: "Pretty good, not super olive-ey."
- **B** — Irving Public: "It's good but you can tell it's house gin."
- **C** — RA Sushi: "Not bad but missing something, not very full. Only one olive."
- **D** — Bubby's: "Bitter aftertaste. Still G.I.N. by Dre and Snoop."
- **B** — J. Alexander's: "Not super full or olive-ey. Only escaped C tier because they gave an extra glass to refill."
