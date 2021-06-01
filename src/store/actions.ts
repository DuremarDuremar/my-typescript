import { DefaultActionTypes, DefaultAction } from "../types/default";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchSlider = () => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });
      const res = await axios.get(
        "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=David%20Lynch&page=1",
        {
          method: "GET",
          headers: {
            "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
          },
        }
      );
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: res.data.films,
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_ERROR,
        payload: "ошибка",
      });
    }
  };
};
