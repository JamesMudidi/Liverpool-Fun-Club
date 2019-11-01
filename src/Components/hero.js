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
    return (
      <div className="hero-carousel">
        <Carousel fade="true" interval="2000" className="carousel h-5">
          {this.state.contents.map((content, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={content.image}
                alt={content.alt}
              />
              <Carousel.Caption>
                <h1 className="caption-heading py-4">{content.title}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Hero;
