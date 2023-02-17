import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";

import Picture from "../../assets/ImgHome.png";
import { LodgingList } from "../../data/LodgingList";

import "./Home.css";
function Home() {
  return (
    <div>
      <Header />
      <Banner image={Picture} texte="Chez vous, partout et ailleurs" />

      <div className="block">
        {LodgingList.map((lodging, index) => (
          <Card
            key={`${lodging.id}-${index}`}
            title={lodging.title}
            cover={lodging.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
