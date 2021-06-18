import React, { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";

import { Content, Slider, Item } from "../styles/style_directors";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchDirectors } from "../store/actions/actions";

const Directors: FC = () => {
  const { error, loading, items } = useTypeSelector((state) => state.directors);
  const [isVisible, setIsVisible] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchDirectors());
    }, 800);
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  } else if (items.length < 1 && loading) {
    return <Content>Loading...</Content>;
  } else {
    return (
      <Content>
        <Slider>
          {items.map((item) => {
            return (
              <Item key={item.personId}>
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
