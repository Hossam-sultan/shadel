"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  description?: string;
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addedMessage: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addedMessage, setAddedMessage] = useState<string | null>(null);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });

    // ✅ اظهار الاشعار
    setAddedMessage(`${item.title} added to cart!`);
    setTimeout(() => setAddedMessage(null), 2000); // يختفي بعد ثانيتين
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
        addedMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
