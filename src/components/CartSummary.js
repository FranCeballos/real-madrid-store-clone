import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CartSummary.css";

const CartSummary = ({
  subtotal,
  tax,
  total,
  discount,
  clickEvent,
  formView,
}) => {
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
        <Button
          onClick={clickEvent}
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Siguiente paso
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
