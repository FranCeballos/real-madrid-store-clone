import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

function CartWidget() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </div>
  );
}

export default CartWidget;
