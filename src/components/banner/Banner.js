import "./Banner.css";

function Banner({ image, texte, tall }) {
  return (
    <div className={`banner ${tall ? "banner-about" : ""}`}>
      <img
        src={image}
        alt="nature"
        className={`img-banner ${tall ? "banner-about" : ""}`}
      />
      <h1 className="title-banner">{texte}</h1>
    </div>
  );
}

export default Banner;
