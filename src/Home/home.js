import React from "react";
import Header from "../Components/header";
import Carousel from "../Components/hero";
import Footer from "../Components/footer";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
