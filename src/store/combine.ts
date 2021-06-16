import { combineReducers } from "redux";
import { topReducer } from "./reducers/topReducer";
import { videoReducer } from "./reducers/videoReducer";
import { responsReducer } from "./reducers/responsReducer";

export const rootReducer = combineReducers({
  top: topReducer,
  video: videoReducer,
  respons: responsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
