import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Header from "../components/header";
import Top from "../components/top";
import Video from "../components/video";
import Directors from "../components/directors";
import Search from "../components/search";
import { Content } from "../styles/style_main";
import { respons1000, respons715 } from "../store/actions/res_actions";

const Main: React.FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });
  const dispatch = useDispatch();

  // console.log("res1000", res1000);
  // console.log("res715", res715);

  useEffect(() => {
    dispatch(respons1000(res1000));
    dispatch(respons715(res715));
  }, [res1000, res715, dispatch]);

  return (
    <Content>
      <Header />
      <Top />
      <Video />
      <Directors />
      <Search />
    </Content>
  );
};

export default Main;
