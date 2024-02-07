import React, { useState } from "react";
import Buttons from "./Button";
import productDetails from "../data/productDetails";
import { Link } from "react-router-dom";

function Filtering() {
  const [items, setItems] = useState(productDetails);
  const [searchItem, setSearchItem] = useState("");    //searchbar input variable

  const menuItems = [...new Set(productDetails.map((val) => val.category))];
  const menuBrand = [...new Set(productDetails.map((val) => val.brand))];
  const menuColor = [...new Set(productDetails.map((val) => val.color))];

  const filterItem = (curCat) => {
    const newItem = productDetails.filter((newVal) => {
      return newVal.category === curCat;
    });
    setItems(newItem);
  };

  const filterBrand = (curBrand) => {
    const newBrand = productDetails.filter((newVal) => {
      return newVal.brand === curBrand;
    });
    setItems(newBrand);
  };

  const filterColor = (curColor) => {
    const newColor = productDetails.filter((newVal) =>{
      return newVal.color === curColor;
    });
    setItems(newColor);
  }

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = productDetails.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setItems(filteredItems);
  };

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <div className="product-main-sec">
        <div className="left-sec">
          <h4>Filters:</h4>
          <input
            className="w-100 px-4 py-2"
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={handleInputChange}
          />
          <Buttons
            menuItems={menuItems}
            filterItem={filterItem}
            setItem={setItems}
            filterBrand={filterBrand}
            menuBrand={menuBrand}
            menuColor={menuColor}
            filterColor={filterColor}
          />
        </div>
        <div className="right-sec">
          {items.map((product) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img className="photo" src={product.img} alt={product.title} />
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {product.category}
                    </h6>
                    <p className="card-price mb-2">
                      Brand: {product.brand}
                    </p>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-price">₹{product.price}</p>

                  <div className="btn-sec">
                    <button type="button" className="btn btn-success">
                      BUY NOW
                    </button>
                    <button type="button" className="btn btn-success">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filtering;
