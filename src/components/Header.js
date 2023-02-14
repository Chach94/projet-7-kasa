import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav>
      <img src={logo} alt="kasa" />
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  );
}

export default Header;
