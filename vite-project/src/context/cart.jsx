import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const [animatedItem, setAnimatedItem] = useState(null);

  const addToCart = (item, quantity) => {
    quantity = quantity ? parseInt(quantity) : 1;

    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    setAnimatedItem(item.id);
    setTimeout(() => setAnimatedItem(null), 500);

    if (isItemInCart) {
      const updatedCartItems = cartItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.id !== item.id); //xóa món cũ trước khi thêm mới

      setCartItems([
        { ...isItemInCart, quantity: isItemInCart.quantity + quantity },
        ...updatedCartItems,
      ]);
    } else {
      setCartItems([{ ...item, quantity: quantity }, ...cartItems]);
    }
  };

  const decreaseItem = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount || discount === "0%") return price;
    const priceNum = parseInt(price.replace(/\D/g, ""));
    const discountPercent = parseInt(discount) / 100;
    const discountedPrice = priceNum * (1 - discountPercent);
    const roundedPrice = Math.ceil(discountedPrice / 1000) * 1000;
    return roundedPrice;
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((total, item) => {
      let itemPrice;

      if (item.discount && item.discount !== "0%") {
        itemPrice = calculateDiscountedPrice(item.price, item.discount);
      } else {
        itemPrice =
          typeof item.price === "string"
            ? parseInt(item.price.replace(/\./g, "").replace(" đ", ""))
            : item.price;
      }
      return total + itemPrice * item.quantity;
    }, 0);

    return total.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        animatedItem,
        addToCart,
        decreaseItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalItems,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
