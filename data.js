// Dirty Martini Tier List — data
// To add a new martini, drop a photo in /images and add an object below.
// tier: one of "S", "A", "B", "C", "D", "F"
// city: "City, ST" (optional) — shown under the bar name
const MARTINIS = [
  {
    id: "chucks-fish",
    name: "Chuck's Fish",
    location: "Chuck's Fish",
    city: "Madison, AL",
    tier: "S",
    image: "images/chucks-fish.jpeg",
    notes: "Good alcohol flavor and good olive flavor.",
    date: "2026-08-07",
  },
  {
    id: "ra-sushi",
    name: "RA Sushi",
    location: "RA Sushi",
    city: "New York, NY",
    tier: "C",
    image: "images/ra-sushi.jpeg",
    notes: "Not bad but missing something, not very full. Only one olive.",
    date: "2026-08-11",
  },
  {
    id: "irving-public",
    name: "Irving Public",
    location: "Irving Public",
    city: "Jersey City, NJ",
    tier: "B",
    image: "images/irving-public.jpeg",
    notes: "It's good but you can tell it's house gin.",
    date: "2026-08-08",
  },
  {
    id: "j-alexanders",
    name: "J. Alexander's",
    location: "J. Alexander's",
    city: "Huntsville, AL",
    tier: "B",
    image: "images/j-alexanders.jpeg",
    notes: "Not super full or olive-ey. Only escaped C tier because they gave an extra glass to refill.",
    date: "2026-08-02",
  },
  {
    id: "salt-factory-pub",
    name: "Salt Factory Pub",
    location: "Salt Factory Pub",
    city: "Huntsville, AL",
    tier: "A",
    image: "images/salt-factory-pub.jpeg",
    notes: "Actually really good. Full flavored. Better than Texas de Brazil.",
    date: "2026-07-28",
  },
  {
    id: "texas-de-brazil",
    name: "Texas de Brazil",
    location: "Texas de Brazil",
    city: "Huntsville, AL",
    tier: "A",
    image: "images/texas-de-brazil.jpeg",
    notes: "Pretty good, not super olive-ey.",
    date: "2026-07-26",
  },
];

const TIERS = [
  { id: "S", label: "S", blurb: "Dream about it" },
  { id: "A", label: "A", blurb: "Order it again" },
  { id: "B", label: "B", blurb: "No complaints" },
  { id: "C", label: "C", blurb: "It's a martini" },
  { id: "D", label: "D", blurb: "Let down" },
  { id: "F", label: "F", blurb: "Pour it out" },
];
