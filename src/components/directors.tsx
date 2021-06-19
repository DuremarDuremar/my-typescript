import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";

import { Content, Slider, Item } from "../styles/style_directors";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { fetchDirectors } from "../store/actions/actions";
import Spinner from "../utils/spinner";

const Directors: FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const [dopLoading, setDopLoading] = useState(false);
  const { error, loading, items } = useTypeSelector((state) => state.directors);
  const video = useTypeSelector((state) => state.video);
  const { respons715 } = useTypeSelector((state) => state.respons);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchDirectors(isVisible, setDopLoading));
    }, 800);
  }, [dispatch, isVisible]);

  const containerRef = useElementOnScreen(setIsVisible, 8, "directors");
  const scrollRef: any = useHorizontalScroll();

  if (error) {
    return <h1>{error}</h1>;
  } else if (items.length < 1 && loading) {
    return (
      <Content respons715={respons715} move={video.loading ? true : false}>
        <Slider respons715={respons715} ref={!respons715 ? scrollRef : null}>
          <Spinner />
        </Slider>
      </Content>
    );
  } else {
    return (
      <Content respons715={respons715} move={video.loading ? true : false}>
        <Slider respons715={respons715} ref={!respons715 ? scrollRef : null}>
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                ref={index === items.length - 2 ? containerRef : null}
                respons715={respons715}
              >
                <img src={item.posterUrl} alt={item.nameEn} />
                {respons715 && <p>{item.nameRu}</p>}
              </Item>
            );
          })}
          {dopLoading && <Spinner directors />}
        </Slider>
      </Content>
    );
  }
};

export default Directors;
