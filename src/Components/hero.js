import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const contents = require("../data/hero");

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: contents.heroContent
    };
  }

  render() {
    const slide = () => {
      return this.state.contents.map((content, index) => {
        const slideImage = content.image;
        const styles = {
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
        };
        return (
          <Carousel.Item style={styles}>
            <Carousel.Caption>
              <h1 className="caption-heading py-3">{content.title}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    };

    return (
      <div className="hero-carousel">
        <Carousel fade="true" interval="2000" className="carousel h-5">
          {slide()}
        </Carousel>
      </div>
    );
  }
}

export default Hero;
