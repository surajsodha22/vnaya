import {
  riceImages,
  wheatImages,
  milletsImages,
  pulsesImages,
  cattleFeedImages,
  fruitsVegetablesImages,
  spicesSeasoningsImages,
  valueAddedDryFruitsNutsImages,
  organicSuperfoodsImages,
  processedPackagedFoodsImages,
  concentratesPureesImages,
  pharmaceuticalSuppliesImages,
} from "../final_Imgs";
export const catalog = {
  categories: [
    {
      id: "grains",
      title: "Grains, Pulses & Feed",
      heroImage: "",
      overview:
        "Premium Indian grains, pulses, millets, and cattle feed, carefully sourced, precision-graded, and processed to meet international export standards.",
      intro:
        "At Vyana Global, every grain reflects India’s agricultural heritage and our commitment to quality. We supply carefully sourced, export-ready staples processed in modern facilities and packaged to meet international market requirements.",
      sections: [
        {
          subtitle: "Rice",
          items: [
            {
              title: "Basmati Rice",
              image: riceImages.rice4,
              description:
                "The crown jewel of Indian rice, Basmati features slender grains that elongate perfectly when cooked, releasing a natural aroma reminiscent of the Himalayan foothills. Aged for enhanced fragrance and texture, it is preferred by gourmet restaurants, luxury retail brands, and discerning importers.",
              highlights: [
                "Hand-Selected Lots",
                "Heritage Cultivars",
                "Naturally Aromatic",
              ],
              specs: {
                brokenPercentage: ["≤1%", "2%", "5% (as per buyer spec)"],
                packaging: [
                  "1–5 kg Retail",
                  "10 kg",
                  "25 kg",
                  "50 kg Bulk",
                  "PP/Jute/Private Label",
                ],
              },
            },
            {
              title: "Non-Basmati Rice",
              image: riceImages.rice6,
              description:
                "Premium-quality non-basmati rice, sourced and processed to deliver consistent purity and performance. Cleaned, graded, and packed for reliability in retail, wholesale, and food service applications. Supplied in bulk or retail-ready packaging to meet the requirements of importers, distributors, and institutional buyers worldwide.",
              varieties: ["IR64", "Sona Masuri", "Swarna", "Parboiled"],
              highlights: ["Medium to long grains", "Polished and sorted"],
              specs: {
                brokenPercentage: ["5–25% (as per buyer request)"],
                packaging: [
                  "1–5 kg Retail",
                  "10–50 kg Bulk",
                  "PP/Jute/Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Wheat (Milling & Durum)",
          items: [
            {
              title: "Milling Wheat & Durum",
              image: wheatImages.wheat1,
              description:
                "Crafted for culinary performance, our wheat selection delivers consistent protein quality, ideal for milling, baking, confectionery, and industrial processing. Every shipment meets international cleaning, sorting, and phytosanitary standards.",
              specs: {
                packaging: [
                  "1–5 kg Retail",
                  "10–50 kg Bulk",
                  "PP/Jute/Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Millets – Superfood Grains",
          items: [
            {
              title: "Indian Millets",
              image: milletsImages.millets1,
              description:
                "Premium Indian millets, carefully sourced and processed to deliver consistent quality and nutrition. Gluten-free and nutrient-rich, these ancient grains are ideal for wellness brands, organic food lines, and industrial food applications.",
              varieties: [
                "Pearl (Bajra)",
                "Finger (Ragi)",
                "Foxtail",
                "Kodo",
                "Little Millet",
              ],
              specs: {
                packaging: [
                  "500 g – 2 kg Retail",
                  "10–50 kg Bulk",
                  "PP/Jute/Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Pulses (Lentils, Chickpeas & Others)",
          items: [
            {
              title: "Indian Pulses",
              image: pulsesImages.pulses1,
              description:
                "Premium Indian pulses, meticulously cleaned, size-graded, and inspected to deliver impeccable consistency. Ideal for retail, wholesale, and industrial buyers who demand high-quality legumes for food production or packaging.",
              range: ["Chickpeas", "Toor", "Moong", "Masoor", "Urad", "Rajma"],
              specs: {
                packaging: [
                  "500 g – 5 kg Retail",
                  "10–50 kg Bulk",
                  "PP/Jute/Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Cattle Feed",
          items: [
            {
              title: "Feed Ingredients",
              image: cattleFeedImages.cattleFeed3,
              description:
                "Premium-grade cattle feed ingredients, formulated to support optimal dairy and livestock performance. Carefully sourced, tested, and processed to ensure consistent quality, nutrition, and compliance with international feed standards. Formulated with balanced nutrition, rigorously tested, and suitable for responsible, long-term supply programs.",
              productScope: [
                "Maize Bran",
                "Pellet Feed",
                "Rice Bran",
                "Cottonseed Cake",
                "Soybean Meal",
              ],
              specs: {
                protein: "10–46% (As Per Buyer Request)",
                packaging: [
                  "5–25 kg Bags (Retail)",
                  "25–50 kg Bags (Bulk)",
                  "Custom Sizes Available",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "fruits",
      title: "Fruits & Vegetables",
      heroImage: "",
      overview:
        "Premium Indian fresh fruits and vegetables, carefully sourced, sorted, and exported under stringent quality and cold-chain standards.",
      intro:
        "At Vyana Global, we bring the best of India’s orchards and farms to international markets. Our fruits and vegetables are harvested at peak maturity, sorted and graded for quality, and packed under strict cold-chain conditions to preserve freshness, texture, nutritional value, and shelf life during transit.",
      notes:
        "Availability subject to seasonal harvest cycles and destination-country import regulations.",
      sections: [
        {
          subtitle: "Mangoes",
          items: [
            {
              title: "Alphonso Mango (GI Certified)",
              image: fruitsVegetablesImages.fruit1,
              description:
                "Known as the “King of Mangoes,” Alphonso offers saffron-colored flesh, a buttery texture, and a naturally sweet aroma. Sourced from GI-certified orchards, our Alphonso mangoes guarantee authenticity, superior quality, and consistency for export markets.",
              specs: {
                packaging: [
                  "2 kg",
                  "4 kg",
                  "10 kg boxes",
                  "Custom packaging available",
                ],
              },
            },
            {
              title: "Kesar Mango",
              image: fruitsVegetablesImages.fruit2,
              description:
                "Premium Kesar mangoes with golden, succulent flesh and naturally sweet flavor. Ideal for retail, HORECA, and pulp-processing applications, our mangoes are carefully sourced to ensure consistent quality and export readiness.",
              otherVarieties: ["Totapuri", "Dasheri", "Langra"],
              specs: {
                packaging: [
                  "2 kg",
                  "4 kg",
                  "5 kg",
                  "Corrugated ventilated boxes",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Bananas & Grapes",
          items: [
            {
              title: "Bananas",
              image: fruitsVegetablesImages.fruit3,
              description:
                "Premium Cavendish bananas, carefully sorted for uniform size and free from bruising. Ethically sourced from trusted farms and packed under strict cold-chain conditions to preserve freshness, texture, and shelf life. Ideal for supermarkets, wholesale distributors, and re-export markets.",
              varieties: ["Cavendish", "Nendran", "Red Banana", "Yelakki"],
              specs: {
                packaging: [
                  "13–18 kg ventilated cartons",
                  "Reefer handling",
                  "Custom labeling available",
                ],
              },
            },
            {
              title: "Green & Black Grapes",
              image: fruitsVegetablesImages.fruit4,
              description:
                "Crisp, seedless export-grade grapes with calibrated sizing, cold-chain packed to preserve freshness till destination.",
              varieties: [
                "Thompson Seedless",
                "Sonaka",
                "Flame Seedless",
                "Sharad Seedless",
              ],
              specs: {
                packaging: [
                  "500 g punnets",
                  "3–5 kg cartons",
                  "Private label options",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Pomegranate, Papaya, Citrus",
          items: [
            {
              title: "Pomegranates",
              image: fruitsVegetablesImages.fruit5,
              description:
                "Deep red arils, high juice content, and international-grade packing. Ideal for retail, food processing, and juice production, ensuring freshness and consistency throughout transit.",
              specs: {
                packaging: [
                  "5 kg boxes",
                  "Custom labeling & private-label options",
                ],
              },
            },
            {
              title: "Papaya (Solo & Red Lady)",
              image: fruitsVegetablesImages.fruit6,
              description:
                "Premium tropical papayas, carefully handpicked at optimal export maturity to ensure peak flavor, texture, and nutritional quality. Rich in natural enzymes, ideal for retail, wholesale, and food processing applications.",
              specs: {
                packaging: ["10 kg export cartons", "Foam netting protection"],
              },
            },
            {
              title: "Oranges & Kinnow",
              image: fruitsVegetablesImages.fruit7,
              description:
                "Premium oranges and Kinnow, handpicked for vibrant flavor, juiciness, and consistent quality. Carefully sorted and packed to preserve freshness, making them ideal for supermarkets, wholesale distributors, and juice production.",
              varieties: [
                "Nagpur Orange",
                "Kinnow Mandarin",
                "Mosambi (Sweet Lime)",
              ],
              specs: {
                packaging: ["10 kg / 15 kg corrugated boxes"],
              },
            },
          ],
        },
        {
          subtitle: "Onions & Garlic",
          items: [
            {
              title: "Onions (Red & Pink)",
              image: fruitsVegetablesImages.veg1,
              description:
                "Premium Indian red and pink onions, known for their firm layers, strong pungency, and extended shelf life. Carefully cured, graded, and packed under moisture-controlled conditions to ensure stability and quality during long-distance export.",
              specs: {
                packaging: [
                  "5–50 kg mesh bags",
                  "Fumigation & phytosanitary support available",
                ],
              },
            },
            {
              title: "Garlic",
              image: fruitsVegetablesImages.veg2,
              description:
                "Premium Indian garlic bulbs with strong aroma, high oil content, and bold flavor. Carefully cured, graded, and packed to ensure long shelf life and consistent quality. Available in whole or peeled form.",
              sizes: ["40–45 mm", "45–55 mm", "55 mm+"],
              specs: {
                packaging: [
                  "5 kg / 10 kg / 25 kg mesh bags",
                  "Smaller retail packs & peeled garlic available",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "spices",
      title: "Spices & Seasonings",
      heroImage: "",
      overview:
        "Authentic Indian spices and seasonings, sourced at origin and processed to deliver consistent aroma, color, and flavor for global markets.",
      intro:
        "At Vyana Global, we bring the richness of India’s spice-growing regions to international markets. Our spices and seasonings are sourced from trusted partners and processed in modern facilities to preserve their natural potency, aroma, and purity. Export-ready and compliant with international quality requirements, our offerings are supplied with flexible packaging solutions for global buyers.",
      sections: [
        {
          subtitle: "Whole Spices",
          items: [
            {
              title: "Turmeric Fingers (Salem & Alleppey)",
              image: spicesSeasoningsImages.spice1,
              description:
                "High-curcumin turmeric (3–5%) with deep golden pigment and warm, earthy aroma. Carefully dried and processed to retain natural potency, making it ideal for food processors, spice brands, and seasoning manufacturers.",
              grades: ["Finger", "Bulb", "Salem (Erode)"],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Cumin Seeds (Jeera)",
              image: spicesSeasoningsImages.spice2,
              description:
                "Premium cumin seeds with strong aroma, machine-cleaned and graded for uniform grain size and consistent quality. Widely used by seasoning brands, spice blenders, and retail packers.",
              grades: ["Europe Grade", "Machine Clean", "Sortex Clean"],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Coriander Seeds",
              image: spicesSeasoningsImages.spice3,
              description:
                "Light green seeds with citrusy aroma; high volatile oil content ideal for milling and extraction.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Black Pepper (Whole)",
              image: spicesSeasoningsImages.spice4,
              description:
                "Bold, well-matured peppercorns with sharp heat and high oil content. ASTA-compliant grades suitable for HORECA, gourmet seasoning blends, and industrial spice processing.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Green Cardamom",
              image: spicesSeasoningsImages.spice5,
              description:
                "Green cardamom from Kerala is prized for its strong aroma, sweet flavor, and high essential oil content. Ideal for culinary, confectionery, and beverage use.",
              grades: ["AAA", "AA", "A"],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Cloves",
              image: spicesSeasoningsImages.spice6,
              description:
                "High-oil-content cloves with warm, aromatic spice notes. Ideal for flavoring beverages, confectionery, and cooking.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Cinnamon (Whole)",
              image: spicesSeasoningsImages.spice7,
              description:
                "Indian cinnamon from Kerala and Tamil Nadu with sweet fragrance and uniform quills. Suitable for retail, industrial, and bakery use.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Cardamom (Black – Whole)",
              image: spicesSeasoningsImages.spice8,
              description:
                "Black cardamom with smoky aroma, used in savory dishes, stews, and industrial spice blends.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Star Anise (Whole)",
              image: spicesSeasoningsImages.spice9,
              description:
                "Star-shaped spice with sweet licorice aroma, used in confectionery, beverages, and flavoring blends.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Nutmeg (Whole)",
              image: spicesSeasoningsImages.spice10,
              description:
                "Indian nutmeg known for warm, sweet flavor, used in bakery, beverages, and spice blends.",
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Dry Red Chillies (Whole)",
              image: spicesSeasoningsImages.spice11,
              description:
                "Premium whole dry red chillies with vibrant color, strong pungency, and consistent heat levels. Carefully sun-dried, cleaned, and graded to meet international export standards. Suitable for spice processors, seasoning manufacturers, and wholesale buyers.",
              varieties: ["Guntur", "Byadgi", "Teja", "Kashmiri"],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Ground Spices",
          items: [
            {
              title: "Turmeric Powder",
              image: spicesSeasoningsImages.spice12,
              description:
                "Vibrant yellow turmeric powder with high curcumin content. Sourced from Karnataka and Andhra Pradesh, used in food, beverages, and health supplements.",
              curcumin: "2–5%",
              grades: ["Export Grade A", "Food Grade", "Organic"],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Red Chilli Powder",
              image: spicesSeasoningsImages.spice13,
              description:
                "Indian red chili powder with bright red color, pungency, and aroma. Sourced from Andhra Pradesh, Telangana, and Maharashtra.",
              varieties: ["Guntur", "Byadgi"],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Coriander Powder",
              image: spicesSeasoningsImages.spice14,
              description:
                "Mildly aromatic coriander powder used in spice blends, curries, and sauces. Sourced from Rajasthan and Madhya Pradesh.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Cumin Powder",
              image: spicesSeasoningsImages.spice15,
              description:
                "Earthy, aromatic cumin powder, sourced from Gujarat and Rajasthan. Used in retail and industrial food production.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Black Pepper Powder",
              image: spicesSeasoningsImages.spice16,
              description:
                "Ground black pepper with uniform pungency and aroma, processed from select Indian black peppercorns.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Spice Blends",
          items: [
            {
              title: "Classic Indian Masalas",
              image: spicesSeasoningsImages.spice17,
              description:
                "Premium blend of hand-selected spices, balanced for authentic Indian flavor. Ideal for retail packaging and industrial food preparation",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label Available",
                ],
              },
            },
            {
              title: "Protein & Dish-Specific Blends",
              image: spicesSeasoningsImages.spice18,
              description:
                "Multi-purpose spice blend for mixed dishes, suitable for retail or bulk supply",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label Available",
                ],
              },
            },

            {
              title: "International & Foodservice Seasonings",
              image: spicesSeasoningsImages.spice19,
              description:
                "Smoky, balanced spice mix for grilling, roasting, and industrial food applications",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Dehydrated Powders & Pastes",
          items: [
            {
              title: "Ginger Powder",
              image: spicesSeasoningsImages.spice20,
              description:
                "Premium dehydrated ginger powder, aromatic, pungent, used in beverages, baked goods, and spice mixes.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Garlic Powder",
              image: spicesSeasoningsImages.spice21,
              description:
                "Fine, dehydrated garlic powder with strong aroma and uniform texture, sourced from top garlic-growing regions of India.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Chili Paste",
              image: spicesSeasoningsImages.spice22,
              description:
                "Ready-to-use chili paste made from fresh red chilies, salt, and edible oil. Maintains strong color, heat, and flavor for cooking.",
              specs: {
                packaging: [
                  "250 g–1 kg jars",
                  "5–10 kg industrial tubs",
                  "Private Label",
                ],
              },
            },
            {
              title: "Ginger-Garlic Paste",
              image: spicesSeasoningsImages.spice23,
              description:
                "Freshly blended ginger and garlic paste with uniform consistency, ideal for cooking, marinades, and food processing.",
              specs: {
                packaging: ["250 g–1 kg jars", "5–10 kg tubs", "Private Label"],
              },
            },
            {
              title: "Dehydrated Onion Powder",
              image: spicesSeasoningsImages.spice24,
              description:
                "Dehydrated onion powder with natural aroma and flavor. Perfect for seasoning, bakery, sauces, and snack production.",
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Coriander Paste",
              image: spicesSeasoningsImages.spice25,
              description:
                "Paste made from fresh coriander leaves, blended for consistent flavor. Ideal for sauces, ready-to-eat meals, and culinary use.",
              specs: {
                packaging: ["250 g–1 kg jars", "5–10 kg tubs", "Private Label"],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "dryfruits",
      title: "Value-Added Dry Fruits & Nuts",
      heroImage: "",
      overview:
        "Premium dry fruits and nuts, expertly processed and seasoned to deliver consistent taste, texture, and shelf stability for global snack and retail markets.",
      intro:
        "At Vyana Global, we transform carefully selected nuts and dried fruits into high-value snack and ingredient solutions for international buyers. Sourced from trusted origins and processed in controlled facilities, our value-added range is roasted, seasoned, and packed to preserve freshness, crunch, and flavour. Designed for export, these products cater to gourmet retail, food service, airline catering, and private-label snack brands across global markets.",
      sections: [
        {
          subtitle: "Flavored & Spiced Almonds",
          items: [
            {
              title: "Seasoned Almonds",
              image: valueAddedDryFruitsNutsImages.dryFruits1,
              description:
                "Carefully selected premium almonds, roasted to perfection and infused with bold global flavours. Designed for gourmet retail, airline catering, and premium snack brands.",
              variants: [
                "Peri-Peri",
                "Smoked Paprika",
                "Black Pepper",
                "Honey Roasted",
              ],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Seasoned Cashews",
          items: [
            {
              title: "Coated Cashews",
              image: valueAddedDryFruitsNutsImages.dryFruits2,
              description:
                "Large-grade cashews coated with refined spice blends for superior crunch and long shelf stability. A high-margin product for export snack categories.",
              variants: ["Salted", "Chilli Lime", "Masala", "Garlic & Herb"],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Roasted Nut Mixes",
          items: [
            {
              title: "Blended Nut Mixes",
              image: valueAddedDryFruitsNutsImages.dryFruits3,
              description:
                "Balanced blends of nuts and dried fruits crafted for gourmet retail, snack brands, and food service applications.",
              popularMixes: [
                "Classic Roasted Mix",
                "Protein Nut Mix",
                "Spicy Bar Snack Mix",
                "Trail Mix",
              ],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Premium Dried Fruits",
          items: [
            {
              title: "Dried Fruits Range",
              image: valueAddedDryFruitsNutsImages.dryFruits4,
              description:
                "Naturally dried, premium-quality fruits processed under controlled hygienic conditions to retain their natural colour, flavour, and nutritional value. Carefully selected for global retail, food service, and ingredient applications.",
              productRange: [
                "Raisins (Golden & Black)",
                "Dates",
                "Dried Mango",
                "Dried Pineapple",
                "Dried Berries",
              ],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "organic",
      title: "Organic & Superfoods",
      heroImage: "",
      overview:
        "Certified organic and superfood ingredients from India, processed to meet international quality and traceability standards.",
      intro:
        "At Vyana Global, we bring the richness of India’s traditional wellness foods to global markets. Our certified organic and superfood range is cultivated and processed with care to preserve natural nutrition, purity, and flavour. Export-ready and traceable, these products are ideal for health-focused brands, clean-label food manufacturers, and gourmet retail buyers worldwide.",
      sections: [
        {
          subtitle: "Certified Organic Food Products",
          items: [
            {
              title: "Organic Staples",
              image: organicSuperfoodsImages.organic1,
              description:
                "A carefully selected portfolio of organic staples and ingredients cultivated without synthetic chemicals and processed under controlled conditions to maintain purity and nutritional integrity. Suitable for premium retail, wellness brands, and clean-label food manufacturers.",
              productRange: [
                "Organic Rice (Basmati & Non-Basmati)",
                "Organic Pulses & Lentils",
                "Organic Spices",
                "Organic Millets",
              ],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Key Organic & Conventional Items",
          items: [
            {
              title: "Turmeric (Organic & Conventional)",
              image: organicSuperfoodsImages.organic2,
              description:
                "High-curcumin turmeric sourced from India’s premium belts, valued for colour strength, potency, and therapeutic properties.",
              formats: ["Whole Fingers", "Powder"],
              specs: {
                packaging: [
                  "Retail 50 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Jaggery Powder",
              image: organicSuperfoodsImages.organic3,
              description:
                "A natural, minimally processed sweetener with rich mineral content and deep caramel notes. Preferred as a clean alternative to refined sugar in health-focused and traditional food products.",
              variants: ["Cane Jaggery Powder", "Organic Jaggery Powder"],
              applications: [
                "Beverages",
                "Bakery",
                "Traditional Foods",
                "Wellness Blends",
              ],
              specs: {
                packaging: [
                  "Retail 250 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
            {
              title: "Fox Nuts (Makhana)",
              image: organicSuperfoodsImages.organic4,
              description:
                "Light, crunchy, and nutrient-rich fox nuts sourced from traditional Indian cultivation belts. Naturally gluten-free and low in fat, making them ideal for premium snack and wellness food categories.",
              formats: [
                "Raw",
                "Roasted",
                "Seasoned (Peri-Peri, Himalayan Salt, Masala)",
              ],
              specs: {
                packaging: [
                  "Retail 250 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Seed & Functional Ingredients",
          items: [
            {
              title: "Seeds & Functional",
              image: organicSuperfoodsImages.organic5,
              description:
                "Nutrient-rich seeds and functional plant-based ingredients curated for clean-label, health-focused food applications, supplied with consistent quality for retail and industrial use.",
              products: [
                "Flax Seeds (Brown & Golden)",
                "Chia Seeds",
                "Pumpkin Seeds (Hulled / Shelled)",
                "Sunflower Seeds (Hulled)",
                "Sesame Seeds (White, Black, Natural)",
                "Gluten-Free Seed Cracker",
              ],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "processed",
      title: "Processed & Packaged Foods",
      heroImage: "",
      overview:
        "A curated range of processed and packaged foods for international retail, food service, and industrial buyers, compliant with global food safety standards.",
      intro:
        "Vyana Global offers a curated range of processed and packaged food products manufactured in compliance with international food safety and quality standards. Our portfolio is designed for shelf stability, consistent taste, and scalable export supply, supporting private-label brands, retail chains, and food service buyers across global markets.",
      sections: [
        {
          subtitle: "Pasta & Noodles",
          items: [
            {
              title: "Pasta & Noodles",
              image: processedPackagedFoodsImages.processed1,
              description:
                "A selection of dried pasta and noodles produced from high-quality wheat and semolina, offering consistent texture, cooking performance, and shelf stability.",
              productRange: [
                "Durum Wheat Pasta",
                "Multigrain Pasta",
                "Instant Noodles",
              ],
              specs: {
                packaging: [
                  "Retail Packs",
                  "Bulk Export Packs",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Biscuits & Bakery",
          items: [
            {
              title: "Biscuits & Bakery Products",
              image: processedPackagedFoodsImages.processed2,
              description:
                "A diverse range of biscuits and baked goods designed for mass retail and private label export programs.",
              productRange: [
                "Butter Biscuits",
                "Digestive Biscuits",
                "Cookies & Crackers",
                "Rusk & Toast Biscuits",
              ],
              specs: {
                packaging: [
                  "Retail Packs",
                  "Bulk Export Packs",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Jams & Fruit Spreads",
          items: [
            {
              title: "Jams, Marmalades & Spreads",
              image: processedPackagedFoodsImages.processed3,
              description:
                "Fruit-based spreads prepared using selected fruits and standardized formulations to deliver balanced sweetness, colour, and flavour.",
              productRange: [
                "Strawberry",
                "Mango",
                "Mixed Fruit",
                "Citrus Marmalade",
                "Fruit Spreads",
              ],
              specs: {
                packaging: ["Glass/PET Jars", "Bulk Packs", "Private Label"],
              },
            },
          ],
        },
        {
          subtitle: "Sauces & Condiments",
          items: [
            {
              title: "Sauces & Condiments",
              image: processedPackagedFoodsImages.processed4,
              description:
                "A versatile range of sauces and condiments formulated for global taste preferences, offering consistent flavour profiles and reliable shelf stability.",
              productScope: [
                "Tomato Ketchup",
                "Chilli Sauce",
                "Soy Sauce",
                "Cooking Pastes",
                "Mayonnaise",
                "Chutneys",
                "Seasoning Sauces",
              ],
              specs: {
                packaging: [
                  "Retail Bottles/Jars",
                  "Bulk Packs",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Gourmet Pickled Vegetables & Salads",
          items: [
            {
              title: "Pickled Vegetables & Ready Salads",
              image: processedPackagedFoodsImages.processed5,
              description:
                "Premium gourmet pickled vegetables and ready-to-eat salads crafted for international retail, food service, and private-label markets.",
              productRange: [
                "Pickled: Baby Corn, Gherkins, Bell Peppers, Mixed Vegetables",
                "RTE Salads: Marinated Mushrooms, Sun-Dried Tomatoes, Pickled Beetroot",
              ],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg Jars/Pouches",
                  "Bulk 5–25 kg",
                  "Jars, Pouches, Tins",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Canned Fruits & Vegetables",
          items: [
            {
              title: "Canned Fruits",
              image: processedPackagedFoodsImages.processed6,
              description:
                "Premium canned fruits and vegetables, carefully processed to preserve natural flavor, texture, and nutrition.",
              productRange: [
                "Mango (sliced/diced/pulp)",
                "Pineapple (sliced/chunks/crushed)",
                "Lychee (peeled, in syrup)",
                "Mixed Fruit Medley",
              ],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg Jars/Pouches",
                  "Bulk 5–25 kg",
                  "Jars, Pouches, Tins",
                  "Private Label",
                ],
              },
            },
            {
              title: "Canned Vegetables",
              image: processedPackagedFoodsImages.processed7,
              description:
                "Baby corn, sweet corn, mushrooms, beans and gourmet mixes.",
              productRange: [
                "Baby Corn",
                "Sweet Corn",
                "Mushrooms (sliced/button)",
                "Green/French Beans",
                "Mixed Gourmet Vegetables",
              ],
              specs: {
                packaging: [
                  "Retail 100 g–1 kg Jars/Pouches",
                  "Bulk 5–25 kg",
                  "Jars, Pouches, Tins",
                  "Private Label",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "concentrates",
      title: "Concentrates & Purees",
      heroImage: "",
      overview:
        "High-quality fruit and vegetable ingredients, including purees, concentrates, powders, IQF, and NFC juices, crafted for global food and beverage applications.",
      intro:
        "Vyana Global offers a curated range of fruit and vegetable ingredients, including purees, concentrates, powders, IQF, and NFC juices. Sourced from trusted farms and processed to strict quality standards, our export-ready products deliver consistent flavor, color, and nutritional value for food manufacturers, beverage producers, and private-label brands worldwide.",
      sections: [
        {
          subtitle: "Fruit Concentrates",
          items: [
            {
              title: "Fruit Concentrates",
              image: concentratesPureesImages.concentrates1,
              description:
                "Highly concentrated bases preserving flavour, colour, and brix consistency.",
              popular: [
                "Mango",
                "Pineapple",
                "Guava",
                "Orange",
                "Pomegranate",
                "Mixed Fruit",
              ],
              specs: {
                packaging: ["Retail & Bulk Export Packs", "Private Label"],
              },
            },
          ],
        },
        {
          subtitle: "Vegetable Purées",
          items: [
            {
              title: "Vegetable Purées",
              image: concentratesPureesImages.concentrates2,
              description:
                "Smooth, uniform purées for sauces, soups, ready meals, and baby food.",
              popular: [
                "Tomato",
                "Onion",
                "Carrot",
                "Beetroot",
                "Pumpkin",
                "Spinach",
                "Garlic",
              ],
              formats: ["Aseptic Bags", "Drums", "Frozen Blocks"],
              specs: {
                packaging: ["5–25 kg Bags/Drums/Containers", "Private Label"],
              },
            },
          ],
        },
        {
          subtitle: "Fruit Powders",
          items: [
            {
              title: "Spray/Frozen-Dried Fruit Powders",
              image: concentratesPureesImages.concentrates3,
              description:
                "Long shelf life and ease of use for flavouring and nutrition.",
              popular: [
                "Mango",
                "Banana",
                "Strawberry",
                "Pineapple",
                "Raspberry",
                "Beetroot",
              ],
              specs: {
                packaging: [
                  "Retail 200 g–1 kg",
                  "Bulk 5–25 kg",
                  "Private Label",
                ],
              },
            },
          ],
        },
        {
          subtitle: "IQF & NFC",
          items: [
            {
              title: "IQF Products",
              image: concentratesPureesImages.concentrates4,
              description:
                "Individually quick frozen fruits and vegetables preserving shape and nutrition.",
              popular: [
                "Mango Cubes",
                "Berries",
                "Peas",
                "Green Beans",
                "Sweet Corn",
                "Mixed Vegetables",
              ],
              specs: {
                packaging: ["Retail 1–5 kg", "Bulk 10–25 kg", "Private Label"],
              },
            },
            {
              title: "NFC (Not From Concentrate) Juices",
              image: concentratesPureesImages.concentrates5,
              description:
                "Pure, minimally processed fruit juices retaining original flavor and nutrients.",
              popular: [
                "Mango",
                "Orange",
                "Pomegranate",
                "Pineapple",
                "Guava",
                "Mixed Fruit",
              ],
              specs: {
                packaging: [
                  "Retail 200 ml–1 L",
                  "Bulk 5–20 L Bag-in-Box",
                  "Private Label",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
    {
      id: "pharma",
      title: "Pharmaceutical Supplies",
      heroImage: "",
      overview:
        "High-quality pharmaceutical consumables and medical devices sourced and processed to meet global healthcare and safety standards.",
      intro:
        "Vyana Global offers a curated range of pharmaceutical consumables designed for hospitals, clinics, laboratories, and medical distributors worldwide. All products are manufactured under strict quality control, comply with international medical standards, and are export-ready. We provide flexible packaging and bulk options to meet the requirements of healthcare providers and distributors in multiple regions.",
      sections: [
        {
          subtitle: "Syringes",
          description:
            "Sterile, precision-manufactured syringes for safe and accurate dosing in hospitals, clinics, and laboratories.",
          items: [
            {
              title: "Irrigation Syringe",
              image: pharmaceuticalSuppliesImages.pharma1,
              features: [
                "Specification: 50ml, 60ml, 100ml, 200ml",
                "Protecting Cap Included",
                "Top-quality polypropylene",
                "Easy to use Syringe for Enteral Feeding",
                "Latex/Latex Free Piston",
                "Catheter Tip",
                "EO Sterilized",
              ],
            },
            {
              title: "Disposable Sterile Syringe (Luer Lock)",
              image: pharmaceuticalSuppliesImages.pharma2,
              features: [
                "Luer Slip, Luer lock",
                "With Needle Mounted or By-packed, or Without Needle",
                "Latex/Latex-free Piston",
                "Lubricant: Medical Grade Silicon",
                "PE/Blister Individual Package",
                "EO Sterile and Has no Pyrogen or Hemolysis Reaction",
                "The Transparency of The Barrel and Clarity of Graduation is Easy to Visualize the Proper Dosage of medication",
                "Certified to ISO 13485:2016, CE",
              ],
            },
            {
              title: "Syringe (Luer Lock/Luer Slip Lock)",
              image: pharmaceuticalSuppliesImages.pharma3,
              features: [
                "Specification: 2ml, 3ml, 5ml, 10ml, 20ml",
                "With Needle By-packed, or without Needle",
                "Lubricant: Medical Grade Silicon",
                "PE/Blister Individual Package",
                "EO Sterile and has no Pyrogen or Hemolysis Reaction",
              ],
            },
          ],
        },
        {
          subtitle: "Examination Gloves",
          description:
            "High-quality disposable gloves for medical examination and laboratory use.",
          items: [
            {
              title: "Latex Gloves",
              image: pharmaceuticalSuppliesImages.pharma4,
              description:
                "Powdered and non-powdered, sterile and non-sterile options for maximum safety and comfort.",
            },
            {
              title: "Nitrile Gloves",
              image: pharmaceuticalSuppliesImages.pharma5,
              description:
                "Powder-free, non-sterile, durable and chemical-resistant for sensitive applications.",
            },
          ],
        },
        {
          subtitle: "Needles",

          items: [
            {
              title: "Sterile Needle",
              image: pharmaceuticalSuppliesImages.pharma6,
              description:
                "Precision-engineered sterile needles suitable for injections, blood collection, and clinical procedures. Manufactured to meet international medical safety standards.",
              features: [
                "Suitable for gravity infusion use",
                "Compatible with infusion bags and bottles",
                "Drop rate options: 20 drops = 1 ± 0.1 ml / 60 drops",
                "Flexible drip chamber with or without medication filter",
                "Air vent and precision roller regulator for controlled flow",
                "Latex or latex-free injection bulb options",
                "Transparent PVC tubing (standard length 150 cm or customized)",
                "EO sterilized, non-toxic, and pyrogen-free",
                "Luer slip or luer lock connectors available",
                "Options with needle, needle cover, or Y-site",
              ],
            },
          ],
        },
        {
          subtitle: "IV Cannula",
          description:
            "High-quality intravenous cannulas designed for safe, smooth, and reliable venous access. Manufactured using advanced siliconized needle technology and flexible catheter materials to ensure patient comfort, ease of insertion, and secure fixation during clinical use. Available with injection port and without injection port, suitable for hospitals, clinics, and emergency care settings.",
          items: [
            {
              title: "Cannula",
              image: pharmaceuticalSuppliesImages.pharma7,
              features: [
                "Ultra-sharp siliconized stainless steel needle for painless venipuncture",
                "Universal back-cut bevel for smooth insertion",
                "Radio-opaque catheter for X-ray visibility",
                "Flexible insertion angles for improved handling",
                "Transparent needle cover to prevent accidental damage",
                "EO sterilized, non-toxic, and pyrogen-free",
                "Available variants: With Injection Port, Without Injection Port",
                "Catheter materials available: FEP / PUR / PTFE",
                "Siliconized surface for smooth flow and reduced discomfort",
                "Large transparent flashback chamber for quick blood visualization",
                "Ergonomic flexible wings for easy gripping and secure fixation",
              ],
              specs: {
                sizes: [
                  "14G — Length 45 mm — OD 2.1 mm — Flow 270 ml/min (water)",
                  "16G — Length 45 mm — OD 1.8 mm — Flow 200 ml/min (water)",
                  "17G — Length 45 mm — OD 1.5 mm — Flow 125 ml/min (water)",
                  "18G — Length 45 mm — OD 1.3 mm — Flow 90 ml/min (water)",
                  "20G — Length 32 mm — OD 1.1 mm — Flow 60 ml/min (water)",
                  "22G — Length 25 mm — OD 0.9 mm — Flow 36 ml/min (water)",
                  "24G — Length 19 mm — OD 0.7 mm — Flow 23 ml/min (water)",
                  "26G — Length 19 mm — OD 0.6 mm — Flow 15 ml/min (water)",
                ],
              },
            },
          ],
        },
        {
          subtitle: "Blood Transfusion Set",
          description:
            "Sterile, single-use transfusion sets designed for safe and controlled administration of blood and blood components.",
          items: [
            {
              title: "Blood Transfusion Set",
              image: pharmaceuticalSuppliesImages.pharma8,
              features: [
                "Designed for gravity-controlled blood and component transfusion",
                "Soft, flexible, transparent drip chamber for clear flow visibility",
                "Integrated 200-micron blood filter for effective clot/particle retention",
                "Kink-resistant DEHP-free PVC tubing",
                "Calibrated at 20 drops/ml for controlled transfusion",
                "EO sterilized, non-toxic, and pyrogen-free",
                "Available with or without needle",
                "Connector options: Luer lock or Luer slip",
                "Spike options: Air-vented or non-vented",
                "Optional latex injection bulb for intermittent medication",
                "Single or double drip chamber options",
                "Packaging options: pouch pack or blister pack",
              ],
              specs: {
                types: [
                  "Vented — 20 drops/ml — Packing 25 / 500",
                  "Non-Vented — 20 drops/ml — Packing 25 / 500",
                ],
              },
            },
          ],
        },
      ],
      ctas: ["request_quote", "request_catalog", "whatsapp"],
    },
  ],
};

export default catalog;
