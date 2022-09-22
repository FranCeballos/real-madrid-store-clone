import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let newCartList = cartList;
      let objIndex = newCartList.findIndex((obj) => obj.id === item.id);
      newCartList[objIndex].quantity += quantity;
      setCartList(newCartList);
    } else {
      item.quantity = quantity;
      setCartList([...cartList, item]);
    }
  };

  const removeItem = (itemId) => {
    setCartList(cartList.filter((item) => item.id !== itemId));
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    if (cartList.find((item) => item.id === id)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <CartContext.Provider
      value={{ cartList, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
