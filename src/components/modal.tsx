import React, { FC } from "react";
import { Content } from "../styles/style_modal";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({ setModal }) => {
  return (
    <Content onClick={() => setModal(false)}>
      <div>Ciii</div>
    </Content>
  );
};

export default Modal;
