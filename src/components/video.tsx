import { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";

import { useTypeSelector } from "../hooks/useTypeSelector";
import {
  Content,
  transitionStyles,
  Panel,
  Trailer,
} from "../styles/style_video";
import { removeVideo } from "../store/actions/actions";
import tv from "../assets/tv.svg";

const Video: FC = () => {
  const [animation, setAnimation] = useState(false);
  const { error, loading, trailer } = useTypeSelector((state) => state.video);
  const { respons715 } = useTypeSelector((state) => state.respons);
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
        width={respons715 ? "560" : "300"}
        height={respons715 ? "315" : "190"}
        src={link(trailer.url)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  const render = (state: any) => {
    if (error) {
      return <h1>{error}</h1>;
    } else if (!trailer && loading) {
      return (
        <Content respons715={respons715}>
          <Trailer>
            <img src={tv} alt="tv"></img>
          </Trailer>
        </Content>
      );
    } else {
      return (
        <>
          {trailer ? (
            <Content respons715={respons715}>
              <Panel
                style={transitionStyles[state]}
                onClick={() => {
                  setAnimation(true);
                  setTimeout(() => {
                    setAnimation(false);
                    dispatch(removeVideo());
                  }, 1000);
                }}
              >
                <i className="fas fa-chevron-up fa-2x"></i>
              </Panel>
              <Trailer style={transitionStyles[state]}>{tr()}</Trailer>
            </Content>
          ) : (
            <Content respons715={respons715} exit></Content>
          )}
        </>
      );
    }
  };

  return (
    <Transition nodeRef={nodeRef} in={animation} timeout={400} appear>
      {(state: any) => render(state)}
    </Transition>
  );
};
export default Video;
