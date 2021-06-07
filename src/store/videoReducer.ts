import { VideoState, VideoAction } from "../types/video";

const initianalState: VideoState = {
  loading: false,
  id: null,
  error: null,
};

export const videoReducer = (
  state = initianalState,
  action: VideoAction
): VideoState => {
  return state;
};
