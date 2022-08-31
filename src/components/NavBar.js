import RealMadridLogo from "../images/realMadridStore.png";
import NavOption from "./NavOption";
import CartWidget from "./CartWidget";

const NavBar = () => {
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
          <CartWidget className="navCart" />
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
