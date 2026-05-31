import blancLumiere from "@/assets/wines/blanc-lumiere.jpg";
import coeurTerre from "@/assets/wines/coeur-terre.jpg";
import cuveeLumineuse from "@/assets/wines/cuvee-lumineuse.jpg";
import roseDor from "@/assets/wines/rose-dor.jpg";
import ombreNoire from "@/assets/wines/ombre-noire.jpg";
import soleilDore from "@/assets/wines/soleil-dore.jpg";

export type Wine = {
  slug: string;
  name: string;
  varietal: string;
  vintage: number;
  region: string;
  price: number;
  image: string;
  type: "Red" | "White" | "Rosé" | "Sparkling";
  tags: string[];
  abv: number;
  tasting: {
    appearance: string;
    nose: string;
    palate: string;
    finish: string;
  };
  pairings: string[];
  description: string;
};

export const wines: Wine[] = [
  {
    slug: "blanc-de-lumiere",
    name: "Blanc de Lumière",
    varietal: "Chardonnay",
    vintage: 2023,
    region: "Valle d'Or Estate",
    price: 42,
    image: blancLumiere,
    type: "White",
    tags: ["Organic", "New Arrival"],
    abv: 13,
    tasting: {
      appearance: "Pale gold with delicate green highlights and brilliant clarity.",
      nose: "Lifted aromas of white flowers, green apple, and fresh citrus. A gentle touch of toasted almond and vanilla from careful oak aging.",
      palate: "Medium-bodied and finely balanced with vibrant acidity. Flavors of ripe pear, honeydew, and warm brioche.",
      finish: "Clean and persistent with a mineral, saline quality that invites another sip.",
    },
    pairings: ["Grilled sea bass", "Roast chicken", "Creamy pasta", "Soft goat cheese"],
    description:
      "Our flagship Chardonnay from the limestone-rich slopes of the Valle d'Or estate. Hand-harvested at dawn and aged ten months in French oak.",
  },
  {
    slug: "coeur-de-terre",
    name: "Cœur de Terre",
    varietal: "Pinot Noir",
    vintage: 2021,
    region: "Valle d'Or Estate",
    price: 68,
    image: coeurTerre,
    type: "Red",
    tags: ["Biodynamic", "Rare"],
    abv: 13.5,
    tasting: {
      appearance: "Deep ruby with garnet edges.",
      nose: "Wild raspberry, black cherry, forest floor, with whispers of rose petal and clove.",
      palate: "Silken tannins frame layers of red fruit, sweet spice, and earthy minerality.",
      finish: "Long, ethereal, and beautifully poised.",
    },
    pairings: ["Duck breast", "Wild mushroom risotto", "Aged comté", "Truffle"],
    description:
      "A serious Pinot Noir from our oldest parcel, planted in 1962. Whole-cluster fermentation, native yeasts, 14 months in seasoned oak.",
  },
  {
    slug: "cuvee-lumineuse",
    name: "Cuvée Lumineuse",
    varietal: "Champagne Method",
    vintage: 2020,
    region: "Reserve Cellars",
    price: 95,
    image: cuveeLumineuse,
    type: "Sparkling",
    tags: ["Best Seller", "Reserve"],
    abv: 12.5,
    tasting: {
      appearance: "Pale straw with a fine, persistent mousse.",
      nose: "Brioche, lemon zest, white peach, and a chalky minerality.",
      palate: "Crisp and creamy with elegant length and a precise core of acidity.",
      finish: "Refined, saline, and lingering.",
    },
    pairings: ["Oysters", "Caviar", "Risotto", "Aged hard cheeses"],
    description:
      "A traditional-method sparkling wine aged 36 months on the lees in our chalk cellars. Disgorged by hand.",
  },
  {
    slug: "rose-dor",
    name: "Rosé d'Or",
    varietal: "Grenache · Cinsault",
    vintage: 2023,
    region: "Provence",
    price: 38,
    image: roseDor,
    type: "Rosé",
    tags: ["Organic", "New Arrival"],
    abv: 12.5,
    tasting: {
      appearance: "Pale copper-pink, luminous in the glass.",
      nose: "Wild strawberry, pink grapefruit, and a whisper of garrigue.",
      palate: "Bone-dry, mineral, with a saline thread that calls for the sea.",
      finish: "Crisp and refreshing, lingering with elegance.",
    },
    pairings: ["Bouillabaisse", "Niçoise salad", "Grilled vegetables", "Fresh chèvre"],
    description:
      "A Provençal rosé crafted in the classic style — whole-cluster pressed, gentle and pale.",
  },
  {
    slug: "ombre-noire",
    name: "Ombre Noire",
    varietal: "Syrah",
    vintage: 2020,
    region: "Northern Hillsides",
    price: 84,
    image: ombreNoire,
    type: "Red",
    tags: ["Rare", "Cellar Worthy"],
    abv: 14,
    tasting: {
      appearance: "Inky violet with a dense, opaque core.",
      nose: "Blackberry, smoked meat, crushed black pepper, and violet.",
      palate: "Full-bodied with firm, graphite-like tannins and a savory undercurrent.",
      finish: "Powerful, structured, and built for the cellar.",
    },
    pairings: ["Roast lamb", "Game", "Beef short rib", "Aged hard cheeses"],
    description:
      "From our highest, steepest north-facing terraces. Aged 18 months in French oak, 30% new.",
  },
  {
    slug: "soleil-dore",
    name: "Soleil Doré",
    varietal: "Viognier",
    vintage: 2022,
    region: "Valle d'Or Estate",
    price: 48,
    image: soleilDore,
    type: "White",
    tags: ["Organic"],
    abv: 13.5,
    tasting: {
      appearance: "Bright gold with shimmering highlights.",
      nose: "Honeysuckle, apricot, and orange blossom.",
      palate: "Round and generous yet lifted by bright acidity. Stone fruit, ginger, and a touch of beeswax.",
      finish: "Floral, lingering, and quietly opulent.",
    },
    pairings: ["Thai curry", "Roast pork", "Aged comté", "Tarte tatin"],
    description:
      "Late-harvested Viognier fermented partly in concrete egg and partly in old oak.",
  },
];

export const findWine = (slug: string) => wines.find((w) => w.slug === slug);
