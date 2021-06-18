import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../../types/default";

const initianalState: DefaultState = {
  loading: false,
  items: [],
  error: null,
};

export const directorsReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DIRECTORS:
      return {
        loading: true,
        error: null,
        items: state.items,
      };
    case DefaultActionTypes.FETCH_DIRECTORS_SUCCESS:
      return {
        loading: true,
        error: null,
        items: [...state.items, ...action.payload],
      };
    case DefaultActionTypes.FETCH_DIRECTORS_ERROR:
      return {
        loading: true,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};
