import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./CartForm.css";
import { useState } from "react";

const CartForm = ({ orderFunction }) => {
  const [nameInfo, setNameInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");
  const [phoneInfo, setPhoneInfo] = useState("");

  return (
    <div className="formContainer">
      <h1 className="formTitle">Llená tus datos para completar la compra</h1>
      <div className="formInputs">
        <TextField
          required
          type="text"
          id="outlined-required"
          label="Nombre completo"
          defaultValue=""
          onChange={(e) => {
            setNameInfo(e.target.value);
          }}
        />
        <TextField
          required
          type="email"
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) => {
            setEmailInfo(e.target.value);
          }}
        />
        <TextField
          required
          type="number"
          id="outlined-required"
          label="Teléfono"
          defaultValue=""
          onChange={(e) => {
            setPhoneInfo(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => orderFunction(nameInfo, emailInfo, phoneInfo)}
          endIcon={<SendIcon />}
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default CartForm;
