export interface VideoState {
  loading: boolean;
  trailer: any | null;
  error: null | string;
}

export enum VideoActionTypes {
  FETCH_VIDEO = "FETCH_VIDEO",
  FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS",
  FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR",
}

interface FetchVideoAction {
  type: VideoActionTypes.FETCH_VIDEO;
}
interface FetchVideoSuccessAction {
  type: VideoActionTypes.FETCH_VIDEO_SUCCESS;
  payload: any;
}
interface FetchVideoErrorAction {
  type: VideoActionTypes.FETCH_VIDEO_ERROR;
  payload: string;
}

export type VideoAction =
  | FetchVideoAction
  | FetchVideoSuccessAction
  | FetchVideoErrorAction;
