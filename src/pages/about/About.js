// IMPORT DES COMPOSANTS
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";

// IMPORT DATA
import { Aboutdata } from "../../data/Aboutdata";

// IMPORT IMAGE
import Picture from "../../assets/ImgAbout.png";
import "./About.css";

function About() {
  return (
    <div>
      <section className="wrapper">
        <Header />
        <Banner image={Picture} />
        <div className="container">
          {Aboutdata.map((about, index) => (
            <Collapse
              key={`${about}-${index}`}
              title={about.title}
              texte={about.texte}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
