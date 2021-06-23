import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";
import { Content, Search, Items, Item } from "../styles/style_panorama";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchSearch } from "../store/actions/actions";

const Panorama: FC = () => {
  const [opt, setOpt] = useState(true);
  const [text, setText] = useState("");
  const { respons715 } = useTypeSelector((state) => state.respons);
  const video = useTypeSelector((state) => state.video);

  const [value] = useDebounce(text, 500);

  type Inputs = {
    search: string;
    searchRequired?: string;
  };

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { search: "" } });
  console.log(watch("search"));

  useEffect(() => {
    setValue("search", value);
    handleSubmit((data) => console.log("data", data))();
  }, [value, setValue, handleSubmit]);

  return (
    <Content respons715={respons715} move={video.loading}>
      <Search>
        <i
          className="fas fa-caret-left fa-2x"
          onClick={() => {
            setOpt(!opt);
            setText("");
          }}
        ></i>

        <input
          placeholder={opt ? "film" : "director"}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <i
          className="fas fa-caret-right fa-2x"
          onClick={() => {
            setOpt(!opt);
            setText("");
          }}
        ></i>
      </Search>

      <Items></Items>
    </Content>
  );
};

export default Panorama;
