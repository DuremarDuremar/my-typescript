import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { Content, Panel, Trailer } from "../styles/style_slider-video";
import { removeVideo } from "../store/actions";
import tv from "../assets/tv.svg";

function SliderVideo() {
  const { error, loading, trailer } = useTypeSelector((state) => state.video);
  const dispatch = useDispatch();

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
    return (
      <Content>
        <Trailer>...loading</Trailer>
      </Content>
    );
  } else {
    return (
      <Content>
        {trailer ? (
          <>
            <Panel>
              <i
                className="fas fa-chevron-up fa-2x"
                onClick={() => dispatch(removeVideo())}
              ></i>
            </Panel>
            <Trailer>{tr()}</Trailer>
          </>
        ) : (
          <Trailer>
            <img src={tv}></img>
          </Trailer>
        )}
      </Content>
    );
  }
}

export default SliderVideo;
