import { combineReducers } from "redux";
import { topReducer } from "./reducers/topReducer";
import { videoReducer } from "./reducers/videoReducer";
import { directorsReducer } from "./reducers/directorsReducer";
import { panoramaReducer } from "./reducers/panoramaReducer";
import { responsReducer } from "./reducers/responsReducer";

export const rootReducer = combineReducers({
  top: topReducer,
  video: videoReducer,
  directors: directorsReducer,
  panorama: panoramaReducer,
  respons: responsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
