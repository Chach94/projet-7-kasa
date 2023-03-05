import React, { useState } from "react";
import fleche from "../../assets/flechecollapse.png";

import "./Collapse.css";
function Collapse({ title, texte }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="container-about">
      <div className="block-title">
        <h2 className="title-about">{title}</h2>

        <button
          onClick={() => setOpen(!open)}
          className={!open ? "button-up" : "button-down"}
        >
          <img src={fleche} alt="fleche" />
        </button>
      </div>

      {!open ? (
        <div className="block-text">
          <p className="text-about">{texte}</p>
        </div>
      ) : (
        <div className="block-text"></div>
      )}
    </div>
  );
}
export default Collapse;
