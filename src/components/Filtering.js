import React, { useState } from "react";
import Buttons from "./Button";
import productDetails from "../data/productDetails";
import { Link } from "react-router-dom";


function Filtering() {
  const [items, setItems] = useState(productDetails);

  const menuItems = [...new Set(productDetails.map((val) => val.category))];

  const filterItem = (curCat) => {
    const newItem = productDetails.filter((newVal) => {
      return newVal.category === curCat;
    });
    setItems(newItem);
  };



  return (
    <div className="tc ma0 pa4 min-vh-100">
      <Buttons
        menuItems={menuItems}
        filterItem={filterItem}
        setItem={setItems}
      />
      <div className="c-card-sec">
        {items.map((product) => (
          <div className="card" style={{ width: "18rem" }} key={product.id}>
            <img className="photo" src={product.img} alt={product.title} />
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {product.category}
              </h6>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <div className="btn-sec">
                <button type="button" className="btn btn-success">
                  <Link to={`/product/${product.id}`}>BUY NOW</Link>
                </button>
                <button type="button" className="btn btn-success">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtering;
