import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets"; // Ensure the path is correct.

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // Use an object for better handling of item quantities.

  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,  
      [itemId]: (prevCart[itemId] || 0) + 1, // Increment quantity or initialize to 1.
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[itemId] > 1) {
        // Decrease the quantity if greater than 1.
        updatedCart[itemId] -= 1;
      } else {
        // Remove the item completely if quantity is 1 or less.
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId]; // Delete the item from the cart.
      return updatedCart;
    });
  };

  // Getting the total cart amount.
  const getTotalCartAmount = (cartItems, food_list,) => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId]; // Ensure itemInfo exists.
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    deleteFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
