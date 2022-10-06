import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import { db } from "../utils/firebaseConfig";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import CartForm from "./CartForm";
import "./Cart.css";

const Cart = ({ discount }) => {
  const context = useContext(CartContext);
  const [formView, setFormView] = useState(false);
  const [alertView, setAlertView] = useState(false);
  const [lastOrderId, setLastOrderId] = useState("");

  let subtotal = context.calcSubtotal();
  let tax = subtotal * 0.21;
  let total = subtotal + tax - discount;

  const goToFormView = () => {
    setFormView(true);
  };

  const exitFormView = () => {
    setFormView(false);
  };

  useEffect(() => {
    setFormView(false);
  }, [context.cartList]);

  const order = async (name, email, phone) => {
    const cartListFirestore = context.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    cartListFirestore.map(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity),
      });
    });

    const newOrder = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      items: cartListFirestore,
      date: serverTimestamp(),
      total: total,
    };

    const orderRef = doc(collection(db, "orders"));
    await setDoc(orderRef, newOrder);
    setLastOrderId(orderRef.id);
    setAlertView(true);
    context.clear();
    setFormView(false);
  };

  const CartButtonLayouts = () => {
    return (
      <div className="cartButtonsFlex">
        {formView ? (
          <Button onClick={exitFormView} startIcon={<ArrowBackIosNewIcon />}>
            Atrás
          </Button>
        ) : (
          <Link to="/">
            <Button startIcon={<ArrowBackIosNewIcon />}>
              Seguir comprando
            </Button>
          </Link>
        )}
        {!formView ? (
          context.cartList.length ? (
            <Button
              variant="outlined"
              onClick={context.clear}
              startIcon={<DeleteIcon />}
            >
              Borrar todo
            </Button>
          ) : (
            <Button
              variant="outlined"
              disabled
              onClick={context.clear}
              startIcon={<DeleteIcon />}
            >
              Borrar todo
            </Button>
          )
        ) : (
          <div></div>
        )}
      </div>
    );
  };

  const CartViewContent = () => {
    return formView ? (
      <div>
        <CartForm
          orderFunction={(nameInfo, emailInfo, phoneInfo) =>
            order(nameInfo, emailInfo, phoneInfo)
          }
        />
      </div>
    ) : context.cartList.length ? (
      <div className="cartDescription">
        <ul className="cartList">
          {context.cartList.map((item) => (
            <li key={Math.random()}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <CartSummary
          total={total}
          tax={tax}
          subtotal={subtotal}
          discount={discount}
          clickEvent={goToFormView}
          dissableButton={formView}
        />
      </div>
    ) : (
      <p className="cartItemEmptyCart">No hay items en tu carrito</p>
    );
  };

  return (
    <div className="cart">
      <h1 className="cartTitle">Carrito</h1>
      {CartButtonLayouts()}
      {CartViewContent()}
      {alertView ? (
        <Alert
          className="cartFinishAlert"
          variant="filled"
          severity="success"
          onClose={() => {
            setAlertView(false);
          }}
        >
          Compra completada con éxito. ID de la compra: {lastOrderId}
        </Alert>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
