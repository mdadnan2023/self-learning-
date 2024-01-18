import React from 'react';
import productDetails from '../data/productDetails';

function Button({ menuItems, filterItem, setItem }) {
  return (
    <div className='flex gap-8 mx-5'>
      {menuItems.map((Val, id) => {
        return (
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            onClick={() => filterItem(Val)}
            key={id}
          >
            {Val}
          </button>
        );
      })}
      <button
        className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
        onClick={() => setItem(productDetails)}
      >
        All
      </button>
    </div>
  );
}

export default Button;
