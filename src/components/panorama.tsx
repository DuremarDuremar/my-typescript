import { FC, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { debounce } from "debounce";
import { Content, Search, Items, Item } from "../styles/style_panorama";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchSearch } from "../store/actions/actions";

const Panorama: FC = () => {
  const [opt, setOpt] = useState(true);
  // const [value, setValue] = useState("");
  const { respons715 } = useTypeSelector((state) => state.respons);
  const video = useTypeSelector((state) => state.video);

  type Inputs = {
    search: string;
    searchRequired?: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { search: "" } });
  console.log(watch("search"));
  // console.log(handleSubmit);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(fetchSearch());
  //   }, 1800);
  // }, []);

  // const red = debounce(setOpt, 800);
  return (
    <Content respons715={respons715} move={video.loading}>
      <Search>
        <i
          className="fas fa-caret-left fa-2x"
          onClick={() => {
            setOpt(!opt);
            reset({ search: "" });
          }}
        ></i>
        <input
          placeholder={opt ? "film" : "director"}
          onChange={(e) => {
            setValue("search", e.target.value);
            handleSubmit((data) => console.log("data", data))();
          }}
        />
        <i
          className="fas fa-caret-right fa-2x"
          onClick={() => {
            setOpt(!opt);
            setValue("search", "", {
              // shouldValidate: true,
              // shouldDirty: true,
            });
          }}
        ></i>
      </Search>

      <Items></Items>
    </Content>
  );
};

export default Panorama;
