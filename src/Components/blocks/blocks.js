import React from "react";
import { Container } from "react-bootstrap";
import MembershipBlock from "./membership";
import GreenCampaignBlock from "./green";
import Events from "./events";

const Blocks = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-sm-4">
            <MembershipBlock />
          </div>
          <div className="col-sm-4">
            <GreenCampaignBlock />
          </div>
          <div className="col-sm-4">
            <Events />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blocks;
