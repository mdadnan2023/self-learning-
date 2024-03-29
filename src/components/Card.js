import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ product }) {

    return (
        <div>
            {
                product.map((product) => {
                    return (
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
                    );
                })
            }
        </div>
    )
}
