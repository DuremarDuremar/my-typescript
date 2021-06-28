import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Content, Item, Button } from "../styles/style_top";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { fetchTop, fetchVideo } from "../store/actions/actions";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import Spinner from "../utils/spinner";

const Top: FC = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  const [idVideo, setIdVideo] = useState<number | null>(null);
  const [dopLoading, setDopLoading] = useState(false);
  const { error, loading, items } = useTypeSelector((state) => state.top);
  const { respons1000, respons715 } = useTypeSelector((state) => state.respons);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible * 10 >= items.length) {
      dispatch(fetchTop(isVisible, setDopLoading));
    }
  }, [dispatch, isVisible]);

  useEffect(() => {
    if (idVideo) {
      dispatch(fetchVideo(idVideo));
      setIdVideo(null);
    }
  }, [dispatch, idVideo]);

  // console.log("isVisible", isVisible);
  // console.log("items", items);
  // console.log(idVideo);
  // console.log("top", history);

  const containerRef = useElementOnScreen(setIsVisible, 3, "top");
  const scrollRef: any = useHorizontalScroll();

  const render = () => {
    if (error) {
      return <h1>{error}</h1>;
    } else if (items.length < 1 && loading) {
      return <Spinner />;
    } else {
      return (
        <>
          {items.map((item, index) => {
            let link = `/${item.filmId}`;
            return (
              <Item
                key={index}
                ref={index === items.length - 3 ? containerRef : null}
                respons1000={respons1000}
              >
                <Button
                  left
                  respons1000={respons1000}
                  onClick={() => setIdVideo(item.filmId)}
                >
                  <i className="fas fa-video fa-3x"></i>
                </Button>
                <img src={item.posterUrlPreview} alt={item.NameEn} />
                <Link to={link}>
                  <Button respons1000={respons1000}>
                    <i className="fas fa-file-import fa-3x"></i>
                  </Button>
                </Link>
              </Item>
            );
          })}
          {dopLoading && <Spinner top />}
        </>
      );
    }
  };

  return (
    <Content ref={scrollRef} respons1000={respons1000} respons715={respons715}>
      {render()}
    </Content>
  );
};

export default Top;
