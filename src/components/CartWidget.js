import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { calcQuantity } = useContext(CartContext);

  return (
    <Badge badgeContent={calcQuantity()} color="primary">
      <ShoppingCart color="action" />
    </Badge>
  );
};

export default CartWidget;
