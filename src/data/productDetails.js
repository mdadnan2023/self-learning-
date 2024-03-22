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
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:[bp1, bp2, bp3, bp4]
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
    description: "Some quick example text to build on the card title and make up the bulk of the card's conteqt.",
    img:[blp1, blp2, blp3, blp4]
  },
  {
    id: 3,
    name: "blue shirt",
    quantity: 18,
    color: "blue",
    brand: "Adidas", 
    price: 350,
    size : ["S", "M", "L", "XL", "2XL"],
    category: "shirt",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:[bs1, bs2, bs3, bs4]
  },
  {
    id: 4,
    name: "black shoes",
    quantity: 9, 
    brand: "Puma",
    color: "black",
    price: 290, 
    size : ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shoes",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:[bso1, bso2, bso3, bso4]
  },
  {
    id: 5,
    name: "blue shoes",
    quantity: 13,
    color: "blue",
    brand: "Reebok",
    price: 480,
    size : ["XL", "2XL", "3XL"], 
    category: "shoes",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg"
  },
  {
    id: 6,
    name: "grey pant",
    quantity: 22, 
    color:"grey",
    brand: "Under Armour", 
    price: 240,
    size : ["S", "M", "2XL", "3XL"],
    category: "pant",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/e/m/v/32-non-den-trouser-35-32-kundan-original-imafw2jxgap25gnr-bb.jpeg?q=70"
  },
  {
    id: 7,
    name: "grey shoes",
    quantity: 8, 
    color:"grey",
    brand: "New Balance",
    price: 420,
    size : ["S", "M", "L", "XL"],
    category: "shoes",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
  },
  {
    id: 8,
    name: "red shirt",
    quantity: 4, 
    color:"red",
    brand: "Asics", 
    price: 310,
    size : ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shirt",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/t/y/44-assfwspfr17252-allen-solly-original-imafgnsrg8xmkyk4-bb.jpeg?q=70"
  },
  {
    id: 9,
    name: "gray pant",
    quantity: 27, 
    color:"gray",
    brand: "Fila", 
    price: 230,
    size : ["S", "M", "L", "3XL"],
    category: "pant",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/z/g/d/30-fkvt-11-og-vurso-original-imafxufhhqzbjdfr.jpeg?q=70"
  },
  {
    id: 10,
    name: "purple shirt",
    quantity: 15, 
    color: "purple",
    brand: "Converse", 
    price: 390,
    size : ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "shirt",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/5/x/l-dgflortewz11-dimmy-original-imagrnr8gqy92394.jpeg?q=70"
  },
  {
    id: 11,
    name: "red shoes",
    quantity: 12, 
    color: "red",
    brand: "Brooks", 
    price: 270, 
    size : ["S", "M", "L", "XL"],
    category: "shoes",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
  },
  {
    id: 12,
    name: "brown shoes",
    quantity: 10, 
    color:"red",
    brand: "Saucony", 
    price: 500,
    size : ["2XL", "3XL"],
    category: "shoes",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/jyvvgcw0/shoe/j/y/a/cscocmouse-6-asian-brown-original-imaf78gxmkzgxg7p.jpeg?q=70"
  },
  {
    id: 13,
    name: "pink shirt",
    category: "shirt",
    quantity: 6, 
    color:"pink",
    brand: "Merrell", 
    price: 320,
    size : ["S", "M", "L", "XL"],
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/x/v/s-tbh-turkiy-pk-the-bear-house-original-imagscbsy9rdmh9d.jpeg?q=70"
  },
  {
    id: 14,
    name: "yellow pant",
    quantity: 25, 
    color: "yellow",
    brand: "Timberland", 
    price: 210,
    size : ["S", "M", "L", "XL", "2XL", "3XL"], 
    category: "pant",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://rukminim2.flixcart.com/image/612/612/k73nlow0/trouser/c/j/g/36-t330-tr-cotton-orange-aa-ad-av-original-imafpf9txgkptzfa.jpeg?q=70"
  }

];

export default productDetails;
