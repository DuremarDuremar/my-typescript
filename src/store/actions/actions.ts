import { Dispatch } from "redux";
import axios from "axios";

import { DefaultActionTypes, DefaultAction } from "../../types/default";
import { VideoActionTypes, VideoAction } from "../../types/video";

const noFilm = [
  {
    filmId: "not_found",
    nameRu: "не найдено",
    nameEn: "not found",
  },
];

const arrayTop: string[][] = [
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
  ["7695", "508", "56328", "20793", "439", "486", "358", "784", "6977", "2890"],
  [
    "7226",
    "5558",
    "511",
    "2272",
    "515",
    "334",
    "585042",
    "757",
    "1048334",
    "483",
  ],
];

const arrayDirectors: string[] = [
  "5890",
  "12020",
  "12019",
  "16550",
  "10988",
  "27407",
  "15359",
  "25080",
  "16563",
  "33008",
  "22412",
  "64249",
  "185595",
];

export const fetchTop = (
  n: number,
  setDopLoading: (dopLoading: boolean) => void
) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      setDopLoading(true);
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });
      const resArray = arrayTop[n].map((item) => {
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
          setDopLoading(false);
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

export const fetchVideo = (id: number) => {
  return async (dispatch: Dispatch<VideoAction>) => {
    try {
      dispatch({ type: VideoActionTypes.FETCH_VIDEO });
      const res = axios
        .get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/videos`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
            },
          }
        )
        .then((res) => res.data.trailers[0]);

      dispatch({
        type: VideoActionTypes.FETCH_VIDEO_SUCCESS,
        payload: await res,
      });
    } catch (e) {
      dispatch({
        type: VideoActionTypes.FETCH_VIDEO_ERROR,
        payload: "ошибка",
      });
    }
  };
};

export const fetchDirectors = (
  n: number,
  setDopLoading: (dopLoading: boolean) => void
) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      setDopLoading(true);
      dispatch({ type: DefaultActionTypes.FETCH_DIRECTORS });
      const resArray = arrayDirectors.slice(n, n + 8).map((item) => {
        const res = axios.get(
          `https://kinopoiskapiunofficial.tech/api/v1/staff/${item}`,
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
        type: DefaultActionTypes.FETCH_DIRECTORS_SUCCESS,
        payload: await Promise.all(resArray).then(function (values) {
          setDopLoading(false);
          return values.map((item) => item.data);
        }),
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DIRECTORS_ERROR,
        payload: "ошибка",
      });
    }
  };
};

export const fetchSearch = (name: string) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_PANORAMA });
      const res = axios
        .get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
            },
          }
        )
        .then((res) =>
          res.data.films.slice(0, 5).length > 0
            ? res.data.films.slice(0, 5)
            : noFilm
        );

      dispatch({
        type: DefaultActionTypes.FETCH_PANORAMA_SUCCESS,
        payload: await res,
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_PANORAMA_ERROR,
        payload: "ошибка",
      });
    }
  };
};

export const removeVideo = () => {
  return {
    type: VideoActionTypes.VIDEO_REMOVE,
    payload: false,
  };
};
export const removePanorama = () => {
  return {
    type: DefaultActionTypes.PANORAMA_REMOVE,
  };
};
