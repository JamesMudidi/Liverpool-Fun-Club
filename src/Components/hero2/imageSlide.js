import React from "react";

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className="image-slide" style={styles}>
      <div className="hero-text">
        <h1 className="hero-heading font-weight-bold">#YWNA</h1>
      </div>
    </div>
  );
};

export default ImageSlide;
