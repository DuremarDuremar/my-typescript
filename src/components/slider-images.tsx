import React from "react";
import { Content, Item } from "../styles/style_slider-images";
import { useTypeSelector } from "../hooks/useTypeSelector";

const SliderImages = () => {
  const { error, loading, items } = useTypeSelector((state) => state.slider);

  console.log(items);

  if (error) {
    return <h1>{error}</h1>;
  } else if (loading) {
    return <h1>...loading</h1>;
  } else {
    return (
      <Content>
        {items.map((item, index) => {
          return <Item key={index}>{item.nameEn}</Item>;
        })}
      </Content>
    );
  }
};

export default SliderImages;
