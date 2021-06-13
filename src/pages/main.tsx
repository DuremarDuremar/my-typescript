import React, { useEffect } from "react";
import Header from "../components/header";
import SliderImages from "../components/slider-images";
import SliderVideo from "../components/slider-video";
import { Content } from "../styles/style_main";
import { useDispatch } from "react-redux";
import { respons1000 } from "../store/actions/res_actions";
import { useMediaQuery } from "react-responsive";

const Main: React.FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(respons1000(res1000));
  }, [res1000, dispatch]);

  return (
    <Content>
      <Header />
      <SliderImages />
      <SliderVideo />
    </Content>
  );
};

export default Main;
