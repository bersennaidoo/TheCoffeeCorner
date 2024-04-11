import CoffeeLogo from "../images/logo.png";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header-component">
      <img src={CoffeeLogo} alt="coffee logo" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
