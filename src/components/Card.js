import "../styles/style.scss";

function Card({ id, title, cover }) {
  return (
    <div>
      <span>{id}</span>
      <span className="lodge-title">{title}</span>
      <img src={cover} alt="appartement" className="lodge-img" />
    </div>
  );
}

export default Card;
