import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Content } from "../styles/style_slider-video";

function SliderVideo() {
  const { error, loading, trailer } = useTypeSelector((state) => state.video);

  const link = (url: string) => {
    if (url.indexOf("=") > 0) {
      return `https://www.youtube.com/embed/${trailer.url.split("=")[1]}`;
    } else {
      return `https://www.youtube.com/embed/${trailer.url.split("v/")[1]}`;
    }
  };

  const tr = () => {
    return (
      <iframe
        width="560"
        height="315"
        src={link(trailer.url)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  if (error) {
    return <h1>{error}</h1>;
  } else if (!trailer && loading) {
    return <Content>...loading</Content>;
  } else {
    return <Content>{trailer ? tr() : "select video"}</Content>;
  }
}

export default SliderVideo;
