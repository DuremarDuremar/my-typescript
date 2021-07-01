import React, { FC } from "react";
import uniqby from "lodash.uniqby";

import { useTypeSelector } from "../hooks/useTypeSelector";

import { Content, Direct, Foto, Info, Films } from "../styles/style_modal";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  person: any;
}

const Modal: FC<IProps> = ({ setModal, person }) => {
  const { respons715 } = useTypeSelector((state) => state.respons);

  const render = () => {
    if (person) {
      const uniqFilms1 = person.films.filter((item: any) => {
        return item.professionKey === "DIRECTOR" && Number(item.rating) > 4.0;
      });
      const uniqFilms = uniqby([...uniqFilms1], "filmId");

      return (
        <Direct onClick={(e) => e.stopPropagation()} respons715={respons715}>
          <Foto>
            <img src={person.posterUrl} alt={person.nameEn} />
          </Foto>
          <Info>
            <h2>{person.nameRu}</h2>
            <h3>{person.nameEn}</h3>
            <p>
              {person.birthplace}, {person.birthday.split("-")[0]} г.
            </p>
            <Films>
              {uniqFilms.map((item) => {
                return <p key={item.filmId}>{item.nameRu}</p>;
              })}
            </Films>
          </Info>
        </Direct>
      );
    } else {
      return null;
    }
  };

  return <Content onClick={() => setModal(false)}>{render()}</Content>;
};

export default Modal;
