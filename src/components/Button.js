import React from "react";
import productDetails from "../data/productDetails";



function Button({ menuItems, menuBrand, filterItem, setItem }) {
  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "All") {
      setItem(productDetails);
    } else {
      filterItem(selectedCategory);
    }
  };

  return (
    <div className="w-100">
      <select className="custom-select" onChange={handleSelectChange}>
        <option value="All">Select Category</option>
        {menuItems.map((category, id) => (
          <option key={id} value={category}>{category}</option>
        ))}
      </select>
      <select className="custom-select" onChange={handleSelectChange}>
        <option value="All">Select Brand</option>
        {menuBrand.map((brand, id) => (
          <option key={id} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
}

export default Button;
