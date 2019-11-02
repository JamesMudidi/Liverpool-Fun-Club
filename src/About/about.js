import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Map from "../Components/map"
import "./about.scss";

const About = () => {
  const AboutUsImage = process.env.PUBLIC_URL + "/images/lfc-celebrations.jpg";
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AboutUsImage})`
  };
  return (
    <div>
      <Header />
      <div>
        <div className="hero-image-section">
          <div className="hero-image-about-us" style={styles}>
            <div className="hero-text">
              <h1 className="hero-heading">About Us</h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="row py-5">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <p>
                The <strong>Official Liverpool Football Club </strong>
                supporters in <strong>Uganda </strong>
                is made up of <strong>Kopites</strong> located in Uganda.
                Members meet at <strong>Arena sports lounge </strong>
                located <strong>on 8 Bukoto St, Kampala</strong> for
                match viewing and have a bond as a family.
              </p>
              <br />
              <Map />
            </div>
          </div>
          <div className="col-sm-2"></div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;
