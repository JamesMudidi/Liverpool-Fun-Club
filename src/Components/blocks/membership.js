import React from "react";

const Membership = () => {
  return (
    <div>
      <h1 className="block-title">Join Us</h1>
      <img
        src="images/membership-thumbnail.png"
        alt="green campain thumbnail"
        width={100 + "%"}
        className="block-thumbnail"
      />
      <p className="block-text">
        Get your inclusive <strong>OSLC Uganda</strong> memberships benefits,
        <strong> sign up today!</strong>
      </p>
      <a href="/about" className="btn-red-red my-4 btn btn-primary">
        Learn More
      </a>
    </div>
  );
};

export default Membership;
