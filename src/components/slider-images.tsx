import React, { useState, useEffect } from "react";
import { Content, Item } from "../styles/style_slider-images";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { IOptionsSlider } from "../types/options";
import { useDispatch } from "react-redux";
import { fetchSlider, fetchVideo } from "../store/actions/actions";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

const SliderImages: React.FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const [idVideo, setIdVideo] = useState<number | null>(null);
  const { error, loading, items } = useTypeSelector((state) => state.slider);
  const { respons1000 } = useTypeSelector((state) => state.respons);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlider(isVisible));
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
  // console.log(respons1000);
  const options: IOptionsSlider = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const containerRef = useElementOnScreen(options, setIsVisible, 3);
  const scrollRef: any = useHorizontalScroll();
  console.log(containerRef);

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
          if (index === items.length - 3) {
            return (
              <Item
                key={index}
                ref={containerRef}
                onClick={() => setIdVideo(item.filmId)}
                respons1000={respons1000}
              >
                <img src={item.posterUrlPreview} alt={item.NameEn} />
              </Item>
            );
          } else {
            return (
              <Item
                key={index}
                onClick={() => setIdVideo(item.filmId)}
                respons1000={respons1000}
              >
                <img src={item.posterUrlPreview} alt={item.NameEn} />
              </Item>
            );
          }
        })}
      </Content>
    );
  }
};

export default SliderImages;
