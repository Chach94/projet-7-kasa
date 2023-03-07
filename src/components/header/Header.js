import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <div className="navbarre">
      <img className="logo-header" src={logo} alt="kasa" />
      <nav className="navtext">
        <Link to="/" className="navhome">
          Accueil
        </Link>
        <Link to="/about" className="navhome">
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
