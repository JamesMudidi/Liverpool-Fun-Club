import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <div className="footer-menu py-5" align="center">
          <a href="/" className="footer-link mr-sm-3 ml-sm-3">
            Home
          </a>
          <a href="/" className="footer-link mr-sm-3 ml-sm-3">
            Membership
          </a>
          <a href="/" className="footer-link mr-sm-3 ml-sm-3">
            Committee
          </a>
          <a href="/" className="footer-link mr-sm-3 ml-sm-3">
            Contact Us
          </a>
          <a href="/" className="footer-link mr-sm-3 ml-sm-3">
            #YWNWA
          </a>
        </div>
        <div className="footer-social" align="center">
          <a href="/">
            <img
              src="images/facebook-logo.png"
              alt="facebook logo"
              className="social-media-icon mr-sm-1 ml-sm-1"
              width={35}
            />
          </a>
          <a href="/">
            <img
              src="images/twitter-logo.png"
              alt="twitter logo"
              className="social-media-icon mr-sm-1 ml-sm-1"
              width={37}
            />
          </a>
          <a href="/">
            <img
              src="images/instagram-logo.png"
              alt="instagram logo"
              className="social-media-icon mr-sm-1 ml-sm-1"
              width={38}
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
