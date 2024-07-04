import { useState } from "react";
import { Link } from "react-router-dom";

function Searching({ product }) {
  const [products, setProducts] = useState(product);
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
    <div className="tc ma0 pa4 min-vh-100">
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
        {products.map((product) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <figure className="filter-card-fig">
                <img class="photo" src={product.img[0]} alt={product.title} />
              </figure>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {product.category}
                </h6>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="btn-sec">
                  <button type="button" className="btn btn-success">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-success">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searching;
