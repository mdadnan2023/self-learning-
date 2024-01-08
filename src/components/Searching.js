import React, { useState } from "react";

function Searching({ product }) {
  const [products, setProducts] = useState(product);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(product);
      return;
    }
    const filterBySearch = product.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }

  return (
    <div>
      <div className="my-style">
        <input
          placeholder="search..."
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
        <button className="search-btn" onClick={handleSearchClick}>
          🔍
        </button>
      </div>
      {/* <div className="filter-btn-sec">
        <button className="filter-btn" onClick={handleFilter}>Pant</button>
        <button className="filter-btn" onClick={handleFilter}>Shirt</button>
        <button className="filter-btn" onClick={handleFilter}>Shoes</button>
        <button className="filter-btn" onClick={handleReset}>Reset All</button>
      </div> */}

      <div>
        {products.map((product) => {
          return <div className="my-style">{product}</div>;
        })}
      </div>
    </div>
  );
}

export default Searching;
