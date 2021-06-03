// import React, { useState, useEffect, useRef } from "react";
import { Content, Item } from "../styles/style_slider-images";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { IOptionsSlider } from "../types/options";

const SliderImages = () => {
  const { error, loading, items } = useTypeSelector((state) => state.slider);

  const options: IOptionsSlider = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const containerRef = useElementOnScreen(options);

  if (error) {
    return <h1>{error}</h1>;
  } else if (loading) {
    return <h1>...loading</h1>;
  } else {
    return (
      <Content>
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <img src={item.posterUrlPreview} alt={item.NameEn} />
            </Item>
          );
        })}
        <Item key="444" ref={containerRef}>
          <img
            src="https://3dnews.ru/assets/external/illustrations/2017/11/07/961183/google-logo-1200x630.jpg"
            alt="1"
          />
        </Item>
      </Content>
    );
  }
};

export default SliderImages;
