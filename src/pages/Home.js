import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";

import Picture from "../assets/ImgHome.png";
import { LodgingList } from "../data/LodgingList";

import "../styles/style.scss";
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
