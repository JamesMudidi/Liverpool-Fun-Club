import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Map2 from "../Components/map"
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
              <h1 className="hero-heading">Who We Are</h1>
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
                Members meet at <strong>Arena Sports Bar and lounge </strong>
                located <strong>on 8 Bukoto St, Kampala</strong> for
                match viewing and have a bond as a family.
              </p>
              <br />
              <Map2 />
            </div>
          </div>
          <div className="col-sm-2"></div>
          <div className="row py-5">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <h3>
                <strong>Become a member today and get exclusive benefits</strong>
              </h3>
              <br />
              <p>
                <h4>
                  <strong>Membership Registration</strong>
                </h4>
                <strong>To join OLSCUG,</strong> you must fulfill the following:<br />
                <ol>
                  <li>You will need a monthly subscription fee of UShs 10,000.</li>
                  <li>Send your your information to us and <strong>You Will Never Walk Alone</strong>.</li>
                </ol>
              </p>
              <br />
              <p>
                <h4>
                  <strong>Membership Benefits</strong>
                </h4>
                <strong>As a member of OLSCUG,</strong> you have access to the following benefits:<br />
                <ol>
                  <li>
                    Priority entry to match viewings at Arena Sports Bar and lounge
                                        <ul>
                      <i><li>Subject to a game-by-game agreement between OLSCUG and Arena Sports Bar and lounge</li></i>
                      <i><li>Priority entry does NOT cover guests of members</li></i>
                    </ul>
                  </li>
                  <li>Access to OLSCUG member-only events</li>
                </ol>
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
