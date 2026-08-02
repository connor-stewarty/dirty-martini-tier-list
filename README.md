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
  tier: "A",              // S, A, B, C, D, or F
  image: "images/some-place.jpeg",
  notes: "Your tasting note.",
  date: "2026-07-26",
}
```

That's it — the board rebuilds itself.

## Current rankings

- **A** — Salt Factory Pub: "Actually really good. Full flavored. Better than Texas de Brazil."
- **A** — Texas de Brazil: "Pretty good, not super olive-ey."
- **B** — J. Alexander's: "Not super full or olive-ey. Only escaped C tier because they gave an extra glass to refill."
