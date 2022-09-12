import React, { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import itemData from "../utils/itemData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(2000, itemData)
      .then((datos) => setData(itemData))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <ItemDetail itemData={data} />
    </>
  );
};

export default ItemDetailContainer;
