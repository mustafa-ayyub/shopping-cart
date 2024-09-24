import React, { useContext } from "react";
import { PRODUCTS } from "../../../Products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const hasItemsInCart = Object.values(cartItems).some((itemCount) => itemCount > 0);

  const handleContinueShopping = () => navigate("/");

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.filter((product) => cartItems[product.id] > 0).map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      <div className="checkout">
        {hasItemsInCart ? (
          <>
            <p className="subtotal">Subtotal: ${totalAmount}</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button>Checkout</button>
          </>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
