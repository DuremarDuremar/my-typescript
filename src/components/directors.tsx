import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";

import { Content, Slider } from "../styles/style_directors";
import { useTypeSelector } from "../hooks/useTypeSelector";

const Directors: FC = () => {
  const state = useTypeSelector((state) => state.top);

  console.log("l", state.items);

  useEffect(() => {}, []);

  // (" https://kinopoiskapiunofficial.tech/api/v1/staff/185595");

  return (
    <Content>
      <Slider>11</Slider>
    </Content>
  );
};

export default Directors;
