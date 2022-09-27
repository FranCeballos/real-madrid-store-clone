import { useContext } from "react";
import Button from "@mui/material/Button";
import { CartContext } from "./CartContext";
import "./CartSummary.css";

const CartSummary = ({ discount }) => {
  const context = useContext(CartContext);
  let subtotal = context.calcSubtotal();
  let tax = subtotal * 0.21;

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
        <p className="cartSummaryValue">$ {subtotal + tax - discount}</p>
      </div>
      <div className="cartSummaryCat">
        <Button variant="contained">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default CartSummary;
