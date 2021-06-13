import {
  ResponsState,
  ResponsAction,
  ResponsActionTypes,
} from "../../types/respons";

const initianalState: ResponsState = {
  respons1000: false,
};

export const responsReducer = (
  state = initianalState,
  action: ResponsAction
): ResponsState => {
  switch (action.type) {
    case ResponsActionTypes.RESPONS_1000:
      return {
        respons1000: action.payload,
      };
    default:
      return state;
  }
};
