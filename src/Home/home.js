import React from "react";
import Header from "../Components/header";
import Carousel from "../Components/hero";
import Footer from "../Components/footer";
import Stars from "../Components/stars";
import CtaBlocks from "../Components/blocks/blocks";
import SocialFeedBlock from "../Components/social";
import { Container } from "react-bootstrap";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="main py-5">
        <Container>
          <Stars />
        </Container>
        <CtaBlocks />
        <SocialFeedBlock />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
