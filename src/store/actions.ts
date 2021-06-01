import { DefaultActionTypes, DefaultAction } from "../types/default";
import { Dispatch } from "redux";
import axios from "axios";

const array: string[] = [
  "354",
  "195434",
  "425",
  "361",
  "15780",
  "1040841",
  "43970",
  "557",
  "588",
  "81530",
];

const ff = array.map((item, index) => {
  return `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`;
});
console.log(ff);

export const fetchSlider = () => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });

      const resArray = array.map((item, index) => {
        const res = axios.get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
            },
          }
        );
        return res;
      });

      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: await Promise.all(resArray).then(function (values) {
          return values.map((item) => item.data.data);
        }),
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_ERROR,
        payload: "ошибка",
      });
    }
  };
};
