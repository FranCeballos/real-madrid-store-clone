import ItemCount from "./ItemCount";
import CircularProgress from "@mui/material/CircularProgress";
import "./ItemDetail.css";

const ItemDetail = ({ itemData }) => {
  const index = 0;
  return itemData.length ? (
    <div className="itemDetailFlex">
      <div className="itemDetailImage">
        <img src={itemData[index]?.pictureUrl} alt={itemData[index]?.title} />
      </div>
      <div className="itemDetailDivider"></div>
      <div className="itemDetailRest">
        <p className="itemDetailTitle">{itemData[index]?.title}</p>
        <p className="itemDetailDescription">{itemData[index].description}</p>
        <p className="itemDetailPrice">{itemData[index]?.price}</p>
        <p className="itemDetailStock">
          Stock: {itemData[index]?.stock} unidades
        </p>
        <ItemCount inicial={1} stock={itemData[index].stock} />
      </div>
    </div>
  ) : (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  );
};

export default ItemDetail;
