import { VideoState, VideoAction, VideoActionTypes } from "../types/video";

const initianalState: VideoState = {
  loading: false,
  trailer: null,
  error: null,
};

export const videoReducer = (
  state = initianalState,
  action: VideoAction
): VideoState => {
  switch (action.type) {
    case VideoActionTypes.FETCH_VIDEO:
      return {
        loading: true,
        error: null,
        trailer: null,
      };
    case VideoActionTypes.FETCH_VIDEO_SUCCESS:
      return {
        loading: true,
        error: null,
        trailer: action.payload,
      };
    case VideoActionTypes.FETCH_VIDEO_ERROR:
      return {
        loading: true,
        error: action.payload,
        trailer: {},
      };

    default:
      return state;
  }
};
