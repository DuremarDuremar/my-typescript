import React from "react";
import Header from "../components/header";
import SliderImages from "../components/slider-images";
import SliderVideo from "../components/slider-video";
import { Content } from "../styles/style_main";
import { useMediaQuery } from "react-responsive";

const Main: React.FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  // console.log(res1000);

  return (
    <Content>
      <Header />
      <SliderImages />
      <SliderVideo />
    </Content>
  );
};

export default Main;
