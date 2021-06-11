import React, { useState, useRef } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import {
  Content,
  transitionStyles,
  Panel,
  Trailer,
} from "../styles/style_slider-video";
import { removeVideo } from "../store/actions";
import { Transition } from "react-transition-group";
import tv from "../assets/tv.svg";

const SliderVideo: React.FC = () => {
  const [animation, setAnimation] = useState(false);
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
      <Transition nodeRef={nodeRef} in={animation} timeout={600}>
        {(state: any) => (
          <>
            {trailer ? (
              <Content>
                <Panel style={transitionStyles[state]}>
                  <i
                    className="fas fa-chevron-up fa-2x"
                    onClick={() => {
                      setAnimation(true);
                      setTimeout(() => {
                        setAnimation(false);
                        dispatch(removeVideo());
                      }, 1000);
                    }}
                  ></i>
                </Panel>
                <Trailer style={transitionStyles[state]}>{tr()}</Trailer>
              </Content>
            ) : (
              <Content>
                <Trailer>
                  <img src={tv} alt="tv"></img>
                </Trailer>
              </Content>
            )}
          </>
        )}
      </Transition>
    );
  }
};
export default SliderVideo;
