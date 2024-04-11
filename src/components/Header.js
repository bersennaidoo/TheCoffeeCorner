import CoffeeLogo from "../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header-component">
      <img src={CoffeeLogo} alt="coffee logo" />
      <h1>The Coffee Corner</h1>
    </header>
  );
}

export default Header;
