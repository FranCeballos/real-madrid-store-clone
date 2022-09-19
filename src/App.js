import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element="404" />
      </Routes>
    </Router>
  );
}

export default App;
