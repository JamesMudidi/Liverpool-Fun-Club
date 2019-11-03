import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Map from "../Components/map";
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
                We are the{" "}
                <strong>Official Liverpool Supporters Club (OLSCUG) </strong>
                supporters in <strong>Uganda </strong>
                made up of resiliant and football loving{" "}
                <strong>Kopites</strong>.
                <br />
                <br />
                <a href="/certificate">See official branch certificate here.</a>
                <br />
                <br />
                Members meet at <strong>Arena Lounge Bugolobi </strong>
                located on <strong>Kireka Rd, Kampala</strong> for match viewing
                and have a bond as a family.
              </p>
              <br />
              <h2 className="block-title">Membership</h2>
              <p>
                Become a member today and get{" "}
                <strong>exclusive benefits</strong>. To join{" "}
                <strong>OLSCUG</strong>, you must fulfill the following:
                <br />
                <br />
                <ol>
                  <li>
                    You will need a monthly subscription fee of UShs 10,000.
                  </li>
                  <li>
                    Send your your information to us and{" "}
                    <strong>You'll Never Walk Alone</strong>.
                  </li>
                </ol>
                <br />
                <strong>Membership Benefits</strong>
                <br />
                <br />
                As a member of <strong>OLSCUG</strong>, you have access to the
                following benefits:
                <br />
                <br />
                <ol>
                  <li>
                    Priority entry to match viewings at Arena Sports Bar and
                    lounge.
                    <ul>
                      <i>
                        <li>
                          Subject to a game-by-game agreement between OLSCUG and
                          Arena Sports Bar and lounge.
                        </li>
                      </i>
                      <i>
                        <li>
                          Priority entry does NOT cover guests of members.
                        </li>
                      </i>
                    </ul>
                  </li>
                  <li>Access to OLSCUG member-only events.</li>
                </ol>
              </p>
              <a href="/contact" className="btn-red-red my-4 btn btn-primary">
                Join Now
              </a>
              <br />
              <br />
              <h2 className="block-title">Find Location</h2>
              <Map />
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
