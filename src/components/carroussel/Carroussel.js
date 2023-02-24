import "./Carroussel.css";
import Flechedroite from "../../assets/flechedroite.png";
import Flechegauche from "../../assets/flechegauche.png";
import { useState } from "react";

function Carroussel({ id, pictures }) {
  console.log(pictures.length - 1);
  return (
    <div className="container-carroussel">
      <img src={pictures[0]} alt="appartement" className="pictures" />
      <button>
        <img src={Flechedroite} alt="fleche" className="fleche-droite" />
      </button>
      <img src={Flechegauche} alt="fleche" className="fleche-gauche" />{" "}
    </div>
  );
}

export default Carroussel;
