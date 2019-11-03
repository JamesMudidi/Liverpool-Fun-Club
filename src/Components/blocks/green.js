import React from "react";

const GreenCampaign = () => {
  return (
    <div>
      <h1 className="block-title">Red goes Green</h1>
      <img
        src="images/green-campaign-thumbnail.png"
        alt="green campain thumbnail"
        width={100 + "%"}
        className="block-thumbnail"
      />
      <p className="block-text">
        Come be part of us as we run a race to planting <strong>5 million trees</strong> in Uganda.
      </p>
      <a href="/about" className="btn-red-red my-4 btn btn-primary">
        Learn More
      </a>
    </div>
  );
};

export default GreenCampaign;
