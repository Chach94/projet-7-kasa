import React, { useState } from "react";
import fleche from "../../assets/flechecollapse.png";

import "./Collapse.css";
function Collapse({ title, texte, fontSize }) {
  const [open, setOpen] = useState(true);
  const className = `title-about ${fontSize ? "lodging-text" : ""}`;
  const classNameText = `text-about ${fontSize ? "lodging-text" : ""}`;
  return (
    <div className="container-about">
      <div className="block-title">
        <h2 className={className}>{title}</h2>

        <button
          onClick={() => setOpen(!open)}
          className={!open ? "button-up" : "button-down"}
        >
          <img src={fleche} alt="fleche" className="fleche" />
        </button>
      </div>

      {!open ? (
        <div className="block-text">
          <p className={classNameText}>{texte}</p>
        </div>
      ) : (
        <div className="block-text"></div>
      )}
    </div>
  );
}
export default Collapse;
