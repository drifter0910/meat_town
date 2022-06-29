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
      <Founder
        des1={
          " Sed ut perspiciatis unde accusa mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
        }
        des2={
          " Dolor conubia viverra faucibus dictumst fringilla aenean lectus suscipit laoreet enim mauris viverra nec cursus porttitor curabitur habitant congue conubia quis sem  adipiscing faucibus donec odio sodales aliquam fringilla sollicitudin integer urna mauris metus et sit neque cursus dolor venenatis consectetur sit. "
        }
        learn={"LEARN MORE"}
      />
      <Blog />
    </>
  );
};

export default Home;
