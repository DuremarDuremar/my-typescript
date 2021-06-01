import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../types/default";

const initianalState: DefaultState = {
  users: [],
  loading: false,
  error: null,
};

export const sliderReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT:
      return { loading: true, error: null, users: [] };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
