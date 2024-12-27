import React, { createContext, useState, useEffect } from 'react';
import all_shoes from '../Components/Assets/allshoes';

export const WishlistContext = createContext(null);

// Function to initialize the wishlist state
const getDefaultWishlist = () => {
  const savedWish = localStorage.getItem('wishItems');
  if (savedWish) return JSON.parse(savedWish);

  // Initialize wishlist with 0 for each item
  let wishes = {};
  for (let index = 0; index < all_shoes.length; index++) {
    wishes[index] = 0;
  }
  return wishes;
};

const WishlistContextProvider = (props) => {
  const [wishItems, setWishItems] = useState(getDefaultWishlist());

  // Persist wishlist data in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishItems', JSON.stringify(wishItems));
  }, [wishItems]);

  // Function to add an item to the wishlist
  const addToWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the wishlist
  const removeFromWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  // Calculate the total value of items in the wishlist
  const getTotalAmount = () => {
    let total = 0;
    for (let item in wishItems) {
      if (wishItems[item] > 0) {
        const itemInfo = all_shoes.find((product) => product.id === Number(item));
        if (itemInfo) {
          total += itemInfo.Price * wishItems[item];
        }
      }
    }
    return total;
  };

  // Calculate the total number of items in the wishlist
  const getTotalElements = () => {
    let total = 0;
    for (let item in wishItems) {
      if (wishItems[item] > 0) {
        total += wishItems[item];
      }
    }
    return total;
  };

  // Context value to be provided to consumers
  const contextValue = {
    all_shoes,
    wishItems,
    addToWish,
    removeFromWish,
    getTotalAmount,
    getTotalElements,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
