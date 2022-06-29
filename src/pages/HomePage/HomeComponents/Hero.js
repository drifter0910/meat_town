import React from "react";
import "./Hero.scss";
import "antd/dist/antd.css";
import { Button } from "antd";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="c1920">
        <div className="hero">
          <div className="hero__content">
            <h1>Pure & eco farm</h1>
            <div className="hero-about__content-wrap">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam porter
                ellen vira.
              </p>
            </div>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#578a52",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
              }}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
