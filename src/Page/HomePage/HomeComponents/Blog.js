import React from "react";
import { Row, Col, Button } from "antd";
import "./Blog.scss";
import blog1 from "../../../Image/blog1.webp";
import blog2 from "../../../Image/blog2.webp";
import blog3 from "../../../Image/blog3.webp";
const Blog = () => {
  return (
    <div className="blog container">
      <div className="blog__content">
        <div className="blog__content-header">
          <h5>BLOG</h5>
          <h2>
            We are sharing our knowledge <br /> and experiences{" "}
          </h2>
        </div>
        <div className="blog__content-card">
          <Row gutter={[48, 24]}>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 8 }}
            >
              <div className="blog__content-card-img">
                <img src={blog1} alt="" />
              </div>
              <div className="blog__content-card-item">
                <div className="blog__content-card-time">
                  <p>by admin on November 17, 2021</p>
                </div>
                <div className="blog__content-card-desc">
                  Pellentesque habitant morbi{" "}
                </div>
              </div>
            </Col>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 8 }}
            >
              <div className="blog__content-card-img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog__content-card-item">
                <div className="blog__content-card-time">
                  <p>by admin on November 17, 2021</p>
                </div>
                <div className="blog__content-card-desc">
                  Quisque ornare posuere
                </div>
              </div>
            </Col>
            <Col
              xs={{
                span: 24,
              }}
              lg={{ span: 8 }}
            >
              <div className="blog__content-card-img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog__content-card-item">
                <div className="blog__content-card-time">
                  <p>by admin on November 17, 2021</p>
                </div>
                <div className="blog__content-card-desc">
                  Curabitur magna tincidunt
                </div>
              </div>
            </Col>
          </Row>
          <div className="wrap-button">
            <Button
              style={{
                backgroundColor: "#716d6a",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
                paddingBottom: "1rem",
              }}
              className="button"
              type="primary"
            >
              SEE MORE ARTICLES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
