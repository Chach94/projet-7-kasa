import etoilevide from "../../assets/etoilevide.png";
import etoilepleine from "../../assets/etoilepleine.png";

import "./Rating.css";

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((rangeElt, index) =>
        rating >= rangeElt ? (
          <img className="star" key={index} src={etoilepleine} alt="etoile" />
        ) : (
          <img className="star" key={index} src={etoilevide} alt="etoile" />
        )
      )}
    </div>
  );
}

export default Rating;
