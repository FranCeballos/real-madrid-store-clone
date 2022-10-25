import { useEffect, useState } from "react";
import RealMadridLogo from "../images/realMadridStore.png";
import NavOption from "./NavOption";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import "./NavBar.css";

const NavBar = () => {
  const [menuView, setMenuView] = useState(false);

  const MenuList = ({ closeMenuHandler, className }) => {
    return (
      <ul className={className}>
        <NavOption
          to="/category/1"
          name="EQUIPACIONES"
          onClick={closeMenuHandler}
        />
        <NavOption
          to="/category/2"
          name="ENTRENAMIENTO"
          onClick={closeMenuHandler}
        />
        <NavOption to="/category/3" name="MODA" onClick={closeMenuHandler} />
      </ul>
    );
  };

  const openMenuHandler = () => {
    setMenuView(true);
  };

  const closeMenuHandler = () => {
    setMenuView(false);
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/" onClick={closeMenuHandler}>
          <img
            className="navLogo"
            src={RealMadridLogo}
            alt="Logo Real Madrid"
            height="60px"
          ></img>
        </Link>
        <MenuList className="navListDesktop" />
        <div className="iconsBox">
          <Link to="/cart" onClick={closeMenuHandler}>
            <IconButton>
              <CartWidget className="navCart" />
            </IconButton>
          </Link>
          {menuView ? (
            <>
              <IconButton className="menuIcon" onClick={closeMenuHandler}>
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <IconButton className="menuIcon" onClick={openMenuHandler}>
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </nav>
      <div className={`menuBox ${menuView ? "active" : ""}`}>
        <MenuList
          className="navListMobile"
          closeMenuHandler={closeMenuHandler}
        />
      </div>
    </header>
  );
};

export default NavBar;
