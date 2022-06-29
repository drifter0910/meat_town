import React from "react";
import "./Founder.scss";
import { Row, Col } from "antd";
import founder from "../../../assets/image/founder.webp";
import founder2 from "../../../assets/image/founder2.webp";

import { Link } from "react-router-dom";
const Founder = ({ des1, des2, learn }) => {
  return (
    <div>
      <div className="founder container">
        <div className="founder__top">
          <Row gutter={[24, 4]}>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 8 }}
            >
              <div className="founder__top-img">
                <img src={founder} alt="" />
              </div>
            </Col>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 16 }}
            >
              <div className="founder__top-des">
                <div className="founder__top-des-name">
                  <h3>Markus Wallberg Co-founder</h3>
                </div>
                <div className="founder__top-des-detail">{des1}</div>
                <Link to={"/"}>{learn}</Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="founder__top">
          <Row gutter={[24, 4]}>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 16 }}
            >
              <div className="founder__top-des">
                <div className="founder__top-des-name">
                  <h3>Non-genetically modified species</h3>
                </div>
                <div className="founder__top-des-detail">{des2}</div>
                <Link to={"/"}>{learn}</Link>
              </div>
            </Col>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 8 }}
            >
              <div className="founder__top-img">
                <img src={founder2} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Founder;
