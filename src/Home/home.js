import React from "react";
import Header from "../Components/header";
import Hero from "../Components/hero";
import Tweets from "../Components/tweets";
import Footer from "../Components/footer";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Tweets />
      <Footer />
    </div>
  );
};

export default Home;
