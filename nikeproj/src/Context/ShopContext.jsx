import React, { createContext, useState, useEffect } from 'react';
import all_shoes from '../Components/Assets/allshoes';

export const ShopContext = createContext(null);


const getDefault = () => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) return JSON.parse(savedCart);
  console.log("HEL")
  let cart = {};
  for (let index = 0; index < all_shoes.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefault());

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };
  const gettotalamount = () =>{
    let total =0 ;
    for(let item in cartItems){
      if(cartItems[item]>0){
         let iteminfo = all_shoes.find((product) => (product.id) === Number(item))
         console.log("ITEM  : " + iteminfo)
         total += iteminfo.Price * cartItems[item];
      }
    }
    return total;
  }

  const gettotalelements = () =>{
     let total =0 ;
     for(let item in cartItems){
      if(cartItems[item]>0){
         total += cartItems[item];
      }
     }
     return total;
  }

  const contextValue = { gettotalelements , gettotalamount,  all_shoes, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
