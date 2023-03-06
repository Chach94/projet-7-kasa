import "./Host.css";
function Host({ picture, name }) {
  return (
    <div className="block-host">
      <span className="name-host">{name}</span>{" "}
      <img src={picture} alt="proprietaires" className="picture-host" />
    </div>
  );
}

export default Host;
