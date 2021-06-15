import React, { useState, useEffect } from "react";
import { Content, Item, Button } from "../styles/style_slider-images";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { IOptionsSlider } from "../types/options";
import { useDispatch } from "react-redux";
import { fetchSlider, fetchVideo } from "../store/actions/actions";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import Spinner from "../utils/spinner";

const SliderImages: React.FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const [idVideo, setIdVideo] = useState<number | null>(null);
  const [dopLoading, setDopLoading] = useState(false);
  const { error, loading, items } = useTypeSelector((state) => state.slider);
  const { respons1000 } = useTypeSelector((state) => state.respons);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlider(isVisible, setDopLoading));
  }, [dispatch, isVisible]);

  useEffect(() => {
    if (idVideo) {
      dispatch(fetchVideo(idVideo));
      setIdVideo(null);
    }
  }, [dispatch, idVideo]);

  // console.log("isVisible", isVisible);
  // console.log("items", items);
  // console.log(idVideo);
  // console.log(dopLoading);
  const options: IOptionsSlider = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const containerRef = useElementOnScreen(options, setIsVisible, 3);
  const scrollRef: any = useHorizontalScroll();
  // console.log(containerRef);

  if (error) {
    return <h1>{error}</h1>;
  } else if (!loading) {
    return (
      <Content ref={scrollRef} respons1000={respons1000}>
        ...loading
      </Content>
    );
  } else {
    return (
      <Content ref={scrollRef} respons1000={respons1000}>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              ref={index === items.length - 3 ? containerRef : null}
              respons1000={respons1000}
            >
              <Button
                left
                respons1000={respons1000}
                onClick={() => setIdVideo(item.filmId)}
              >
                <i className="fas fa-video fa-3x"></i>
              </Button>
              <img src={item.posterUrlPreview} alt={item.NameEn} />
              <Button respons1000={respons1000}>
                <i className="fas fa-file-import fa-3x"></i>
              </Button>
            </Item>
          );
        })}
        {dopLoading && <Spinner slider />}
      </Content>
    );
  }
};

export default SliderImages;
