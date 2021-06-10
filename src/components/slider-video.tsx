import React, { useRef } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { Content, Panel, Trailer } from "../styles/style_slider-video";
import { removeVideo } from "../store/actions";
import { Transition } from "react-transition-group";
import tv from "../assets/tv.svg";

const SliderVideo: React.FC = () => {
  const { error, loading, trailer } = useTypeSelector((state) => state.video);
  const dispatch = useDispatch();

  const nodeRef = useRef(null);

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

  const defaultStyle = {
    transition: `opacity ${500}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [id: string]: React.CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
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
      <Transition nodeRef={nodeRef} in={loading} timeout={500}>
        {(state: any) => (
          <Content
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
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
        )}
      </Transition>
    );
  }
};

export default SliderVideo;
