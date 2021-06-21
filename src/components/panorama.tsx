import { FC, useState } from "react";

import { Content, Search, Items, Item } from "../styles/style_panorama";
import { useTypeSelector } from "../hooks/useTypeSelector";

const Panorama: FC = () => {
  const [opt, setOpt] = useState(true);
  const [value, setValue] = useState("");
  const { respons715 } = useTypeSelector((state) => state.respons);
  const video = useTypeSelector((state) => state.video);

  return (
    <Content respons715={respons715} move={video.loading}>
      <Search>
        <i
          className="fas fa-caret-left fa-2x"
          onClick={() => {
            setOpt(!opt);
            setValue("");
          }}
        ></i>
        <input
          type="text"
          value={value}
          placeholder={opt ? "film" : "director"}
          onChange={(e) => setValue(e.target.value)}
        />
        <i
          className="fas fa-caret-right fa-2x"
          onClick={() => {
            setOpt(!opt);
            setValue("");
          }}
        ></i>
      </Search>
      <Items></Items>
    </Content>
  );
};

export default Panorama;
