import React from "react";
import { Content, Item } from "../styles/style_slider-images";

const SliderImages = () => {
  const items = Array.from(Array(20).keys());
  // const ff = [...new Array(5).keys()];
  console.log(items);

  return (
    <Content>
      {items.map((item) => {
        return <Item key={item}>{item + 1}</Item>;
      })}
    </Content>
  );
};

export default SliderImages;
