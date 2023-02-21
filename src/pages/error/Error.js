// importation des composents footer et header
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// importation des liens via react router
import { Link } from "react-router-dom";
//
import "./Error.css";

function Error() {
  return (
    <div>
      <Header />
      <h1 className="title-error">404</h1>
      <p className="paragraphe-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="lien-error">
        Retourner sur la page d'accueil
      </Link>
      <Footer />
    </div>
  );
}

export default Error;