import React, { useEffect } from "react";
import Header from "../components/header";
import SliderImages from "../components/slider-images";
import SliderVideo from "../components/slider-video";
import { Content } from "../styles/style_main";
import { useDispatch } from "react-redux";
import { respons1000, respons715 } from "../store/actions/res_actions";
import { useMediaQuery } from "react-responsive";

const Main: React.FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });
  const dispatch = useDispatch();

  // console.log("res1000", res1000);
  console.log("res715", res715);

  useEffect(() => {
    dispatch(respons1000(res1000));
    dispatch(respons715(res715));
  }, [res1000, res715, dispatch]);

  return (
    <Content>
      <Header />
      <SliderImages />
      <SliderVideo />
    </Content>
  );
};

export default Main;
