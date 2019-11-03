import React from "react";

const Map = () => {
  return (
    <div className="location-map py-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.026801886263!2d32.6301087!3d0.3184359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x308f5e3a70933e6b!2sArena%20Lounge!5e0!3m2!1sen!2sug!4v1572773590349!5m2!1sen!2sug"
        width={100 + "%"}
        height={380}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
};

export default Map;
