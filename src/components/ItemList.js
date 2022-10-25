import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import "./ItemList.css";
import CircularProgress from "@mui/material/CircularProgress";

const ItemList = ({ itemData }) => {
  return itemData.length ? (
    <div className="itemListGrid">
      {itemData.map((item) => (
        <Link
          to={`/item/${item.id}`}
          key={item.id}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        </Link>
      ))}
    </div>
  ) : (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  );
};

export default ItemList;
