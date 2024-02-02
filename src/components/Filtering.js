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

  const [searchItem, setsearchItem] = useState('');
  const [filteredproduct, setfilteredproduct] = useState(productDetails);


  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setsearchItem(searchTerm);

    const filteredItems = filteredproduct.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setfilteredproduct(filteredItems);
  }

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <div className="product-main-sec">
        <div className="left-sec">
          <input value={searchItem} onChange={handleInputChange} type="text" />
          <Buttons
            menuItems={menuItems}
            filterItem={filterItem}
            setItem={setItems}
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
