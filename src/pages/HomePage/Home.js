import React from "react";
import Blog from "./HomeComponents/Blog";
import Content from "./HomeComponents/Content";
import Founder from "./HomeComponents/Founder";
import Hero from "./HomeComponents/Hero";
import Products from "./HomeComponents/Products";
const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <Products />
      <Founder />
      <Blog />
    </>
  );
};

export default Home;
