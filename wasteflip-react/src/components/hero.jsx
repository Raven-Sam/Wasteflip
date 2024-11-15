import React from "react";

const Hero = ({ classname, text, description }) => {
  return (
    <div className={classname}>
      <h2>{text}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
