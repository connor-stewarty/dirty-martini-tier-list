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
  tier: "A",              // S, A, B, C, D, or F
  image: "images/some-place.jpeg",
  notes: "Your tasting note.",
  date: "2026-07-26",
}
```

That's it — the board rebuilds itself.

## Current rankings

- **A** — Texas de Brazil: "Pretty good, not super olive-ey."
