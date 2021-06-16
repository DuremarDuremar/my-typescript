import { combineReducers } from "redux";
import { topReducer } from "./reducers/topReducer";
import { videoReducer } from "./reducers/videoReducer";
import { directorsReducer } from "./reducers/directorsReducer";
import { responsReducer } from "./reducers/responsReducer";

export const rootReducer = combineReducers({
  top: topReducer,
  video: videoReducer,
  directors: directorsReducer,
  respons: responsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
