import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";

import { Content, Search, Items, Item } from "../styles/style_panorama";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchSearch } from "../store/actions/actions";
import { removePanorama } from "../store/actions/actions";
import Spinner from "../utils/spinner";

const Panorama: FC = () => {
  const [opt, setOpt] = useState(true);
  const [text, setText] = useState("");
  const { respons715 } = useTypeSelector((state) => state.respons);
  const { loading, error, items } = useTypeSelector((state) => state.panorama);
  const video = useTypeSelector((state) => state.video);
  const dispatch = useDispatch();
  const [value] = useDebounce(text, 1500);

  type Inputs = {
    search: string;
  };

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { search: "" } });
  // console.log(watch("search"));

  console.log("text", text);

  useEffect(() => {
    setValue("search", value);

    if (value.length > 2) {
      dispatch(removePanorama());
      setText("");
      handleSubmit((data) => dispatch(fetchSearch(data.search)))();
    }
  }, [value, setValue, handleSubmit, dispatch]);

  const content = (
    <>
      <Search>
        <i
          className="fas fa-caret-left fa-2x"
          onClick={() => {
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
            setText("");
          }}
        ></i>
      </Search>

      <Items>
        {items.map((item, index) => {
          if (item.filmId === "not_found") {
            return (
              <Item key={index} not>
                <div>
                  <i className="fas fa-hashtag fa-4x"></i>
                  <p>
                    {item.nameRu}
                    <br />
                    {item.nameEn}
                  </p>
                </div>
              </Item>
            );
          } else {
            return (
              <Item key={index}>
                <img src={item.posterUrlPreview} alt={item.nameEn} />
                <div>
                  <p>
                    {item.nameRu}
                    <br />
                    {item.nameEn}
                  </p>
                  <p>{item.year}</p>
                </div>
              </Item>
            );
          }
        })}
      </Items>
    </>
  );

  const render = () => {
    if (error) {
      return <h1>{error}</h1>;
    } else if (items.length < 1 && loading) {
      return <Spinner />;
    } else {
      return content;
    }
  };
  return (
    <Content respons715={respons715} move={video.loading}>
      {render()}
    </Content>
  );
};

export default Panorama;
