import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../types/default";

const initianalState: DefaultState = {
  items: [],
  loading: false,
  error: null,
};

export const sliderReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT:
      return { loading: true, error: null, items: [] };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return { loading: false, error: action.payload, items: [] };
    default:
      return state;
  }
};
