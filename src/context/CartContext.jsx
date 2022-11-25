import React, { useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
      toast.success(`Se agregó ${quantity} ${item.name} al carrito!`);
    }
    item.stock = item.stock - quantity;
  };

  const clearCart = () => setCart([]);

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () => {
    return cart.reduce((acu, prod) => acu + prod.quantity * prod.price, 0);
  };

  const totalProducts = () => {
    return cart.reduce((acu, prod) => acu + prod.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
