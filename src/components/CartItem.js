import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartItem = ({ item }) => {
  const context = useContext(CartContext);
  return (
    <div className="cartItemBox">
      <div className="space"></div>
      <div className="cartItemImageBox">
        <img
          className="cartItemImage"
          src={item.pictureUrl}
          alt={item.title}
        ></img>
      </div>
      <div className="cartItemTitleBox">
        <Link to={`/item/${item.id}`}>
          <p className="cartItemTitle">Producto: {item.title}</p>
        </Link>
      </div>
      <div className="cartItemCountAndPrice">
        <p className="cartItemCount">
          {item.quantity} item(s) - {item.price} c/u
        </p>
        <p className="cartItemPrice">{`$ ${item.quantity * item.price}`}</p>
      </div>
      <IconButton
        className="cartRemoveItemButton"
        variant="contained"
        onClick={() => {
          context.removeItem(item.id);
        }}
        starticon={<RemoveCircleIcon />}
      >
        <RemoveCircleIcon />
      </IconButton>
    </div>
  );
};

export default CartItem;
