import { LodgingList } from "../../data/LodgingList";
import { useParams, Navigate } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carroussel from "../../components/carroussel/Carroussel";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import "./Lodging.css";

function Lodging() {
  const lodgId = useParams();

  const Info = LodgingList.find((el) => el.id === lodgId.id);
  if (Info === undefined) {
    return <Navigate replace to="/error" />;
  }

  const equipments = Info.equipments.map((equipement, index) => {
    return <li key={index}>{equipement}</li>;
  });

  const tag = Info.tags.map((tags, index) => {
    return (
      <span className="tag" key={index}>
        {tags}
      </span>
    );
  });

  return (
    <div>
      <Header />
      <Carroussel pictures={Info.pictures}></Carroussel>
      <h2 className="title-lodging">{Info.title}</h2>
      <p className="text-lodging">{Info.location}</p>
      <Tag tag={tag} />
      <div className="lodging-host">
        <Host name={Info.host.name} picture={Info.host.picture} />{" "}
        <Rating rating={Info.rating} />
      </div>

      <div className="collapse-block">
        <Collapse title="Description" texte={Info.description}></Collapse>
        <Collapse title="Equipements" texte={equipments}></Collapse>
      </div>
      <Footer />
    </div>
  );
}

export default Lodging;
