import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="poo">
        <p className="subTitle">Professional, and Reliable Web Development</p>
        <Typed
          className="typed-text"
          strings={[
            "Web Developer",
            "Social Media Coordinator",
            "Search Engine Optimization",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
      </div>
    </div>
  );
};

export default Header;
