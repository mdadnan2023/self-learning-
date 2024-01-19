import React, { useState } from "react";

function Searching({ product }) {
  // const [products, setProducts] = useState(product);
  // const [searchVal, setSearchVal] = useState("");

  // function handleSearchClick() {
  //   if (searchVal === "") {
  //     setProducts(product);
  //     return;
  //   }
  //   const filterBySearch = product.filter((item) => {
  //     if (
  //       item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
  //       item.category.toLowerCase().includes(searchVal.toLowerCase())
  //     ) {
  //       return item;
  //     }
  //   });
  //   setProducts(filterBySearch);
  // }

  return (
    <div>
      {/* <div className="my-style">
        <input
          placeholder="search..."
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
        <button className="search-btn" onClick={handleSearchClick}>
          🔍
        </button>
      </div> */}

      <div className="c-card-sec">
        {product.map((product) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img class="card-img-top" src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt={product.title} className="photo w-100" />
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{product.category}</h6>
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}</p>
                <button type="button" class="btn btn-success">View More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searching;
