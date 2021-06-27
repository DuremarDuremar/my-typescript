import React, { FC } from "react";
import { useParams } from "react-router";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { Content, Img, Info } from "../styles/style_film";

const des: any = [
  { id: "195434", desk: "США, Итан Коэн, Джоэл Коэн" },
  { id: "354", desk: "США, Фрэнсис Форд Коппола" },
  { id: "425", desk: "Швеция, Ингмар Бергман" },
  { id: "361", desk: "США, Дэвид Финчер" },
  { id: "15780", desk: "США, Дэвид Линч" },
  { id: "1040841", desk: "Турция, Нури Бильге Джейлан" },
  { id: "43970", desk: "СССР, Андрей Тарковский" },
  { id: "557", desk: "США, Терри Цвигофф" },
  { id: "588", desk: "США, Мэри Хэррон" },
  { id: "81530", desk: "США, Вуди Аллен" },
  { id: "1219852", desk: "США, Чарли Кауфман" },
  { id: "259788", desk: " Норвегия, Йенс Лиен" },
  { id: "1043758", desk: "Корея Южная, Пон Джун-хо" },
  { id: "942396", desk: "Дания, Ларс фон Триер" },
  { id: "998317", desk: "США, Шон Бэйкер" },
  { id: "944098", desk: "США, Мартин МакДона" },
  { id: "954059", desk: "США, Джим Джармуш" },
  { id: "57000", desk: "Италия, Пьетро Джерми" },
  { id: "103733", desk: "Испания, Гильермо дель Торо" },
  { id: "4872", desk: "США, Джеймс Фоули" },
  { id: "7695", desk: "Франция, Жан-Пьер Дарденн, Люк Дарденн" },
  { id: "508", desk: "Швеция, Ингмар Бергман" },
  { id: "56328", desk: "Венгрия, Бела Тарр" },
  { id: "20793", desk: "США, Роберт Бирман" },
  { id: "439", desk: " Бразилия, Фернанду Мейреллиш" },
  { id: "486", desk: "США, Элиа Казан" },
  { id: "358", desk: "США, Мартин Скорсезе" },
  { id: "784", desk: "Франция, Михаэль Ханеке" },
  { id: "6977", desk: "США, Терренс Малик" },
  { id: "2890", desk: "США, Джоэл Коэн, Итан Коэн" },
  { id: "7226", desk: "Дания, Ларс фон Триер" },
  { id: "5558", desk: "США, Энтони Мингелла" },
  { id: "511", desk: "США, Тим Бёртон" },
  { id: "2272", desk: "США, Джим Джармуш" },
  { id: "515", desk: "Великобритания, Дэнни Бойл" },
  { id: "334", desk: "Великобритания, Стэнли Кубрик" },
  { id: "585042", desk: "Турция, Нури Бильге Джейлан" },
  { id: "757", desk: "США, Марк Форстер" },
  { id: "1048334", desk: "США, Тодд Филлипс" },
  { id: "483", desk: "Великобритания, Терри Гиллиам" },
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

  // console.log(film());

  return (
    <Content>
      <Img>
        <p>{film().description}</p>
        <img src={film().posterUrlPreview} alt={film().nameEn} />
      </Img>

      <Info>
        <h1>{film().nameRu}</h1>
        <h2> {film().nameEn}</h2>
        <h3>{film().year}</h3>
      </Info>
    </Content>
  );
};

export default Film;
