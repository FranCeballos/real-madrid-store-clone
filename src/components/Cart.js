import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const context = useContext(CartContext);
  return (
    <div className="cart">
      <h1 className="cartTitle">Carrito</h1>
      <div className="cartButtonsFlex">
        <Link to="/">
          <Button variant="contained">Seguir comprando</Button>
        </Link>
        <Button variant="outlined" onClick={context.clear}>
          Borrar todo
        </Button>
      </div>
      {context.cartList.length ? (
        <div className="cartDescription">
          <ul className="cartList">
            {context.cartList.map((item) => (
              <li key={Math.random()}>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
          <CartSummary discount={100} />
        </div>
      ) : (
        <p className="cartItemEmptyCart">No hay items en tu carrito</p>
      )}
    </div>
  );
};

export default Cart;
