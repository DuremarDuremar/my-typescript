import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";

function SliderVideo() {
  const { error, loading, trailer } = useTypeSelector((state) => state.video);

  // if (trailer) {
  //   console.log(trailer.url.split("v/")[1]);
  //   console.log(trailer.url.indexOf("="));
  // }

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

  return <div>{trailer ? tr() : "777"}</div>;
}

export default SliderVideo;
