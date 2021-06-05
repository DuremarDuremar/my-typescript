import { combineReducers } from "redux";
import { sliderReducer } from "./sliderReducer";
import { videoReducer } from "./videoReducer";

export const rootReducer = combineReducers({
  slider: sliderReducer,
  video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
