import React from "react";
import Header from "../Components/header";
import Carousel from "../Components/hero";
import Footer from "../Components/footer";
import Stars from "../Components/stars";
import { Container } from "react-bootstrap";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Container>
        <Stars />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
