import "../styles/style.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <div className="container-lodge">
      <Link to="/lodging">
        <span>{id}</span>{" "}
        <img src={cover} alt="appartement" className="lodge-img" />
        <span className="lodge-title">{title}</span>
      </Link>
    </div>
  );
}

export default Card;
