import { Link } from "react-router-dom";
import "./NavOption.css";
const NavOption = (props) => {
  return (
    <li onClick={props.onClick}>
      <Link className="navItem" to={props.to}>
        {props.name}
      </Link>
    </li>
  );
};

export default NavOption;
