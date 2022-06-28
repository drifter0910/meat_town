import React from "react";
import "./Home.scss";
import Content from "./HomeComponents/Content";
import Hero from "./HomeComponents/Hero";
import Products from "./HomeComponents/Products";
const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <Products />
    </>
  );
};

export default Home;
