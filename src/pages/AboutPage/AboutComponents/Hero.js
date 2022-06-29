import React from "react";
import "./Hero.scss";
import "antd/dist/antd.css";
import { Button } from "antd";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="c1920">
        <div className="hero-about">
          <div className="hero-about__content">
            <h1>About us</h1>
            <div className="hero-about__content-wrap">
              <p>
                Laoreet est curae etiam facilisis posuere litora praesent
                facilisis iaculis hac vehicula tincidunt lacinia torquent nec
                nam ut vehicula enim.
              </p>
            </div>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#716d6a",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
              }}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
