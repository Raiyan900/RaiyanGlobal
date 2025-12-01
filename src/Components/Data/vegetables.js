import Bhindi from "../../assets/images/products/vegetables/Bhindi.jpg";
import carrot from "../../assets/images/products/vegetables/carrot.jpg";
import drumstick from "../../assets/images/products/vegetables/drumstick.jpg";
import DrumstickFlowerStems from "../../assets/images/products/vegetables/DrumstickFlowerStems.jpg";
import Dudhi from "../../assets/images/products/vegetables/Dudhi.jpg";
import onion from "../../assets/images/products/vegetables/onion.jpg";
import Pickles from "../../assets/images/products/vegetables/Pickles.jpg";
import PoiBhaji from "../../assets/images/products/vegetables/PoiBhaji.jpg";
import suran from "../../assets/images/products/vegetables/suran.jpg";
import SurtiPapdi from "../../assets/images/products/vegetables/SurtiPapdi.jpg";
import Tindora from "../../assets/images/products/vegetables/Tindora.jpg";
import YHaldi from "../../assets/images/products/vegetables/Y.Haldi.jpg";

const vegetables = [
  {
    id: 201,
    name: "Fresh Bhindi (Okra)",
    image: Bhindi,
    category: "Vegetables",
    shortDescription:
      "Premium export-grade bhindi with uniform size and natural green color.",
    fullDescription:
      "These fresh okra pods are handpicked from healthy farms, sorted for export standards, and packed to retain freshness during long transit.",
    features: [
      "Uniform length",
      "Deep green color",
      "Handpicked for export",
      "Long shelf life",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "Export cartons / mesh bags",
    },
  },

  {
    id: 202,
    name: "Fresh Carrots",
    image: carrot,
    category: "Vegetables",
    shortDescription:
      "Fresh, naturally sweet carrots grown in clean soil and packed for export.",
    fullDescription:
      "Our carrots are washed, sorted, and graded to ensure only bright, crunchy and fresh pieces reach international markets.",
    features: [
      "Bright orange color",
      "Naturally sweet",
      "Rich in nutrients",
      "Export-grade sorting",
    ],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "All Year",
      Grade: "A-Grade Export",
      Packaging: "10kg PP bags / cartons",
    },
  },

  {
    id: 203,
    name: "Fresh Drumsticks (Moringa Pods)",
    image: drumstick,
    category: "Vegetables",
    shortDescription:
      "Long, firm and fresh moringa pods specially sorted for export.",
    fullDescription:
      "These moringa pods are grown naturally, harvested early morning and packed using cold-chain methods to preserve freshness.",
    features: [
      "Long tender pods",
      "Rich in nutrition",
      "Chemical-safe",
      "High export demand",
    ],
    specifications: {
      Origin: "South India",
      Season: "All Year",
      Grade: "Premium",
      Packaging: "Shrink-wrap + export cartons",
    },
  },

  {
    id: 204,
    name: "Drumstick Flower Stems",
    image: DrumstickFlowerStems,
    category: "Vegetables",
    shortDescription:
      "Fresh moringa flower stems carefully cut and packed for export usage.",
    fullDescription:
      "Known for their unique taste and health benefits, these stems are processed and packed to maintain hygiene for overseas transport.",
    features: [
      "Cleanly cut stems",
      "High freshness",
      "Rich medicinal value",
      "Ideal for export",
    ],
    specifications: {
      Origin: "South India",
      Season: "All Year",
      Grade: "Export",
      Packaging: "Food-grade cartons",
    },
  },

  {
    id: 205,
    name: "Fresh Dudhi (Bottle Gourd)",
    image: Dudhi,
    category: "Vegetables",
    shortDescription:
      "Fresh tender bottle gourd ideal for cooking and long-distance export.",
    fullDescription:
      "These bottle gourds are firm, smooth and naturally hydrating. Each piece is individually checked and wrapped for export quality.",
    features: [
      "Tender and firm",
      "Smooth texture",
      "Hydrating vegetable",
      "Export-safe packing",
    ],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "All Year",
      Grade: "Export",
      Packaging: "Shrink-wrap + cartons",
    },
  },

  {
    id: 206,
    name: "Fresh Onion",
    image: onion,
    category: "Vegetables",
    shortDescription:
      "Naturally grown fresh onions ideal for global retail and wholesale markets.",
    fullDescription:
      "Sorted by size and cleaned carefully, these onions are durable and stay fresh for weeks—making them perfect for export.",
    features: [
      "Strong shelf life",
      "Clean and sorted",
      "Consistent size",
      "High global demand",
    ],
    specifications: {
      Origin: "Nashik, India",
      Season: "All Year",
      Grade: "A-Grade",
      Packaging: "5kg / 10kg mesh bags",
    },
  },

  {
    id: 207,
    name: "Pickles Vegetables (Mixed)",
    image: Pickles,
    category: "Vegetables",
    shortDescription: "Fresh vegetables ideal for pickle making.",
    fullDescription:
      "A selective mix of vegetables used for traditional pickle preparation, carefully cleaned and sorted.",
    features: ["Fresh & raw", "Perfect for pickling", "Clean produce"],
    specifications: {
      Origin: "India",
      Season: "Varies",
      Grade: "Standard",
      Packaging: "Custom packaging",
    },
  },

  {
    id: 208,
    name: "Poi Bhaji (Malabar Spinach)",
    image: PoiBhaji,
    category: "Vegetables",
    shortDescription: "Fresh tender Malabar spinach leaves and stems.",
    fullDescription:
      "Poi Bhaji is harvested early morning to maintain crispness and packed carefully to avoid moisture loss.",
    features: [
      "Highly nutritious",
      "Soft leaves",
      "Green and fresh",
      "Ideal for export",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "All Year",
      Grade: "A-Grade Export",
      Packaging: "Vegetable crates",
    },
  },

  {
    id: 209,
    name: "Fresh Suran (Elephant Foot Yam)",
    image: suran,
    category: "Vegetables",
    shortDescription: "Firm and export-quality elephant foot yam.",
    fullDescription:
      "Suran is washed, cleaned and sorted according to export size and hygiene standards.",
    features: [
      "Firm texture",
      "Long shelf life",
      "Rich in nutrients",
      "Cleaned for export",
    ],
    specifications: {
      Origin: "India",
      Season: "October to March",
      Grade: "Premium",
      Packaging: "Jute bags / cartons",
    },
  },

  {
    id: 210,
    name: "Fresh Surti Papdi",
    image: SurtiPapdi,
    category: "Vegetables",
    shortDescription:
      "Fresh green Surti Papdi known for its tenderness and export demand.",
    fullDescription:
      "These flat beans are sorted, cleaned and packed under hygienic conditions for long-distance delivery.",
    features: [
      "Tender pods",
      "Bright green",
      "Popular export item",
      "Fresh & crisp",
    ],
    specifications: {
      Origin: "Gujarat, India",
      Season: "Winter Season",
      Grade: "Export",
      Packaging: "Ventilated cartons",
    },
  },

  {
    id: 211,
    name: "Fresh Tindora (Ivy Gourd)",
    image: Tindora,
    category: "Vegetables",
    shortDescription:
      "High-quality Tindora with natural shine and freshness for export.",
    fullDescription:
      "Handpicked for uniform size, Tindora is packed securely to maintain firmness during transit.",
    features: [
      "Shiny fresh skin",
      "Crisp texture",
      "Chemical-safe farming",
      "High export demand",
    ],
    specifications: {
      Origin: "India",
      Season: "All Year",
      Grade: "Premium Export",
      Packaging: "Vegetable crates",
    },
  },

  {
    id: 212,
    name: "Fresh Haldi (Turmeric Root)",
    image: YHaldi,
    category: "Vegetables",
    shortDescription:
      "Premium fresh turmeric root with rich aroma and natural yellow color.",
    fullDescription:
      "High-curcumin fresh haldi roots cleaned and sorted for international markets.",
    features: ["High curcumin", "Bright color", "Organic farms"],
    specifications: {
      Origin: "Tamil Nadu / Maharashtra",
      Season: "Winter Season",
      Grade: "Export",
      Packaging: "Jute bags",
    },
  },
];

export default vegetables;
