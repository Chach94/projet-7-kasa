import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

import Picture from "../assets/ImgAbout.png";

function About() {
  return (
    <div>
      <Header />
      <Banner image={Picture} />
      <Footer />
    </div>
  );
}

export default About;
