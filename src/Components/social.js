import React from "react";
import { Container } from "react-bootstrap";

const SocialFeed = () => {
  return (
    <Container>
      <div className="social-feed-box py-5">
        <h1 className="block-title pb-1">@ug_kop</h1>
        <div className="row pl-1 pr-1">
          <div id="curator-feed-default-layout">
            <a
              href="https://curator.io"
              target="_blank"
              class="crt-logo crt-tag"
              rel="noopener noreferrer"
            >
              Powered by Curator.io
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SocialFeed;
