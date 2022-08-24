import RealMadridLogo from "../images/realMadridStore.png";
import NavOption from "./NavOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function NavBar() {
  return (
    <header className="nav">
      <nav className="nav">
        <a href="">
          <img
            className="navLogo"
            src={RealMadridLogo}
            alt="Logo Real Madrid"
            height="60px"
          ></img>
        </a>
        <ul className="navList">
          <NavOption name="EQUIPACIONES" />
          <NavOption name="ENTRENAMIENTO" />
          <NavOption name="MODA" />
        </ul>
        <a href="">
          <FontAwesomeIcon
            icon={solid("cart-shopping")}
            size={"lg"}
            className="navCart"
          />
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
