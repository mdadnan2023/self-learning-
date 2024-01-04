import React, { useState } from 'react';


 
function Searching({ product }) {

    const [products, setProducts] = useState(product);
    const [searchVal, setSearchVal] = useState("");


    function handleSearchClick() {
        if (searchVal === "") { setProducts(product); return; }
        const filterBySearch = product.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    }
    const mystyle = {
        marginLeft: "60px",
        marginTop: "20px",
        fontWeight: "700",
        display: "flex",
        gap: "8px"
    };
 
    return (
        <div>
            <div style={mystyle}>
                <input onChange={e => setSearchVal(e.target.value)}>
                </input>
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div>
 
                {products.map((product) => {
                    return (
                        <div style={mystyle}>{product}</div>
                    )
                })
                }
 
            </div>
        </div>
    );
}
 
export default Searching;