import logo from "../../assets/logo2.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="container-footer">
      <div className="footer">
        <img src={logo} alt="logo footer" className="logo-footer" />
        <p className="text-footer"> © 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
