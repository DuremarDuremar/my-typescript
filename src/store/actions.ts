import { UserActionTypes, UserAction } from "../types/users";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
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
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: res.data.films,
      });
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "ошибка" });
    }
  };
};
