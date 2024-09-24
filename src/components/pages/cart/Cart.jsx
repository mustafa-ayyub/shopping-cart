import React, { useContext } from "react";
import { PRODUCTS } from "../../../Products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";
import { CartItem } from "./CartItem";
import "./cart.css";

const Cart = () => {
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(
          (product) => cartItems[product.id] > 0 && <CartItem data={product} />
        )}
      </div>
    </div>
  );
};

export default Cart;
