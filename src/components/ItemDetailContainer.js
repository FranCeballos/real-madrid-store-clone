import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    async function firestoreFetchOne() {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData({
          id: idItem,
          ...docSnap.data(),
        });
      } else {
      }
    }
    firestoreFetchOne();
  }, [idItem]);
  return (
    <>
      <ItemDetail itemData={data} />
    </>
  );
};

export default ItemDetailContainer;
