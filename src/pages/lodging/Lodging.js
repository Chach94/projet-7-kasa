import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carroussel from "../../components/carroussel/Carroussel";
import Collapse from "../../components/collapse/Collapse";
import "./Lodging.css";
import { LodgingList } from "../../data/LodgingList";
import { useParams } from "react-router-dom";

function Lodging() {
  const lodgId = useParams();
  const Info = LodgingList.find((el) => el.id === lodgId.id);
  console.log(Info);

  return (
    <div>
      <Header />
      <Carroussel pictures={Info.pictures}></Carroussel>
      <h2 className="title-lodging">{Info.title}</h2>
      <p className="text-lodging">{Info.location}</p>
      <div className="collapse-block">
        <Collapse title="Description" texte={Info.description}></Collapse>
        <Collapse title="Equipements" texte={Info.equipments}></Collapse>
      </div>
      <Footer />
    </div>
  );
}

export default Lodging;
