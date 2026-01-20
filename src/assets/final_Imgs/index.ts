// Centralized image imports/exports for easy consumption across the app
// Pick representative images from each category folder

// Slides (hero) selections
import spicesHero from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/image2-1.jpg";
import grainsHero from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Grains, Pulses & Feed2.jpg";
import fruitsHero from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits & Vegetables2.jpg";
import dryFruitsHero from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Value added Dry Fruits.jpg";

// Category thumbnails
import grainsCategory from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Grains, Pulses & Feed2.jpg";
// Fallback in case of path variations; use same as hero if above path changes in future
import spicesCategory from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/image2-1.jpg";
import fruitsCategory from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits & Vegetables2.jpg";
import dryFruitsCategory from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Value added Dry Fruits.jpg";
import oilsCategory from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Seed & Functional Ingredients/SeedFunctionalIngredients1.jpg";
import pharmaCategory from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Pharma Supplies.png";
import organicCategory from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Organic and Superfoods.jpg";
import processedCategory from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Packaged Food.png";
import concentratesCategory from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/FruitConcentrateIQF2.jpg";

// Named exports for slides
export const slideSpices = spicesHero;
export const slideGrains = grainsHero;
export const slideFruits = fruitsHero;
export const slideDryFruits = dryFruitsHero;

// Mapping for product category cards on HomePage (and elsewhere)
export const categoryImages = {
  grains: grainsCategory,
  spices: spicesCategory,
  fruits: fruitsCategory,
  dryfruits: dryFruitsCategory,
  oils: oilsCategory,
  pharma: pharmaCategory,
  organic: organicCategory,
  processed: processedCategory,
  concentrates: concentratesCategory,
};

export type CategoryKey = keyof typeof categoryImages;

// Grains, Pulses & Feed images
// rice images
import rice1 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice1.png";
import rice2 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice2.jpg";
import rice3 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice3.png";
import rice4 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice4.jpg";
import rice5 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice5.jpg";
import rice6 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Rice/Rice6.jpg";

export const riceImages = {
  rice1: rice1,
  rice2: rice2,
  rice3: rice3,
  rice4: rice4,
  rice5: rice5,
  rice6: rice6,
};

// Wheat images
import wheat1 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Wheat/Wheat1.png";
import wheat2 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Wheat/Wheat2.jpg";

export const wheatImages = {
  wheat1: wheat1,
  wheat2: wheat2,
};

// Millets images
import millets1 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Millets/Millets1.png";
import millets2 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Millets/Millets2.jpg";

export const milletsImages = {
  millets1: millets1,
  millets2: millets2,
};

// Pulses images
import pulses1 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Pulses/Pulses1.png";
import pulses2 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/Pulses/Pulses2.jpg";

export const pulsesImages = {
  pulses1: pulses1,
  pulses2: pulses2,
};

// CattleFeed images
import cattleFeed1 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/CattleFeed/CattleFeed1.png";
import cattleFeed2 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/CattleFeed/CattleFeed2.png";
import cattleFeed3 from "./1. Grains, Pulses & Feed-20260113T064600Z-3-001/1. Grains, Pulses & Feed/CattleFeed/CattleFeed3.png";

export const cattleFeedImages = {
  cattleFeed1: cattleFeed1,
  cattleFeed2: cattleFeed2,
  cattleFeed3: cattleFeed3,
};

// fruits & vegetables images
import fruit1 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Alphonso Mango/Alphonso2.png";
import fruit2 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Kesar Mango/6368520.jpg";
import fruit3 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Bananas (Cavendish)/Banana2.jpg";
import fruit4 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Green & Black Grapes/Fresh-Jumbo-Grapes1.jpg";

import fruit5 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Pomegranates/pomegranate-hd-png-pomegranate-png-clipart-1000.png";

import fruit6 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/papaya.jpg";

import fruit7 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Fruits/Oranges & Kinnow/Oranges1.jpg";

import veg1 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Vegetables/Onion/close-up-view-basket-red-onions.jpg";

import veg2 from "./2. Fruits & Vegetables-20260113T094610Z-3-001/2. Fruits & Vegetables/Vegetables/Garlic/Garlic2.png";

export const fruitsVegetablesImages = {
  fruit1: fruit1,
  fruit2: fruit2,
  fruit3: fruit3,
  fruit4: fruit4,
  fruit5: fruit5,
  fruit6: fruit6,
  fruit7: fruit7,
  veg1: veg1,
  veg2: veg2,
};

// spices & seasonings images
import spice1 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Turmeric1.png";

import spice2 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Cumin Seeds1.png";

import spice3 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Coridander Seeds1.jpg";

import spice4 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Black Pepper1.png";

import spice5 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Cardamon1.png";

import spice6 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Cloves1.png";

import spice7 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Cinnamon1.png";

import spice8 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/CardamomBlackWhole.png";

import spice9 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Star Anise.png";

import spice10 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Nutmeg.webp";

import spice11 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Whole Spices/Dry Red Chilli.jpg";

import spice12 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Ground Spices/Turmeric Ground Spice.png";

import spice13 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Ground Spices/Red Chilli Powder.png";

import spice14 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Ground Spices/Coriander Powder.png";

import spice15 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Ground Spices/Cumin Powder.png";

import spice16 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Ground Spices/Black Pepper powder.png";

import spice17 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Spice Blends/Blend2.jpg";

import spice18 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Spice Blends/Blend3.png";

import spice19 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Spice Blends/Turkish-Spice-Blend-square.jpg";

import spice20 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/GingerPowder.webp";

import spice21 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/GarlicPowder.jpg";

import spice22 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/ChiliPaste.webp";

import spice23 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/GingerGarlicPaste.jpg";

import spice24 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/DehydratedOnionPowder.webp";

import spice25 from "./3. Spices & Seasonings-20260113T094643Z-3-001/3. Spices & Seasonings/Dehydrated Powders and Pastes/CorianderPaste.jpg";

export const spicesSeasoningsImages = {
  spice1: spice1,
  spice2: spice2,
  spice3: spice3,
  spice4: spice4,
  spice5: spice5,
  spice6: spice6,
  spice7: spice7,
  spice8: spice8,
  spice9: spice9,
  spice10: spice10,
  spice11: spice11,
  spice12: spice12,
  spice13: spice13,
  spice14: spice14,
  spice15: spice15,
  spice16: spice16,
  spice17: spice17,
  spice18: spice18,
  spice19: spice19,
  spice20: spice20,
  spice21: spice21,
  spice22: spice22,
  spice23: spice23,
  spice24: spice24,
  spice25: spice25,
};

// Value-Added Dry Fruits & Nuts images
import dryFruits1 from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Flavored & Spiced Almonds/Almond1.jpg";
import dryFruits2 from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Seasoned Cashews/masalaCashewnuts.jpg";
import dryFruits3 from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Roasted Nut Mixes/RoastedNuts.jpg";
import dryFruits4 from "./4. Value-Added Dry Fruits & Nuts-20260113T064601Z-3-001/4. Value-Added Dry Fruits & Nuts/Dried Fruits/PremiumDriedFruits.webp";

export const valueAddedDryFruitsNutsImages = {
  dryFruits1: dryFruits1,
  dryFruits2: dryFruits2,
  dryFruits3: dryFruits3,
  dryFruits4: dryFruits4,
};

// Organic & Superfoods images
import organic1 from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Certified Organic Food Products/OrganicStaples.jpg";

import organic2 from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Turmeric/turmeric.jpg";

import organic3 from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Jaggery Powder/jaggery-powder-1-1.jpg";

import organic4 from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/FoxNuts/Makhana.png";

import organic5 from "./5. Organic & Superfoods-20260113T094700Z-3-001/5. Organic & Superfoods/Seed & Functional Ingredients/SeedFunctionalIngredients1.jpg";

export const organicSuperfoodsImages = {
  organic1: organic1,
  organic2: organic2,
  organic3: organic3,
  organic4: organic4,
  organic5: organic5,
};

// Processed & Packaged Foods images
import processed1 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Pasta & Noodles/noodlesPasta.jpg";

import processed2 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Biscuits & Bakery Products/biscuits.webp";

import processed3 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Jams, Marmalades & Spreads/jamspread.jpg";

import processed4 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Sauces & Condiments/saucescondiments.jpg";

import processed5 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Gourmet Pickled Vegetables & Salads/pickledvegetables.jpg";

import processed6 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Canned Fruits & Vegetables/CannedFruits.jpg";

import processed7 from "./6. Processed & Packaged Foods-20260113T094944Z-3-001/6. Processed & Packaged Foods/Canned Fruits & Vegetables/CannedVeg.jpg";

export const processedPackagedFoodsImages = {
  processed1: processed1,
  processed2: processed2,
  processed3: processed3,
  processed4: processed4,
  processed5: processed5,
  processed6: processed6,
  processed7: processed7,
};

// Concentrates & Purees images
import concentrates1 from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/Fruit Concentrates/FruitConcentrate.jpg";

import concentrates2 from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/Vegetable Purees/VegetablePuree.jpg";

import concentrates3 from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/Fruit Powders/FruitPowders.jpg";

import concentrates4 from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/IQF Products/IQF-Products.jpg";

import concentrates5 from "./7. Concentrates & Purees-20260113T094945Z-3-001/7. Concentrates & Purees/NFC/NFC.jpg";

export const concentratesPureesImages = {
  concentrates1: concentrates1,
  concentrates2: concentrates2,
  concentrates3: concentrates3,
  concentrates4: concentrates4,
  concentrates5: concentrates5,
};

// Pharmaceutical Supplies images
import pharma1 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Syringe/DisposableSterileSyringe.png";

import pharma2 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Syringe/DisposableSterileSyringeLuerLock.png";

import pharma3 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Syringe/SyringeLuerLock_LuerSlipLock.png";

import pharma4 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Examination Gloves/Gloves.png";

import pharma5 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Examination Gloves/NitrileGloves.jpg";

import pharma6 from "./8. Pharmaceutical Supplies-20260113T094946Z-3-001/8. Pharmaceutical Supplies/Needle/Needle.png";

export const pharmaceuticalSuppliesImages = {
  pharma1: pharma1,
  pharma2: pharma2,
  pharma3: pharma3,
  pharma4: pharma4,
  pharma5: pharma5,
  pharma6: pharma6,
};
