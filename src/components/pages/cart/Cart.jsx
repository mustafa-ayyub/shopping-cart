import React, { useContext, useState, useMemo } from "react";
import { PRODUCTS } from "../../../Products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import { handleCheckout } from "../../../utility/CartHelper";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = useMemo(() => getTotalCartAmount(), [cartItems]);
  const navigate = useNavigate();
  const stripe = useStripe();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const filteredCartItems = useMemo(
    () => PRODUCTS.filter((product) => cartItems[product.id] > 0),
    [cartItems]
  );

  const handleContinueShopping = () => navigate("/");

  if (filteredCartItems.length === 0) {
    return (
      <div className="cart">
        <h3>Your cart is empty</h3>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart Items</h1>
      </div>

      <div className="cart-items">
        {filteredCartItems.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>

      <div className="checkout">
        <p className="subtotal">Subtotal: ${totalAmount.toFixed(2)}</p>
        <button onClick={handleContinueShopping} disabled={loading}>
          Continue Shopping
        </button>
        <button
          onClick={() =>
            handleCheckout({
              cartItems,
              stripe,
              setLoading,
              setErrorMessage,
              PRODUCTS,
            })
          }
          disabled={loading}
        >
          {loading ? "Processing..." : "Checkout"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Cart;
