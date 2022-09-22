import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
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
        <ul className="cartList">
          {context.cartList.map((item) => (
            <li key={Math.random()}>
              <div className="cartItemBox">
                <div className="cartItemImageBox">
                  <img
                    className="cartItemImage"
                    src={item.pictureUrl}
                    alt={item.title}
                  ></img>
                </div>
                <div className="cartItemTitleAndErrase">
                  <p>Producto: {item.title}</p>
                  <Button
                    variant="contained"
                    onClick={() => {
                      context.removeItem(item.id);
                    }}
                  >
                    Quitar producto
                  </Button>
                </div>
                <div className="cartItemCountAndPrice">
                  <p className="cartItemCount">{item.quantity} item(s)</p>
                  <p className="cartItemPrice">{item.price} c/u</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cartItemEmptyCart">No hay items en tu carrito</p>
      )}
    </div>
  );
};

export default Cart;
