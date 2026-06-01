import blancLumiere from "@/assets/wines/blanc-lumiere.jpg";
import coeurTerre from "@/assets/wines/coeur-terre.jpg";
import cuveeLumineuse from "@/assets/wines/cuvee-lumineuse.jpg";
import roseDor from "@/assets/wines/rose-dor.jpg";
import ombreNoire from "@/assets/wines/ombre-noire.jpg";
import soleilDore from "@/assets/wines/soleil-dore.jpg";
import reserveDomaine from "@/assets/wines/reserve-domaine.jpg";
import etoileMatin from "@/assets/wines/etoile-matin.jpg";
import cuveeRoyale from "@/assets/wines/cuvee-royale.jpg";
import fleurSauvage from "@/assets/wines/fleur-sauvage.jpg";
import leMonarque from "@/assets/wines/le-monarque.jpg";
import pierreBlanche from "@/assets/wines/pierre-blanche.jpg";
import memoire1998 from "@/assets/wines/memoire-1998.jpg";
import terreRouge from "@/assets/wines/terre-rouge.jpg";
import nectarDor from "@/assets/wines/nectar-dor.jpg";
import ventDuSud from "@/assets/wines/vent-du-sud.jpg";
import roseeBrillante from "@/assets/wines/rosee-brillante.jpg";
import aurore from "@/assets/wines/aurore.jpg";

export type Wine = {
  slug: string;
  name: string;
  varietal: string;
  vintage: number;
  region: string;
  price: number;
  image: string;
  type: "Red" | "White" | "Rosé" | "Sparkling" | "Dessert";
  tags: string[];
  abv: number;
  tasting: { appearance: string; nose: string; palate: string; finish: string };
  pairings: string[];
  description: string;
};

export const wines: Wine[] = [
  { slug: "blanc-de-lumiere", name: "Blanc de Lumière", varietal: "Chardonnay", vintage: 2023, region: "Valle d'Or Estate", price: 42, image: blancLumiere, type: "White", tags: ["Organic", "New Arrival"], abv: 13,
    tasting: { appearance: "Pale gold with green highlights.", nose: "White flowers, green apple, toasted almond.", palate: "Medium-bodied, vibrant acidity, pear and brioche.", finish: "Clean, mineral, saline." },
    pairings: ["Grilled sea bass", "Roast chicken", "Creamy pasta", "Goat cheese"],
    description: "Our flagship Chardonnay from limestone slopes. Hand-harvested at dawn, aged ten months in French oak." },
  { slug: "coeur-de-terre", name: "Cœur de Terre", varietal: "Pinot Noir", vintage: 2021, region: "Valle d'Or Estate", price: 68, image: coeurTerre, type: "Red", tags: ["Biodynamic", "Rare"], abv: 13.5,
    tasting: { appearance: "Deep ruby with garnet edges.", nose: "Raspberry, black cherry, forest floor, rose petal.", palate: "Silken tannins, red fruit, sweet spice, minerality.", finish: "Long, ethereal, poised." },
    pairings: ["Duck breast", "Wild mushroom risotto", "Aged comté", "Truffle"],
    description: "A serious Pinot Noir from our oldest parcel, planted in 1962. Whole-cluster, native yeasts, 14 months in seasoned oak." },
  { slug: "cuvee-lumineuse", name: "Cuvée Lumineuse", varietal: "Méthode Traditionnelle", vintage: 2020, region: "Reserve Cellars", price: 95, image: cuveeLumineuse, type: "Sparkling", tags: ["Best Seller", "Reserve"], abv: 12.5,
    tasting: { appearance: "Pale straw, fine persistent mousse.", nose: "Brioche, lemon zest, white peach, chalk.", palate: "Crisp, creamy, elegant length.", finish: "Refined, saline, lingering." },
    pairings: ["Oysters", "Caviar", "Risotto", "Hard cheeses"],
    description: "Traditional-method sparkling aged 36 months on lees in our chalk cellars. Disgorged by hand." },
  { slug: "rose-dor", name: "Rosé d'Or", varietal: "Grenache · Cinsault", vintage: 2023, region: "Provence", price: 38, image: roseDor, type: "Rosé", tags: ["Organic", "New Arrival"], abv: 12.5,
    tasting: { appearance: "Pale copper-pink, luminous.", nose: "Wild strawberry, pink grapefruit, garrigue.", palate: "Bone-dry, mineral, saline.", finish: "Crisp, refreshing, elegant." },
    pairings: ["Bouillabaisse", "Niçoise salad", "Grilled vegetables", "Chèvre"],
    description: "A Provençal rosé crafted in the classic style — whole-cluster pressed, gentle and pale." },
  { slug: "ombre-noire", name: "Ombre Noire", varietal: "Syrah", vintage: 2020, region: "Northern Hillsides", price: 84, image: ombreNoire, type: "Red", tags: ["Rare", "Cellar Worthy"], abv: 14,
    tasting: { appearance: "Inky violet, opaque core.", nose: "Blackberry, smoked meat, pepper, violet.", palate: "Full-bodied, graphite tannins, savory.", finish: "Powerful, structured, ageworthy." },
    pairings: ["Roast lamb", "Game", "Short rib", "Hard cheeses"],
    description: "From our steepest north-facing terraces. Aged 18 months in French oak, 30% new." },
  { slug: "soleil-dore", name: "Soleil Doré", varietal: "Viognier", vintage: 2022, region: "Valle d'Or Estate", price: 48, image: soleilDore, type: "White", tags: ["Organic"], abv: 13.5,
    tasting: { appearance: "Bright gold, shimmering.", nose: "Honeysuckle, apricot, orange blossom.", palate: "Round and generous, lifted acidity.", finish: "Floral, lingering, quietly opulent." },
    pairings: ["Thai curry", "Roast pork", "Aged comté", "Tarte tatin"],
    description: "Late-harvested Viognier fermented partly in concrete egg and partly in old oak." },
  { slug: "reserve-du-domaine", name: "Réserve du Domaine", varietal: "Merlot · Cabernet Franc", vintage: 2019, region: "Vieilles Vignes", price: 78, image: reserveDomaine, type: "Red", tags: ["Reserve", "Best Seller"], abv: 14,
    tasting: { appearance: "Deep ruby with garnet rim.", nose: "Black plum, cedar, vanilla, tobacco.", palate: "Velvet tannins, ripe black fruit, sweet oak.", finish: "Long, warm, polished." },
    pairings: ["Beef bourguignon", "Aged cheese", "Wild boar"],
    description: "Our most decorated blend, drawn from 60-year-old vines and rested in barrel for two winters." },
  { slug: "etoile-du-matin", name: "Étoile du Matin", varietal: "Chardonnay", vintage: 2022, region: "Hauts Coteaux", price: 52, image: etoileMatin, type: "White", tags: ["Single Vineyard"], abv: 13,
    tasting: { appearance: "Pale straw with crystalline clarity.", nose: "Lemon curd, white flower, hazelnut.", palate: "Taut, mineral, focused stone fruit.", finish: "Vibrant chalky finish." },
    pairings: ["Scallops", "Sole meunière", "Brie de Meaux"],
    description: "A single-vineyard Chardonnay grown on pure limestone, fermented in old foudre." },
  { slug: "cuvee-royale", name: "Cuvée Royale", varietal: "Pinot Noir · Chardonnay", vintage: 2018, region: "Reserve Cellars", price: 130, image: cuveeRoyale, type: "Sparkling", tags: ["Vintage", "Reserve"], abv: 12,
    tasting: { appearance: "Deep gold, fine persistent bead.", nose: "Toasted brioche, candied lemon, hazelnut.", palate: "Layered, complex, creamy mousse.", finish: "Powerful and refined, kilometre-long." },
    pairings: ["Lobster", "Foie gras", "Truffle risotto"],
    description: "Our prestige cuvée — 60 months on lees, dosed by hand at 4 g/L." },
  { slug: "fleur-sauvage", name: "Fleur Sauvage", varietal: "Cinsault · Tibouren", vintage: 2023, region: "Provence", price: 34, image: fleurSauvage, type: "Rosé", tags: ["Organic", "Summer"], abv: 12,
    tasting: { appearance: "Petal pink with floral hue.", nose: "Rose, wild strawberry, peach skin.", palate: "Delicate, dry, gently fruited.", finish: "Lifted and breezy." },
    pairings: ["Tapenade", "Grilled prawns", "Watermelon salad"],
    description: "A wild-fermented rosé made for long afternoons under the plane trees." },
  { slug: "le-monarque", name: "Le Monarque", varietal: "Cabernet Sauvignon", vintage: 2018, region: "Bordeaux Estate", price: 110, image: leMonarque, type: "Red", tags: ["Rare", "Cellar Worthy"], abv: 14.5,
    tasting: { appearance: "Inky black with violet rim.", nose: "Cassis, graphite, cedar, dark chocolate.", palate: "Powerful, structured, fine-grained tannin.", finish: "Brooding, immense, decades ahead." },
    pairings: ["Côte de boeuf", "Aged Gruyère", "Venison"],
    description: "A serious Bordeaux from our Saint-Émilion satellite parcel. 24 months in 50% new oak." },
  { slug: "pierre-blanche", name: "Pierre Blanche", varietal: "Sauvignon Blanc", vintage: 2023, region: "Loire Valley", price: 36, image: pierreBlanche, type: "White", tags: ["Organic", "New Arrival"], abv: 12.5,
    tasting: { appearance: "Pale silver-green.", nose: "Gooseberry, blackcurrant leaf, flint.", palate: "Crisp, zesty, racy minerality.", finish: "Cool, stony, salivating." },
    pairings: ["Goat cheese", "Asparagus", "Oysters"],
    description: "Sancerre-style Sauvignon from a flint-rich parcel. Fermented entirely in steel." },
  { slug: "memoire-1998", name: "Mémoire 1998", varietal: "Merlot · Cabernet", vintage: 1998, region: "Library Reserve", price: 320, image: memoire1998, type: "Red", tags: ["Library", "Allocated"], abv: 13.5,
    tasting: { appearance: "Brick red with brown edges.", nose: "Tertiary leather, forest floor, dried fig.", palate: "Soft, sweet, savory, deeply integrated.", finish: "Whispered, eternal." },
    pairings: ["Truffle pasta", "Roast pheasant", "Aged Comté"],
    description: "A library bottle from our cellar archive, opened only for those who ask." },
  { slug: "terre-rouge", name: "Terre Rouge", varietal: "Grenache", vintage: 2021, region: "Southern Rhône", price: 56, image: terreRouge, type: "Red", tags: ["Biodynamic"], abv: 14,
    tasting: { appearance: "Garnet red with crimson core.", nose: "Wild herbs, kirsch, white pepper.", palate: "Generous, spicy, sun-soaked.", finish: "Warm and embracing." },
    pairings: ["Lamb tagine", "Ratatouille", "Aged Manchego"],
    description: "Old-vine Grenache from terracotta soils, fermented whole-bunch in concrete." },
  { slug: "nectar-dor", name: "Nectar d'Or", varietal: "Sémillon · Sauvignon", vintage: 2020, region: "Sauternes", price: 72, image: nectarDor, type: "Dessert", tags: ["Rare", "Botrytis"], abv: 13.5,
    tasting: { appearance: "Liquid amber.", nose: "Honey, apricot jam, ginger, beeswax.", palate: "Unctuous, complex, lifted by acidity.", finish: "Endless, glowing, golden." },
    pairings: ["Foie gras", "Roquefort", "Fruit tarte"],
    description: "Botrytised dessert wine from a single hand-selected pass through the vines. 375 mL." },
  { slug: "vent-du-sud", name: "Vent du Sud", varietal: "Orange Wine · Marsanne", vintage: 2022, region: "Languedoc", price: 44, image: ventDuSud, type: "White", tags: ["Natural", "Skin Contact"], abv: 12.5,
    tasting: { appearance: "Burnished copper.", nose: "Dried apricot, chamomile, orange peel.", palate: "Textured, gently tannic, herbal.", finish: "Bright, spicy, alive." },
    pairings: ["Tagines", "Aged cheeses", "Korean BBQ"],
    description: "A skin-contact natural wine, ten days on skins, zero additions." },
  { slug: "rosee-brillante", name: "Rosée Brillante", varietal: "Pinot Noir Rosé", vintage: 2022, region: "Reserve Cellars", price: 65, image: roseeBrillante, type: "Sparkling", tags: ["New Arrival"], abv: 12,
    tasting: { appearance: "Pale salmon, fine persistent bubbles.", nose: "Wild strawberry, brioche, rose.", palate: "Crisp, lifted, gently red-fruited.", finish: "Bright, mineral, refined." },
    pairings: ["Smoked salmon", "Sushi", "Strawberry tarte"],
    description: "A traditional-method rosé from Pinot Noir, aged 24 months on lees." },
  { slug: "aurore", name: "Aurore", varietal: "Riesling", vintage: 2022, region: "Alsace", price: 46, image: aurore, type: "White", tags: ["Single Vineyard"], abv: 12,
    tasting: { appearance: "Pale gold with green flash.", nose: "Lime, white peach, wet stone, petrol hint.", palate: "Dry, laser-focused, mineral.", finish: "Long, cool, electric." },
    pairings: ["Choucroute", "Thai curry", "Sushi"],
    description: "Dry Alsatian Riesling from a granite parcel. Slow ferment, long lees ageing." },
];

export const findWine = (slug: string) => wines.find((w) => w.slug === slug);
