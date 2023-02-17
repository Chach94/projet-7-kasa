import "./Banner.css";

function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img src={image} alt="nature" className="img" />
      <h1 className="title-banner">{texte}</h1>
    </div>
  );
}

export default Banner;
