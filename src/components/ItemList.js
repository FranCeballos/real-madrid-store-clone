import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";
import customFetch from "../utils/customFetch";
import itemData from "../utils/itemData";
import CircularProgress from "@mui/material/CircularProgress";

const ItemList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(2000, itemData)
      .then((datos) => setData(itemData))
      .catch((err) => console.log(err));
  });
  return data.length ? (
    <div className="itemListGrid">
      {data.map((item, index) => (
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
