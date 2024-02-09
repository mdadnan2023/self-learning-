
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
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/y/4/a/34-hd-gaumukhi-creation-original-imagmyf5neh2fgbv.jpeg?q=70"
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
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-trouser/t/o/h/34-dms001-formal-trouser-ks-brand-original-imag4dxfqjzhrwws.jpeg?q=70"

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
    img: "https://rukminim2.flixcart.com/image/612/612/l4rd0280/shirt/g/q/b/l-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagfh9bffv4bxjq.jpeg?q=70"
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
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/i/5/6-442-blk-gld-40-bruton-black-original-imag4q6ntfwkfzna-bb.jpeg?q=70"

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
