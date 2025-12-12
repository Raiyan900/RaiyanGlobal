import fruits from "./fruits.js";
import vegetables from "./vegetables.js";
import mango from "./mango.js";
import Bangla from "./BanglaVegetables.js";
import paan from "./Paan.js";
import flowers from "./Flowers.js";

const allProducts = [
  ...fruits,
  ...vegetables,
  ...mango,
  ...Bangla,
  ...paan,
  ...flowers,
];

export default allProducts;
