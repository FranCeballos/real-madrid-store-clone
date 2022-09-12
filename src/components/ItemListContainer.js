// import ItemCount from "./ItemCount";
import React, { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import itemData from "../utils/itemData";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(2000, itemData)
      .then((datos) => setData(itemData))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ItemList itemData={data} />
    </div>
  );
};

export default ItemListContainer;
