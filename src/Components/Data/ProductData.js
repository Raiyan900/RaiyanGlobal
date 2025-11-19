import DragonfruitImg from "../../assets/Dragonfruit.jpg";
import chikoo from "../../assets/chikoo.jpg";
import guvava from "../../assets/guvava.jpg";
import Appleboor from "../../assets/Appleboor.jpg";
import Amla from "../../assets/Amla.jpg";
import bindi from "../../assets/Bindi.jpg";

const productsData = [
  {
    id: 1,
    name: "Premium Alphonso Mangoes",
    image: "https://media.istockphoto.com/id/463651383/photo/mangoes-composition.jpg?s=612x612&w=0&k=20&c=Y96f43HrgKG247uCO1w5OiJSiq2ACoLgdFd3kMwIuvY=",
    shortDescription: "Our premium alphonso mangoes are sourced from the finest orchards in Maharashtra. These highly demanded mangoes are distinguished by:",
    fullDescription: "The Alphonso mango, known as the 'King of Mangoes', is renowned worldwide for its superior taste and texture. Each mango is carefully hand-picked and naturally ripened to ensure the best quality. Our mangoes are exported fresh and are ideal for both direct consumption and processing.",
    category: "Fruits",
    features: [
      "Exceptional sweetness and aroma",
      "Rich golden color and perfect ripeness",
      "Smooth, fiber-free pulp and texture",
      "Globally certified export quality"
    ],
    specifications: {
      Origin: "Maharashtra, India",
      Season: "March to May",
      Grade: "A-Grade Export",
      Packaging: "Custom ventilated boxes"
    }
  },
  {
    id: 2,
    name: "Basmati Rice - Extra Long Grain",
    image: "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=",
    shortDescription: "Aromatic, aged, extra long-grain rice, perfect for biryanis and pilafs. Known for its distinct flavor and fluffiness.",
    fullDescription: "Sourced from the foothills of the Himalayas, this Basmati rice is naturally aged for 12 months to enhance its aroma and flavor. When cooked, the grains separate beautifully, yielding a fluffy texture that is a hallmark of premium Basmati.",
    category: "Grains",
    features: [
      "Aged for 12 months for richer flavor",
      "Extra long grain (7.5 mm+)",
      "Non-sticky and aromatic after cooking",
      "Free from stones and impurities"
    ],
    specifications: {
      Origin: "Himalayan Region, India",
      Type: "Aged Basmati",
      Packaging: "5kg/10kg moisture-proof bags",
      Certification: "ISO 22000 Certified"
    }
  },
  {
    id: 3,
    name: "Indian Spices Pack - Classic Mix",
    image: "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
    shortDescription: "A curated mix of authentic, whole, and ground Indian spices essential for every kitchen.",
    fullDescription: "This pack includes premium quality Turmeric, Red Chilli, Cumin, and Coriander powder. All spices are sun-dried and ground at low temperatures to retain their natural oils, aroma, and color. Elevate any dish with our fresh, potent blend.",
    category: "Spices",
    features: [
      "Low-temperature grinding technology",
      "Zero added colors or preservatives",
      "High potency and aroma guaranteed",
      "Includes 4 essential whole spices"
    ],
    specifications: {
      Origin: "Various Indian States",
      Content: "Turmeric, Chilli, Cumin, Coriander",
      ShelfLife: "24 Months",
      Packaging: "Airtight resealable pouches"
    }
  },
  {
    id: 10,
    name: "Fresh Drumstick (Moringa) Pods",
    image: "https://www.shutterstock.com/image-photo/bunch-moringa-oleifera-sonjna-over-600nw-78763540.jpg",
    shortDescription: "Fresh, tender, and highly nutritious Drumstick (Moringa Oleifera) pods, used extensively in Indian cuisine.",
    fullDescription: "A superfood vegetable, drumstick is rich in vitamins and minerals. The pods are harvested at their optimal size to ensure they are tender and have minimal fiber. They are cleaned and immediately prepared for export to retain peak freshness.",
    category: "Vegetables",
    features: [
      "Excellent source of Vitamin C and Iron",
      "Tender, easy-to-cut pods",
      "Ideal for soups, curries, and stews",
      "Guaranteed farm freshness"
    ],
    specifications: {
      Origin: "Tamil Nadu, India",
      BotanicalName: "Moringa Oleifera",
      Availability: "Peak Season: Jan-May",
      Preparation: "Washed and trimmed"
    }
  },
  {
    id: 11,
    name: "Black Peppercorns - Malabar Grade",
    image: "https://media.istockphoto.com/id/469858939/photo/black-pepper.jpg?s=612x612&w=0&k=20&c=GwF_EvFrYNtwTdY5DN9gRS1eJnRf949jUQeqgqoLExE=",
    shortDescription: "Aromatic and pungent Malabar Grade black peppercorns, providing the highest level of spice and aroma.",
    fullDescription: "Sourced directly from the spice plantations of Kerala, these Malabar Black Peppercorns are sun-dried and uniformly sized. They boast a high piperine content, giving them their characteristic sharp taste, making them a staple for premium seasoning and culinary applications globally.",
    category: "Spices",
    features: [
      "High Piperine content (Pungency)",
      "Malabar Grade (Premium quality)",
      "Naturally dried, uniform size",
      "Ready to be ground or used whole"
    ],
    specifications: {
      Origin: "Kerala, India",
      Grade: "Malabar Grade",
      Aroma: "Sharp and Woody",
      MoistureContent: "<12%"
    }
  },
{
  id: 12,
  name: "Dragon Fruit - Red Flesh Variety",
  image: DragonfruitImg,
  shortDescription: "Fresh, vibrant red-fleshed dragon fruit known for its natural sweetness and antioxidant-rich pulp.",
  fullDescription:
    "Our premium Red Flesh Dragon Fruit is sourced from trusted farms and handpicked at peak ripeness. Known for its bright magenta flesh, mildly sweet taste, and crunchy edible seeds, this tropical superfruit is rich in vitamins, antioxidants, and fiber. Ideal for fresh consumption, smoothies, salads, desserts, and health-focused food products.",
  category: "Fruits",
  features: [
    "Bright red flesh with naturally sweet flavor",
    "Rich in antioxidants and Vitamin C",
    "High moisture content and refreshing texture",
    "Perfect for fresh eating, smoothies, and desserts"
  ],
  specifications: {
    Origin: "India",
    Variety: "Red Flesh (Hylocereus Costaricensis)",
    Size: "350g - 500g per piece",
    ShelfLife: "12–15 days (under refrigeration)",
    Packaging: "Export-grade protective cartons"
  }
},
{
  id: 13,
  name: "Chikoo – Premium Quality",
  image: chikoo,
  shortDescription: "Sweet, grainy, and naturally rich chikoo fruits sourced fresh for the best taste.",
  fullDescription: "Handpicked premium-grade chikoos known for their rich sweetness, soft texture, and natural caramel-like flavor. These fruits are grown using natural farming methods and delivered fresh to ensure the best quality. Perfect for eating fresh, making smoothies, milkshakes, and desserts.",
  category: "Fruits",
  features: [
    "Naturally sweet and aromatic",
    "Soft texture with rich flavor",
    "Handpicked premium quality",
    "Perfect for smoothies and milkshakes"
  ],
  specifications: {
    Origin: "Maharashtra, India",
    Grade: "A-Grade Premium",
    Taste: "Sweet & Caramel-like",
    AverageWeight: "80–120g per fruit"
  }
},
{
  id: 14,
  name: "guvava – Premium Quality",
  image: guvava,
  shortDescription: "Sweet, grainy, and naturally rich chikoo fruits sourced fresh for the best taste.",
  fullDescription: "Handpicked premium-grade chikoos known for their rich sweetness, soft texture, and natural caramel-like flavor. These fruits are grown using natural farming methods and delivered fresh to ensure the best quality. Perfect for eating fresh, making smoothies, milkshakes, and desserts.",
  category: "Fruits",
  features: [
    "Naturally sweet and aromatic",
    "Soft texture with rich flavor",
    "Handpicked premium quality",
    "Perfect for smoothies and milkshakes"
  ],
  specifications: {
    Origin: "Maharashtra, India",
    Grade: "A-Grade Premium",
    Taste: "Sweet & Caramel-like",
    AverageWeight: "80–120g per fruit"
  }
},
{
  id: 15,
  name: "Apple Boor – Premium Quality",
  image: Appleboor,
  shortDescription: "Crisp, juicy, and naturally sweet Apple Boor fruits, freshly harvested for the best taste.",
  fullDescription: "Premium-grade Apple Boor fruits known for their crunchy texture, refreshing sweetness, and vibrant flavor. These apples are carefully harvested to maintain freshness and natural nutrition. Perfect for eating fresh, slicing for salads, or preparing healthy juices.",
  category: "Fruits",
  features: [
    "Crisp and juicy texture",
    "Freshly harvested premium quality",
    "Naturally sweet and refreshing",
    "Perfect for salads, juices, and snacking"
  ],
  specifications: {
    Origin: "Himachal Pradesh, India",
    Grade: "A-Grade Premium",
    Taste: "Sweet & Refreshing",
    AverageWeight: "100–150g per fruit"
  }
},
{
  id: 16,
  name: "Amla – Premium Quality",
  image: Amla,
  shortDescription: "Fresh, tangy, and nutrient-rich amla fruits known for their powerful health benefits.",
  fullDescription: "Handpicked premium-quality amlas packed with Vitamin C, antioxidants, and essential nutrients. These fruits are sourced from natural farms and delivered fresh to retain maximum medicinal value. Ideal for eating raw, making juice, pickle, chyawanprash, or using in traditional Ayurvedic remedies.",
  category: "Fruits",
  features: [
    "Rich in Vitamin C and antioxidants",
    "Boosts immunity and digestion",
    "Freshly harvested premium quality",
    "Perfect for juices, pickles, and Ayurvedic uses"
  ],
  specifications: {
    Origin: "Gujarat, India",
    Grade: "A-Grade Premium",
    Taste: "Tangy & Refreshing",
    AverageWeight: "20–40g per fruit"
  }
},
{
  id: 17,
  name: "Bindi (Okra) – Premium Quality",
  image: bindi,
  shortDescription: "Fresh, tender, and high-quality okra ideal for everyday cooking.",
  fullDescription: "Premium-grade okra harvested fresh to ensure tenderness, vibrant color, and rich nutritional value. These bhindi pods are naturally grown and handpicked to maintain top quality. Perfect for preparing sabzi, fry dishes, curries, and a variety of traditional Indian recipes.",
  category: "Vegetables",
  features: [
    "Fresh and tender pods",
    "Rich in fiber, vitamins, and minerals",
    "Handpicked premium quality",
    "Ideal for curries, fries, and daily cooking"
  ],
  specifications: {
    Origin: "Gujarat, India",
    Grade: "A-Grade Premium",
    Texture: "Tender & Non-fibrous",
    AverageLength: "8–12 cm per pod"
  }
}
];

export default productsData;