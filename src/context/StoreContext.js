
import React, { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [wishlist, cart]);

  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const isAlreadyWishlisted = prevWishlist.some((wish) => wish.id === item.id);
      if (isAlreadyWishlisted) {
        return prevWishlist.filter((wish) => wish.id !== item.id);
      } else {
        return [...prevWishlist, item];
      }
    });
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (item, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex >= 0) {
        updatedCart[itemIndex].quantity = Number(newQuantity);
      }
      return updatedCart;
    });
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex >= 0) {
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex].quantity -= 1;
        } else {
          updatedCart.splice(itemIndex, 1);
        }
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]); // Clearing the cart
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart, // Providing clearCart function
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

