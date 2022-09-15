import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [Value, setValue] = useState(props.inicial);

  const clickHandlerAdd = () => {
    Value !== props.stock && setValue(Value + 1);
  };

  const clickHandlerSubtract = () => {
    Value > 0 && setValue(Value - 1);
  };

  const clickHandlerAddCart = () => {
    alert(
      Value > 0
        ? `Se han añadido ${Value} elemento/s al carrito`
        : `No se han añadido elementos a tu carrito`
    );
  };

  return (
    <div className="itemCounterContainer">
      <Button onClick={clickHandlerSubtract} variant="outlined">
        -
      </Button>
      <div>
        <p>{Value}</p>
      </div>
      <Button onClick={clickHandlerAdd} variant="outlined">
        +
      </Button>
      {Value > 0 ? (
        <Button onClick={clickHandlerAddCart} variant="contained">
          Añadir a carrito
        </Button>
      ) : (
        <Button onClick={clickHandlerAddCart} variant="contained" disabled>
          Añadir a carrito
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
