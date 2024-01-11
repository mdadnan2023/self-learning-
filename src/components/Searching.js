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
      if (item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.category.toLowerCase().includes(searchVal.toLowerCase())) {
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
        <button className="search-btn" onClick={handleSearchClick}>🔍</button>
      </div>

      <div className="c-card-sec">
        {products.map((product) => {
          // return <div className="my-style">{product}</div>;
          return (

            <div className="c-card" key={product.id}>
              <h1>Name : {product.name}</h1>
              <h4>Category : {product.category}</h4>
            </div> 

          );
        })}
      </div>
    </div>
  );
}

export default Searching;
