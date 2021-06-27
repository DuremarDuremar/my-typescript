import React, { FC } from "react";
import { useParams } from "react-router";

import { useTypeSelector } from "../hooks/useTypeSelector";

const des: any = [
  { id: "195434", desk: "США, Итан Коэн, Джоэл Коэн" },
  { id: "354", desk: "США, Фрэнсис Форд Коппола" },
];
const Film: FC = () => {
  const top = useTypeSelector((state) => state.top);
  const panorama = useTypeSelector((state) => state.panorama);
  let { id } = useParams<{ id: string }>();

  let findId = des.find((film: any) => film.id === id);

  const film = () => {
    const res = [...panorama.items, ...top.items].filter(
      (item) => item.filmId === Number(id)
    );
    if (findId) {
      res[0].description = findId.desk;
    }

    return res[0];
  };

  // console.log(id);

  return <div>{id && film().description}</div>;
};

export default Film;
