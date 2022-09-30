import Button from "@mui/material/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartItem = ({ item }) => {
  const context = useContext(CartContext);
  return (
    <div className="cartItemBox">
      <div className="cartItemImageBox">
        <img
          className="cartItemImage"
          src={item.pictureUrl}
          alt={item.title}
        ></img>
      </div>
      <div className="cartItemTitleAndErrase">
        <Link to={`/item/${item.id}`}>
          <p className="cartItemTitle">Producto: {item.title}</p>
        </Link>
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
        <p className="cartItemCount">
          {item.quantity} item(s) - {item.price} c/u
        </p>
        <p className="cartItemPrice">{`$ ${item.quantity * item.price}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
