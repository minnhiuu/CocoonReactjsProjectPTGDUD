import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=> {
      const jsonData = localStorage.getItem("cartItems");
      if(jsonData) {
        setCartItems(JSON.parse(jsonData))
      }
  } ,[])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    
  },[cartItems])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };


  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const increaseItem = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id == item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  const decreaseItem = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id == item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }


  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = Number(item.price.replace(/\./g, "").replace(" đ", ""));
        return total + price * item.quantity;
      }, 0)
      .toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };

  const getTotalProduct = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  }


  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };


  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseItem,
        decreaseItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        updateItemQuantity,
        getTotalProduct

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
