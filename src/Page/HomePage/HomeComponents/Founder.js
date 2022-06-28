import React from "react";
import "./Founder.scss";
import { Row, Col } from "antd";
import founder from "../../../Image/founder.webp";
import founder2 from "../../../Image/founder2.webp";

import { Link } from "react-router-dom";
const Founder = () => {
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
                <div className="founder__top-des-detail">
                  Sed ut perspiciatis undeaccusa mque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.{" "}
                </div>
                <Link to={"/"}>LEARN MORE</Link>
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
                <div className="founder__top-des-detail">
                  Dolor conubia viverra faucibus dictumst fringilla aenean
                  lectus suscipit laoreet enim mauris viverra nec cursus
                  porttitor curabitur habitant congue conubia quis sem
                  adipiscing faucibus donec odio sodales aliquam fringilla
                  sollicitudin integer urna mauris metus et sit neque cursus
                  dolor venenatis consectetur sit.
                </div>
                <Link to={"/"}>LEARN MORE</Link>
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
