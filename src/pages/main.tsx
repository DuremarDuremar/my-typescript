import React from "react";
import Header from "../components/header";
import SliderImages from "../components/slider-images";
import SliderVideo from "../components/slider-video";
import { Content } from "../styles/style_main";

function Main() {
  return (
    <Content>
      <Header />
      <SliderImages />
      <SliderVideo />
    </Content>
  );
}

export default Main;
