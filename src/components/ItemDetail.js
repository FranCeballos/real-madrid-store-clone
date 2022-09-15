import ItemCount from "./ItemCount";
import CircularProgress from "@mui/material/CircularProgress";
import "./ItemDetail.css";

const ItemDetail = ({ itemData }) => {
  return itemData.id ? (
    <div className="itemDetailFlex">
      <div className="itemDetailImage">
        <img src={itemData.pictureUrl} alt={itemData.title} />
      </div>
      <div className="itemDetailDivider"></div>
      <div className="itemDetailRest">
        <p className="itemDetailTitle">{itemData.title}</p>
        <p className="itemDetailDescription">{itemData.description}</p>
        <p className="itemDetailPrice">{itemData.price}</p>
        <p className="itemDetailStock">Stock: {itemData.stock} unidades</p>
        <ItemCount inicial={0} stock={itemData.stock} />
      </div>
    </div>
  ) : (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  );
};

export default ItemDetail;
