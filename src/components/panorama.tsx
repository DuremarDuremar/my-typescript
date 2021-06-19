import { FC } from "react";

import { Content } from "../styles/style_panorama";
import { useTypeSelector } from "../hooks/useTypeSelector";

const Panorama: FC = () => {
  const { respons715 } = useTypeSelector((state) => state.respons);
  const video = useTypeSelector((state) => state.video);

  return (
    <Content respons715={respons715} move={video.loading}>
      Panorama
    </Content>
  );
};

export default Panorama;
