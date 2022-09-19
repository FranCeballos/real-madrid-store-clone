import RealMadridLogo from "../images/realMadridStore.png";
import NavOption from "./NavOption";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav">
      <nav className="nav">
        <Link to="/">
          <img
            className="navLogo"
            src={RealMadridLogo}
            alt="Logo Real Madrid"
            height="60px"
          ></img>
        </Link>
        <ul className="navList">
          <NavOption to="/category/1" name="EQUIPACIONES" />
          <NavOption to="/category/2" name="ENTRENAMIENTO" />
          <NavOption to="/category/3" name="MODA" />
        </ul>
        <Link to="/cart">
          <CartWidget className="navCart" />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
