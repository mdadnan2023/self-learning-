import React from "react";
import productDetails from "../data/productDetails";



function Button({ menuItems, menuBrand, menuColor, filterColor, filterBrand, filterItem, setItem }) {

  // filter product by category
  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "Select Category") {
      setItem(productDetails);
    } else {
      filterItem(selectedCategory);
    }
  };

  // filter product by brand
  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    if (selectedBrand === "Select Brand") {
      setItem(productDetails);
    } else {
      filterBrand(selectedBrand);
    }
  };


  return (
    <div className="filter-input-sec">
      <select className="custom-select" onChange={handleSelectChange}>
        <option value="Select Category">Select Category</option>
        {menuItems.map((category, id) => (
          <option key={id} value={category}>{category}</option>
        ))}
      </select>

      <select className="custom-select" onChange={handleBrandChange}>
        <option value="Select Brand">Select Brand</option>
        {menuBrand.map((brand, id) => (
          <option key={id} value={brand}>{brand}</option>
        ))}
      </select>
      {
        menuColor.map((color, id) => (
          <div className="form-check" key={id}>
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" value={color}>{color}</label>
          </div>
        ))
      }
    </div>
  );
}

export default Button;
