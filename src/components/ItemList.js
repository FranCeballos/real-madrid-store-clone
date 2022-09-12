import React from "react";
import Item from "./Item";
import "./ItemList.css";
import CircularProgress from "@mui/material/CircularProgress";

const ItemList = ({ itemData }) => {
  return itemData.length ? (
    <div className="itemListGrid">
      {itemData.map((item, index) => (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      ))}
    </div>
  ) : (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  );
};

export default ItemList;
