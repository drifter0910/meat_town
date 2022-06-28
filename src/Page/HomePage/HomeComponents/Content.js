import React from "react";
import "./Content.scss";
import { Col, Row } from "antd";
import chicken from "../../../Image/chicken.webp";
import cow from "../../../Image/cow.webp";
import rabbit from "../../../Image/rabbit.webp";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div className="content container">
      <Row gutter={[24, 16]}>
        <Col
          className="content__item-wrapper"
          xs={{
            span: 24,
          }}
          lg={{ span: 8 }}
        >
          <div className="content__item">
            <img src={chicken} alt="" />
            <h4>Turkey</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantiuur aulornt.
            </p>
            <Link to={"/"}>LEARN MORE</Link>
          </div>
        </Col>
        <Col
          className="content__item-wrapper"
          xs={{
            span: 24,
          }}
          lg={{ span: 8 }}
        >
          <div className="content__item">
            <img src={cow} alt="" />
            <h4>Beef</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantiuur aulornt.
            </p>
            <Link to={"/"}>LEARN MORE</Link>
          </div>
        </Col>
        <Col
          className="content__item-wrapper"
          xs={{
            span: 24,
          }}
          lg={{ span: 8 }}
        >
          <div className="content__item">
            <img src={rabbit} alt="" />
            <h4>Rabbit</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantiuur aulornt.
            </p>
            <Link to={"/"}>LEARN MORE</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
