import {
  DirectorsState,
  DirectorsAction,
  DirectorsActionTypes,
} from "../../types/directors";

const initianalState: DirectorsState = {
  loading: false,
  items: [],
  error: null,
};

export const directorsReducer = (
  state = initianalState,
  action: DirectorsAction
): DirectorsState => {
  switch (action.type) {
    case DirectorsActionTypes.FETCH_DIRECTORS:
      return {
        loading: true,
        error: null,
        items: state.items,
      };
    case DirectorsActionTypes.FETCH_DIRECTORS_SUCCESS:
      return {
        loading: true,
        error: null,
        items: [...state.items, ...action.payload],
      };
    case DirectorsActionTypes.FETCH_DIRECTORS_ERROR:
      return {
        loading: true,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};
