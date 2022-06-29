import React from "react";
import "./Products.scss";
import { Button, Row, Col } from "antd";
import prod1 from "../../../Image/prod1.webp";
import prod2 from "../../../Image/prod2.webp";
import prod3 from "../../../Image/prod3.webp";
import prod4 from "../../../Image/prod4.webp";
import safe from "../../../Image/safe-shopping.webp";
import location from "../../../Image/location.webp";
import delivery from "../../../Image/delivery.webp";

const Products = () => {
  return (
    <div className="products container">
      <div className="products__top">
        <h6>ORDER ONLINE</h6>
        <h2>
          Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo
        </h2>
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "GRAY",
            color: "white",
            borderColor: "transparent",
            fontWeight: "bold",
          }}
        >
          BROWSE ALL
        </Button>
      </div>
      <div className="products__body">
        <Row>
          <Col
            xs={{
              span: 12,
            }}
            lg={{ span: 6 }}
          >
            <img className="products__body-img" src={prod1} alt="" />
            <div className="products__body-name">
              <p>Baby back ribs</p>
            </div>
            <div className="products__body-price">$25.00 – $65.00</div>
          </Col>
          <Col
            xs={{
              span: 12,
            }}
            lg={{ span: 6 }}
          >
            <img src={prod2} alt="" />
            <div className="products__body-name">
              <p>Baby lamb</p>
            </div>
            <div className="products__body-price">$15.00 – $72.00</div>
          </Col>{" "}
          <Col
            xs={{
              span: 12,
            }}
            lg={{ span: 6 }}
          >
            <img src={prod3} alt="" />
            <div className="products__body-name">
              <p>Beef short ribs</p>
            </div>
            <div className="products__body-price">$32.00 – $50.00</div>
          </Col>{" "}
          <Col
            xs={{
              span: 12,
            }}
            lg={{ span: 6 }}
          >
            <img src={prod4} alt="" />
            <div className="products__body-name">
              <p>Beef Steak meat</p>
            </div>
            <div className="products__body-price">$55.00 – $150.00</div>
          </Col>
        </Row>
      </div>
      <div className="products__bottom">
        <p>Sed ut perspiciatis unde omnis voluptatem accusantiu</p>
      </div>
      <div className="products__last">
        <Row>
          <Col
            xs={{
              span: 24,
            }}
            lg={{ span: 8 }}
          >
            <div className="products__last-wrapper">
              <div className="products__last-img">
                <img src={safe} alt="" />
              </div>
              <div className="products__last-label">
                <p>Safe Shopping</p>
              </div>
            </div>
          </Col>
          <Col
            xs={{
              span: 24,
            }}
            lg={{ span: 8 }}
          >
            <div className="products__last-wrapper">
              <div className="products__last-img">
                <img src={location} alt="" />
              </div>
              <div className="products__last-label">
                <p>Delivery accross US</p>
              </div>
            </div>
          </Col>
          <Col
            xs={{
              span: 24,
            }}
            lg={{ span: 8 }}
          >
            <div className="products__last-wrapper">
              <div className="products__last-img">
                <img src={delivery} alt="" />
              </div>
              <div className="products__last-label">
                <p>24h fresh delivery</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;
