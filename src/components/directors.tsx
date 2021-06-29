import { useState, useEffect, useCallback, FC } from "react";
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

  console.log("isVisible", isVisible);
  console.log("items.length", items.length);

  let renderEffect = useCallback((n) => {
    return n;
  }, []);

  useEffect(() => {
    if (isVisible + 8 > renderEffect(items.length)) {
      setTimeout(() => {
        dispatch(fetchDirectors(isVisible, setDopLoading));
      }, 800);
    }
  }, [dispatch, isVisible, renderEffect, items.length]);

  const containerRef = useElementOnScreen(setIsVisible, 18, "directors");
  const scrollRef: any = useHorizontalScroll();

  const render = () => {
    if (error) {
      return <h1>{error}</h1>;
    } else if (items.length < 1 && loading) {
      return (
        <>
          <Spinner />
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <Content respons715={respons715} move={video.loading}>
      <Slider respons715={respons715} ref={!respons715 ? scrollRef : null}>
        {render()}
      </Slider>
    </Content>
  );
};

export default Directors;
