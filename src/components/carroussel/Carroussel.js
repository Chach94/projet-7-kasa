import "./Carroussel.css";
import Flechedroite from "../../assets/flechedroite.png";
import Flechegauche from "../../assets/flechegauche.png";

function Carroussel({ id, pictures }) {
  return (
    <div className="container">
      <img src={pictures} alt="appartement" className="pictures" />
      <img src={Flechedroite} alt="fleche" className="fleche-droite" />
      <img src={Flechegauche} alt="fleche" className="fleche-gauche" />
    </div>
  );
}

export default Carroussel;
