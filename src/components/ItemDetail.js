import { useState } from "react";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ itemData }) => {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);

  const onAdd = (count) => {
    setItemCount(count);
    context.addItem(itemData, count);
  };

  return itemData.id ? (
    <div>
      <Link to={`/category/${itemData.categoryId}`}>
        <Button
          className="itemDetailBackButton"
          startIcon={<ArrowBackIosNewIcon />}
        >
          {" "}
          Atras
        </Button>
      </Link>
      <div className="itemDetailFlex">
        <div className="itemDetailImage">
          <img src={itemData.pictureUrl} alt={itemData.title} />
        </div>
        <div className="itemDetailDivider"></div>
        <div className="itemDetailRest">
          <p className="itemDetailTitle">{itemData.title}</p>
          <p className="itemDetailDescription">{itemData.description}</p>
          <p className="itemDetailPrice">$ {itemData.price}</p>
          <p className="itemDetailStock">Stock: {itemData.stock} unidades</p>
          {itemCount === 0 ? (
            <ItemCount inicial={0} stock={itemData.stock} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <Button
                variant="contained"
                color="success"
                endIcon={<ArrowForwardIosIcon />}
              >
                Ir al carrito
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  );
};

export default ItemDetail;
