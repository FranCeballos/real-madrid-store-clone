import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CircularProgress } from "@mui/material";
import { firestoreFetch } from "../utils/firestoreFetch";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryHeroImg, setCategoryHeroImg] = useState("");
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
            setCategoryHeroImg("/images/heros/KitHero.webp");
            break;
          case 2:
            setCategoryName("Entrenamiento");
            setCategoryHeroImg("/images/heros/TrainingHero.webp");
            break;
          case 3:
            setCategoryName("Moda");
            setCategoryHeroImg("/images/heros/ModaHero.webp");
            break;
          default:
            setCategoryName("Real Madrid Store");
            setCategoryHeroImg("/images/heros/MainHero.webp");
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
    window.scrollTo(0, 0);
  }, [idCategory]);

  return loading ? (
    <div className="circularProgressContainer">
      <CircularProgress className="circularProgress" />
    </div>
  ) : (
    <div className="ItemListContainer">
      <div className="heroImgContainer">
        <img className="heroImg" src={categoryHeroImg} alt={categoryName}></img>
      </div>
      <h1 className="sectionTitle">{categoryName}</h1>
      <div className="itemList">
        <ItemList itemData={data} />
      </div>
    </div>
  );
};

export default ItemListContainer;
