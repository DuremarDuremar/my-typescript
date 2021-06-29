import React, { FC } from "react";

import Header from "../components/header";
import Top from "../components/top";
import Video from "../components/video";
import Directors from "../components/directors";
import Panorama from "../components/panorama";
import { Content } from "../styles/style_main";
import { useTypeSelector } from "../hooks/useTypeSelector";

const Main: FC = () => {
  const top = useTypeSelector((state) => state.top);
  const video = useTypeSelector((state) => state.video);
  const directors = useTypeSelector((state) => state.directors);
  const { respons715 } = useTypeSelector((state) => state.respons);

  return (
    <Content move={video.loading} res715={respons715}>
      <Header />
      <Top />
      <Video />
      {top.items.length > 0 ? <Directors /> : <p>loading...</p>}
      {directors.items.length > 0 ? <Panorama /> : <p>loading...</p>}
    </Content>
  );
};

export default Main;
