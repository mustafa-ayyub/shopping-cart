import React, { createContext, useState, useMemo } from "react";
import { PRODUCTS } from "../../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i += 1) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((totalAmount, [item, quantity]) => {
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += quantity * itemInfo.price;
        }
      }
      return totalAmount;
    }, 0);
  };
  


  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      checkout,
      getTotalCartAmount
    }),
    [cartItems]
  );

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
