import { DefaultActionTypes, DefaultAction } from "../types/default";
import { Dispatch } from "redux";
import axios from "axios";

const array: string[][] = [
  [
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
  ],
  [
    "1219852",
    "259788",
    "1043758",
    "942396",
    "998317",
    "944098",
    "954059",
    "57000",
    "103733",
    "4872",
  ],
];

export const fetchSlider = (n: number) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT_NUMBER, payload: n });
      const resArray = array[n].map((item) => {
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
