import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CircularProgress } from "@mui/material";
import { firestoreFetch } from "../utils/firestoreFetch";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    firestoreFetch(idCategory)
      .then((result) => setData(result))
      .then(() => {
        switch (Number(idCategory)) {
          case 1:
            setCategoryName("Equipaciones");
            break;
          case 2:
            setCategoryName("Entrenamiento");
            break;
          case 3:
            setCategoryName("Moda");
            break;
          default:
            setCategoryName("Todos los productos");
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [idCategory]);

  return loading ? (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  ) : (
    <div>
      <h1 className="tituloSeccion">{categoryName}</h1>
      <ItemList itemData={data} />
    </div>
  );
};

export default ItemListContainer;
