import React, { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";

import { Content, Slider, Item } from "../styles/style_directors";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { fetchDirectors } from "../store/actions/actions";

const Directors: FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const { error, loading, items } = useTypeSelector((state) => state.directors);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchDirectors(isVisible));
    }, 800);
  }, [dispatch, isVisible]);

  const containerRef = useElementOnScreen(setIsVisible, 8, "directors");

  console.log(isVisible);

  if (error) {
    return <h1>{error}</h1>;
  } else if (items.length < 1 && loading) {
    return <Content>Loading...</Content>;
  } else {
    return (
      <Content>
        <Slider>
          {items.map((item, index) => {
            return (
              <Item
                key={item.personId}
                ref={index === items.length - 2 ? containerRef : null}
              >
                <img src={item.posterUrl} alt={item.nameEn} />
                <p>{item.nameRu}</p>
              </Item>
            );
          })}
        </Slider>
      </Content>
    );
  }
};

export default Directors;