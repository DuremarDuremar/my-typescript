import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Header from "../components/header";
import Top from "../components/top";
import Video from "../components/video";
import Directors from "../components/directors";
import Panorama from "../components/panorama";
import { Content } from "../styles/style_main";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { respons1000, respons715 } from "../store/actions/res_actions";

const Main: FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });
  const dispatch = useDispatch();
  const top = useTypeSelector((state) => state.top);
  const video = useTypeSelector((state) => state.video);
  const directors = useTypeSelector((state) => state.directors);
  // console.log("res1000", res1000);
  // console.log("res715", res715);

  useEffect(() => {
    dispatch(respons1000(res1000));
    dispatch(respons715(res715));
  }, [res1000, res715, dispatch]);

  return (
    <Content move={video.loading} res715={res715}>
      <Header />
      <Top />
      <Video />
      {top.items.length > 0 ? <Directors /> : <p>loading...</p>}
      {directors.items.length > 0 ? <Panorama /> : <p>loading...</p>}
    </Content>
  );
};

export default Main;
