import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Tweets = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-width", "380");
    anchor.setAttribute("data-height", "300");
    anchor.setAttribute("data-tweet-limit", "2");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/ug_kop");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);
  return (
    <section className="twitter-section py-5">
      <Container>
        <div className="twitter-embed"></div>
      </Container>
    </section>
  );
};

export default Tweets;
