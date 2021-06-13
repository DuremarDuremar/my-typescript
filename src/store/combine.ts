import { combineReducers } from "redux";
import { sliderReducer } from "./reducers/sliderReducer";
import { videoReducer } from "./reducers/videoReducer";
import { responsReducer } from "./reducers/responsReducer";

export const rootReducer = combineReducers({
  slider: sliderReducer,
  video: videoReducer,
  respons: responsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
