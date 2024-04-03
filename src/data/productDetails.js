import bp1 from "../components/assets/blue-jeans.webp";
import bp2 from "../components/assets/bp2.webp";
import bp3 from "../components/assets/bp3.webp";
import bp4 from "../components/assets/bp4.webp";
import blp1 from "../components/assets/blp1.webp";
import blp2 from "../components/assets/blp2.webp";
import blp3 from "../components/assets/blp3.webp";
import blp4 from "../components/assets/blp4.webp";
import bs1 from "../components/assets/bs1.webp";
import bs2 from "../components/assets/bs2.webp";
import bs3 from "../components/assets/bs3.webp";
import bs4 from "../components/assets/bs4.webp";
import bso1 from "../components/assets/bso1.webp";
import bso2 from "../components/assets/bso2.webp";
import bso3 from "../components/assets/bso3.webp";
import bso4 from "../components/assets/bso4.webp";
import blso1 from "../components/assets/blso1.webp";
import blso2 from "../components/assets/blso2.webp";
import blso3 from "../components/assets/blso3.webp";
import blso4 from "../components/assets/blso4.webp";
import gp1 from "../components/assets/gp1.webp";
import gp2 from "../components/assets/gp2.webp";
import gp3 from "../components/assets/gp3.webp";
import gp4 from "../components/assets/gp4.webp";
import gs1 from "../components/assets/gs1.webp";
import gs2 from "../components/assets/gs2.webp";
import gs3 from "../components/assets/gs3.webp";
import gs4 from "../components/assets/gs4.webp";
import rs1 from "../components/assets/rs1.webp";
import rs2 from "../components/assets/rs2.webp";
import rs3 from "../components/assets/rs3.webp";
import rs4 from "../components/assets/rs4.webp";
import grp1 from "../components/assets/grp1.webp";
import grp2 from "../components/assets/grp2.webp";
import grp3 from "../components/assets/grp3.webp";
import grp4 from "../components/assets/grp4.webp";
import ps1 from "../components/assets/ps1.webp";
import ps2 from "../components/assets/ps2.webp";
import ps3 from "../components/assets/ps3.webp";
import ps4 from "../components/assets/ps4.webp";
import rso1 from "../components/assets/rso1.webp";
import rso2 from "../components/assets/rso2.webp";
import rso3 from "../components/assets/rso3.webp";
import rso4 from "../components/assets/bso4.webp";
import bsho1 from "../components/assets/bsho1.webp";
import bsho2 from "../components/assets/bsho2.webp";
import bsho3 from "../components/assets/bsho3.webp";
import bsho4 from "../components/assets/bsho4.webp";
import pst1 from "../components/assets/pst1.webp";
import pst2 from "../components/assets/pst2.webp";
import pst3 from "../components/assets/pst3.webp";
import pst4 from "../components/assets/pst4.webp";
import yp1 from "../components/assets/yp1.webp";
import yp2 from "../components/assets/yp2.webp";
import yp3 from "../components/assets/yp3.webp";
import yp4 from "../components/assets/yp4.webp";

// import img2 from "../components/assets/jeans.jpg";

const productDetails = [
  {
    id: 1,
    name: "blue pant",
    quantity: 10,
    color: "blue",
    brand: "Raymond",
    price: 240,
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "pant",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [bp1, bp2, bp3, bp4],
  },
  {
    id: 2,
    name: "black pant",
    quantity: 5,
    color: "black",
    brand: "Nike",
    price: 410,
    size: ["S", "M", "3XL"],
    category: "pant",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [blp1, blp2, blp3, blp4]
  },
  {
    id: 3,
    name: "blue shirt",
    quantity: 18,
    color: "blue",
    brand: "Adidas",
    price: 350,
    size: ["S", "M", "L", "XL", "2XL"],
    category: "shirt",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [bs1, bs2, bs3, bs4]
  },
  {
    id: 4,
    name: "black shoes",
    quantity: 9,
    brand: "Puma",
    color: "black",
    price: 290,
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shoes",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [bso1, bso2, bso3, bso4]
  },
  {
    id: 5,
    name: "blue shoes",
    quantity: 13,
    color: "blue",
    brand: "Reebok",
    price: 480,
    size: ["XL", "2XL", "3XL"],
    category: "shoes",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [blso1, blso2, blso3, blso4]
  },
  {
    id: 6,
    name: "grey pant",
    quantity: 22,
    color: "grey",
    brand: "Under Armour",
    price: 240,
    size: ["S", "M", "2XL", "3XL"],
    category: "pant",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
    img: [gp1, gp2, gp3, gp4]
  },
  {
    id: 7,
    name: "grey shoes",
    quantity: 8,
    color: "grey",
    brand: "New Balance",
    price: 420,
    size: ["S", "M", "L", "XL"],
    category: "shoes",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [gs1, gs2, gs3, gs4]
  },
  {
    id: 8,
    name: "red shirt",
    quantity: 4,
    color: "red",
    brand: "Asics",
    price: 310,
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shirt",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [rs1, rs2, rs3, rs4]
  },
  {
    id: 9,
    name: "gray pant",
    quantity: 27,
    color: "gray",
    brand: "Fila",
    price: 230,
    size: ["S", "M", "L", "3XL"],
    category: "pant",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [grp1, grp2, grp3, grp4]
  },
  {
    id: 10,
    name: "purple shirt",
    quantity: 15,
    color: "purple",
    brand: "Converse",
    price: 390,
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shirt",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [ps1, ps2, ps3, ps4]
  },
  {
    id: 11,
    name: "red shoes",
    quantity: 12,
    color: "red",
    brand: "Brooks",
    price: 270,
    size: ["S", "M", "L", "XL"],
    category: "shoes",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [rso1, rso2, rso3, rso4]
  },
  {
    id: 12,
    name: "brown shoes",
    quantity: 10,
    color: "red",
    brand: "Saucony",
    price: 500,
    size: ["2XL", "3XL"],
    category: "shoes",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [bsho1, bsho2, bsho3, bsho4]
  },
  {
    id: 13,
    name: "pink shirt",
    category: "shirt",
    quantity: 6,
    color: "pink",
    brand: "Merrell",
    price: 320,
    size: ["S", "M", "L", "XL"],
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [pst1, pst2, pst3, pst4]
  },
  {
    id: 14,
    name: "yellow pant",
    quantity: 25,
    color: "yellow",
    brand: "Timberland",
    price: 210,
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "pant",
    description:
      "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
      img: [yp1, yp2, yp3, yp4]
  },
];

export default productDetails;
