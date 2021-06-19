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

export const panoramaReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_PANORAMA:
      return {
        loading: true,
        error: null,
        items: state.items,
      };
    case DefaultActionTypes.FETCH_PANORAMA_SUCCESS:
      return {
        loading: true,
        error: null,
        items: [...state.items, ...action.payload],
      };
    case DefaultActionTypes.FETCH_PANORAMA_ERROR:
      return {
        loading: true,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};
