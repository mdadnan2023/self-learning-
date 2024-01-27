import React from "react";
import productDetails from "../data/productDetails";



function Button({ menuItems, filterItem, setItem }) {
  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "All") {
      setItem(productDetails);
    } else {
      filterItem(selectedCategory);
    }
  };

  return (
    <div className="flex gap-8 mx-5">
      <h4>Filter Yor Product : </h4>
      <select class="custom-select" onChange={handleSelectChange}>
        <option value="All">All</option>
        {menuItems.map((category, id) => (
          <option key={id} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Button;
