import "./Carroussel.css";
import Flechedroite from "../../assets/flechedroite.png";
import Flechegauche from "../../assets/flechegauche.png";
import React, { useState } from "react";

function Carroussel({ pictures }) {
  const [count, setCount] = useState(0);
  const length = pictures.length;

  const nextPicture = () => {
    setCount(count === length - 1 ? 0 : count + 1);
  };
  const prevPicture = () => {
    setCount(count === 0 ? length - 1 : count - 1);
  };
  return (
    <div className="container-carroussel">
      <button onClick={nextPicture} className="fleche-droite">
        <img src={Flechedroite} alt="fleche" className="fleche" />
      </button>

      <button onClick={prevPicture} className="fleche-gauche">
        <img src={Flechegauche} alt="fleche" className="fleche" />
      </button>
      {pictures.map((picture, index) => (
        <div key={index}>
          {index === count && (
            <img src={picture} alt="appartement" className="pictures" />
          )}
        </div>
      ))}
      <span className="count">
        {count + 1}/{length}
      </span>
    </div>
  );
}

export default Carroussel;
