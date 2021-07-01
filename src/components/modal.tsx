import React, { FC } from "react";
import uniqby from "lodash.uniqby";

import { Content, Direct, Foto, Info, Films } from "../styles/style_modal";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  person: any;
}

const Modal: FC<IProps> = ({ setModal, person }) => {
  // console.log(person.films.map((item: any) => item.nameRu));

  const render = () => {
    if (person) {
      const uniqFilms = uniqby([...person.films], "filmId");

      return (
        <Direct onClick={(e) => e.stopPropagation()}>
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
                return <p>{item.nameRu}</p>;
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
