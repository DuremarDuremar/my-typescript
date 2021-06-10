import React, { useState, useEffect } from "react";
import { Content, Item } from "../styles/style_slider-images";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { IOptionsSlider } from "../types/options";
import { useDispatch } from "react-redux";
import { fetchSlider, fetchVideo } from "../store/actions";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

const SliderImages: React.FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const [idVideo, setIdVideo] = useState<number | null>(null);
  const { error, loading, items } = useTypeSelector((state) => state.slider);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlider(isVisible));
  }, [dispatch, isVisible]);

  useEffect(() => {
    if (idVideo) {
      dispatch(fetchVideo(idVideo));
    }
  }, [dispatch, idVideo]);

  // console.log("isVisible", isVisible);
  // console.log("items", items);
  // console.log(idVideo);

  const options: IOptionsSlider = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const containerRef = useElementOnScreen(options, setIsVisible, 3);
  const scrollRef: any = useHorizontalScroll();
  console.log(scrollRef);

  if (error) {
    return <h1>{error}</h1>;
  } else if (!loading) {
    return <Content ref={scrollRef}>...loading</Content>;
  } else {
    return (
      <Content ref={scrollRef}>
        {items.map((item, index) => {
          if (index === items.length - 4) {
            return (
              <Item
                key={index}
                ref={containerRef}
                onClick={() => setIdVideo(item.filmId)}
              >
                <img src={item.posterUrlPreview} alt={item.NameEn} />
              </Item>
            );
          } else {
            return (
              <Item key={index} onClick={() => setIdVideo(item.filmId)}>
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
