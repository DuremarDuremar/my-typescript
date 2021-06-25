import React, { FC } from "react";
import { useParams } from "react-router";

import { useTypeSelector } from "../hooks/useTypeSelector";

const Film: FC = () => {
  const top = useTypeSelector((state) => state.top);
  const panorama = useTypeSelector((state) => state.panorama);
  let { id } = useParams<{ id: string }>();

  // console.log([...panorama.items, ...top.items]);
  // console.log(id);

  const film = [...panorama.items, ...top.items].filter(
    (item) => item.filmId === Number(id)
  );

  console.log(film);

  return <div>film</div>;
};

export default Film;
