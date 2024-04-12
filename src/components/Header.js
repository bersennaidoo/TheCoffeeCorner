import { Link } from "react-router-dom";
import CoffeeLogo from "../images/logo.png";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>{title}</h1>
      </Link>
    </header>
  );
}

export default Header;
