import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import { LodgingList } from "../data/LodgingList";
function Home() {
  return (
    <div>
      <Header />
      <h1>Accueil</h1>
      <div>
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
