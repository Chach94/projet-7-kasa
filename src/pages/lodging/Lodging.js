import { LodgingList } from "../../data/LodgingList";
import { useParams, Navigate } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import "./Lodging.css";

function Lodging() {
  // Utilisation UseParams pour récupération de l'id
  const lodgeId = useParams();

  // Comparaison de l'id de la liste et celle de lodgeId
  const oneLodge = LodgingList.find((el) => el.id === lodgeId.id);

  // condition si onelodge n'est pas défini alors on retourne sur la page error
  if (oneLodge === undefined) {
    return <Navigate replace to="/error" />;
  }
  // Map sur les equipements pour avoir les infos equipement selon L'id
  const equipments = oneLodge.equipments.map((equipement, index) => {
    return <li key={index}>{equipement}</li>;
  });
  // Map sur les tags en fonction de l'id
  const tag = oneLodge.tags.map((tags, index) => {
    return (
      <span className="tag" key={index}>
        {tags}
      </span>
    );
  });

  return (
    <div>
      <section className="wrapper">
        <Header />
        <Slideshow pictures={oneLodge.pictures}></Slideshow>
        <div className="block-lodging">
          <div className="block-info">
            <h2 className="title-lodging">{oneLodge.title}</h2>
            <p className="text-lodging">{oneLodge.location}</p>
            <Tag tag={tag} />
          </div>
          <div className="block-host-lodging">
            <Host name={oneLodge.host.name} picture={oneLodge.host.picture} />
            <Rating rating={oneLodge.rating} />
          </div>
        </div>

        <div className="collapse-block">
          <Collapse
            title="Description"
            texte={oneLodge.description}
            fontSize={true}
          ></Collapse>
          <Collapse
            title="Equipements"
            texte={equipments}
            fontSize={true}
          ></Collapse>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Lodging;
