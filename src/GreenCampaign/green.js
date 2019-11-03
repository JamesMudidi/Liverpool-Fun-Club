import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";

const About = () => {
  const GreenCampaignImage =
    process.env.PUBLIC_URL + "/images/green-enviroment.png";
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${GreenCampaignImage})`
  };
  return (
    <div>
      <Header />
      <div>
        <div className="hero-image-section">
          <div className="hero-image-about-us" style={styles}>
            <div className="hero-text">
              <h1 className="hero-heading">Red goes Green</h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="row py-5">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <h2 className="block-title">Tree Planting</h2>
              <p>
                <strong>OLSCUG</strong> has spearheaded a campaign to help
                kopites preserve the environment by offsetting their carbon
                print.
                <br />
                <br />
                Through planting trees in the{" "}
                <strong>Liverpool FC Forest</strong> we have embarked on a
                journey that is quite challenging for everybody. For starters we
                need
                <strong> 1000+</strong> trees to make this dream a reality.
                <br />
                <br />
                The Liverpool FC Forest is a campaign done in partnership with
                <strong>Tree Adoption Uganda</strong> with a lifetime goal to
                plant more than 5 million tree. Any kopite across the globe is
                welcome to be apart of this memorable journey. <strong>#ynwa</strong>
                <br />
                <br />
                <a href="/contact">Reach us for more information.</a>
              </p>
              <br />
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
