import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCart color="action" />
    </Badge>
  );
};

export default CartWidget;
