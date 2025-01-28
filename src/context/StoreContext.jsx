import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1, // Increment quantity or set it to 1 if it doesn't exist
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[itemId] > 1) {
        // Decrease the quantity if greater than 1
        updatedCart[itemId] -= 1;
      } else {
        // Remove the item completely if quantity is 1 or less
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  const deleteFromCart = (itemid) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart }; // Create a shallow copy of the previous cart
      delete updatedCart[itemid]; // Delete the item from the copied object
      return updatedCart; // Return the updated object
    });
  };

  //getting total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
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
    deleteFromCart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
