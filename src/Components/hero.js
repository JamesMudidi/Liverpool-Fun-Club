import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="carousel-container">
        <Carousel fade="true" interval="2000" className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/lfc-team.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/lfc-team-women.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/action-athletes-audience-1884574.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Hero;
