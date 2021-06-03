import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../types/default";

const initianalState: DefaultState = {
  items: [],
  loading: false,
  error: null,
  number: 1,
};

export const sliderReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT:
      return {
        loading: true,
        error: null,
        items: state.items,
        number: state.number,
      };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return {
        loading: false,
        error: null,
        items: [...state.items, ...action.payload],
        number: state.number,
      };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return {
        loading: false,
        error: action.payload,
        items: [],
        number: state.number,
      };
    case DefaultActionTypes.FETCH_DEFAULT_NUMBER:
      return {
        loading: false,
        error: null,
        items: state.items,
        number: action.payload,
      };
    default:
      return state;
  }
};
