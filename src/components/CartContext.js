import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addItem = (item, quantity) => {
    const foundItem = cartList.find((product) => product.id === item.id);
    if (foundItem === undefined) {
      item.quantity = quantity;
      setCartList([...cartList, item]);
    } else {
      foundItem.quantity += quantity;
      setCartList([...cartList]);
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

  const calcQuantity = () => {
    let countArray = cartList.map((item) => item.quantity);
    return countArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
  };

  const calcSubtotal = () => {
    let subtotalArray = cartList.map((item) => item.quantity * item.price);
    return subtotalArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        calcQuantity,
        calcSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
