import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CircularProgress } from "@mui/material";
import "./ItemListContainer.css";
import { db } from "../utils/firebaseConfig";
import { query, orderBy, where, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let q;
      if (idCategory) {
        q = query(
          collection(db, "products"),
          where("categoryId", "==", Number(idCategory))
        );
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
            setCategoryName("Default");
        }
      } else {
        q = query(collection(db, "products"), orderBy("categoryId"));
        setCategoryName("Todos los productos");
      }
      const querySnapshot = await getDocs(q);
      const dataFromFirestore = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setData(dataFromFirestore);
      setLoading(false);
    }
    fetchData();
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
