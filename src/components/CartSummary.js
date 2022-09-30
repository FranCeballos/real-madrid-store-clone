import React, { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "./CartContext";
import "./CartSummary.css";
import { db } from "../utils/firebaseConfig";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";

const CartSummary = ({ discount }) => {
  const context = useContext(CartContext);
  let subtotal = context.calcSubtotal();
  let tax = subtotal * 0.21;
  let total = subtotal + tax - discount;

  const order = async () => {
    const cartListFirestore = context.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    cartListFirestore.map(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity),
      });
    });

    const newOrder = {
      buyer: {
        name: "Elon Musk",
        email: "elonmusk@gmail.com",
        phone: 2611234567,
      },
      items: cartListFirestore,
      date: serverTimestamp(),
      total: total,
    };
    const orderRef = doc(collection(db, "orders"));
    await setDoc(orderRef, newOrder);
    context.clear();
  };

  return (
    <div className="cartSummary">
      <p className="cartSummaryTitle">Resumen</p>
      <div className="cartSummaryCat">
        <p className="cartSummarySubtitle">Subtotal</p>
        <p className="cartSummaryValue">$ {subtotal}</p>
      </div>
      <div className="cartSummaryCat">
        <p className="cartSummarySubtitle">IVA 21%</p>
        <p className="cartSummaryValue">$ {tax}</p>
      </div>
      <div className="cartSummaryCat">
        <p className="cartSummarySubtitle">Descuentos</p>
        <p className="cartSummaryValue">$ {discount}</p>
      </div>
      <div className="cartSummaryCat">
        <p className="cartSummarySubtitle">TOTAL</p>
        <p className="cartSummaryValue">$ {total}</p>
      </div>
      <div className="cartSummaryCat">
        <Button onClick={order} variant="contained">
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
