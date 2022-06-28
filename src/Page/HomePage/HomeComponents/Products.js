import React from "react";
import "./Products.scss";
import { Button } from "antd";

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
    </div>
  );
};

export default Products;
