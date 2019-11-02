import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Container } from "react-bootstrap";

const Certficate = () => {
  return (
    <div>
      <Header />
      <Container>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="certificate py-5" align="center">
              <img
                src="images/certificate.jpg"
                alt="official certificate"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
};

export default Certficate;
