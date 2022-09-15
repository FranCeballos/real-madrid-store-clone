import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import itemData from "../utils/itemData";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      customFetch(
        2000,
        itemData.filter((item) => item.categoryId === Number(idCategory))
      )
        .then((datos) => setData(datos))
        .then((datos) => {
          switch (idCategory) {
            case "1":
              setCategoryName("Equipaciones");
              break;
            case "2":
              setCategoryName("Entrenamiento");
              break;
            case "3":
              setCategoryName("Moda");
              break;
            default:
              setCategoryName("Todos los productos");
          }
        })
        .catch((err) => console.log(err));
    } else {
      customFetch(2000, itemData)
        .then((datos) => setData(datos))
        .then((datos) => setCategoryName("Todos los productos"))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <div>
      <h1 className="tituloSeccion">{categoryName}</h1>
      <ItemList itemData={data} />
    </div>
  );
};

export default ItemListContainer;
