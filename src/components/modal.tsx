import React, { FC } from "react";

import { Content, Direct, Foto } from "../styles/style_modal";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  person: any;
}

const Modal: FC<IProps> = ({ setModal, person }) => {
  console.log(person);

  const render = () => {
    if (person) {
      return <Direct onClick={(e) => e.stopPropagation()}>Ciii</Direct>;
    } else {
      return null;
    }
  };

  return <Content onClick={() => setModal(false)}>{render()}</Content>;
};

export default Modal;
