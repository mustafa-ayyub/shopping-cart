import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>E-commerce App</h3>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=> (
            <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
