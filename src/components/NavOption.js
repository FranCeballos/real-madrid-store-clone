function NavOption(props) {
  return (
    <li>
      <a className="navItem" href="">
        {props.name}
      </a>
    </li>
  );
}

export default NavOption;
