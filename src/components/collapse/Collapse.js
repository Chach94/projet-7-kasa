import fleche from "../../assets/flechecollapse.png";
import "./Collapse.css";
function Collapse({ title, texte }) {
  return (
    <div className="container-about">
      <div className="block-title">
        <h2 className="title-about">{title}</h2>

        <span className="button">
          <img src={fleche} alt="fleche" />
        </span>
      </div>
      <div className="block-text">
        <p className="text-about">{texte}</p>
      </div>
    </div>
  );
}
export default Collapse;
