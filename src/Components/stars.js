import React from "react";
import { Card } from "react-bootstrap";

const Stars = () => {
  return (
    <div className="stars">
      <div className="d-flex">
        <h1 className="tile-title">Certified</h1>
        <div className="stars-row">
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
          <img
            src="images/star.png"
            alt=""
            width={25}
            height={25}
            className="star-star"
          />
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-sm-8">
          <div className="tile-column">
            <a href="/certificate">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="images/cl-celebration.png"
                  width={100 + "%"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <div className="tile-text">
                    <a href="/certificate" className="tile-heading">
                      We are definetely <br />
                      official
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <h1 className="tile-blade">
            Join us for special screenings every match day at{" "}
            <strong>Arena Lounge, Kampala</strong>.
          </h1>
          <a
            href="https://goo.gl/maps/LdQuKpAQNV2UcVJ8A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red-red my-5 btn btn-primary"
          >
            Find location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stars;
