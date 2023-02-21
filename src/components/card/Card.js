import { Link } from "react-router-dom";
import "./Card.css";
function Card({ id, title, cover }) {
  return (
    <div className="container-lodge">
      <Link to="/lodging">
        <img src={cover} alt="appartement" className="lodge-img" />
        <span className="lodge-title">{title}</span>
      </Link>
    </div>
  );
}

export default Card;
