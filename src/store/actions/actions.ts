import { DefaultActionTypes, DefaultAction } from "../../types/default";
import { VideoActionTypes, VideoAction } from "../../types/video";
import { Dispatch } from "redux";
import axios from "axios";

const arraySlider: string[][] = [
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

export const fetchSlider = (
  n: number,
  setDopLoading: (dopLoading: boolean) => void
) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      setDopLoading(true);
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });
      const resArray = arraySlider[n].map((item) => {
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

export const removeVideo = () => {
  return {
    type: VideoActionTypes.VIDEO_REMOVE,
    payload: false,
  };
};

// const res = axios.get(
//   `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/videos`,
//   {
//     method: "GET",
//     headers: {
//       "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
//     },
//   }
// );
// return res;