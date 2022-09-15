import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import itemData from "../utils/itemData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      itemData.find((item) => item.id === Number(idItem))
    )
      .then((datos) => setData(datos))
      .catch((err) => console.log(err));
  }, [idItem]);
  return (
    <>
      <ItemDetail itemData={data} />
    </>
  );
};

export default ItemDetailContainer;
