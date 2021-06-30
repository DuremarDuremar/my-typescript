import React, { FC } from "react";
import { Content, Direct } from "../styles/style_modal";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({ setModal }) => {
  return (
    <Content onClick={() => setModal(false)}>
      <Direct onClick={(e) => e.stopPropagation()}>Ciii</Direct>
    </Content>
  );
};

export default Modal;
