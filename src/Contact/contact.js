import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import ContactForm from "../Components/contactForm";
import "./contact.scss";

const Contact = () => {
  const ContactUsImage = process.env.PUBLIC_URL + "/images/player-celebrations.png";
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ContactUsImage})`
  };
  return (
    <div>
      <Header />
      <div>
        <div className="hero-image-section">
          <div className="hero-image-about-us" style={styles}>
            <div className="hero-text">
              <h1 className="hero-heading">Talk to Us</h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="row py-5">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <p>
                Need help with <strong>membership</strong>,{" "}
                <strong>our events</strong> and <strong>game day</strong>{" "}
                information or have general feedback about your LFC supporters
                club Experience? Here are the ways you can find an answer or get
                in touch:
              </p>
              <br />
              <br />
              <ContactForm />
            </div>
            <div className="col-sm-2"></div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
