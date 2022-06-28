import React from "react";
import "./Footer.scss";
import { Col, Row } from "antd";
import footer from "../../Image/footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer container">
      <Row gutter={[16, 0]}>
        <Col span={6}>
          <img src={footer} alt="" />
        </Col>
        <Col span={6}>
          <div className="footer__list">
            <Link to={"/"}>Orders</Link>
            <Link to={"/"}>Downloads</Link>
            <Link to={"/"}>Press Room</Link>
            <Link to={"/"}>Refund Policy</Link>
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Our statistics</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer__list">
            <Link to={"/"}>Shipping & Returns</Link>
            <Link to={"/"}>Addresses</Link>
            <Link to={"/"}>Account details</Link>
            <Link to={"/"}>Logout</Link>
            <Link to={"/"}>Lost password</Link>
          </div>
        </Col>
        <Col className="footer__address" span={6}>
          <p>LOCALIZATION</p>
          <p>Envato</p>
          <p>Level 13,</p>
          <p>2 Elizabeth</p>
          <p>Victoria 3000</p>
          <p>Australia</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
