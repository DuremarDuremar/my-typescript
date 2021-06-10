export interface VideoState {
  loading: boolean;
  trailer: any | null;
  error: null | string;
}

export enum VideoActionTypes {
  FETCH_VIDEO = "FETCH_VIDEO",
  FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS",
  FETCH_VIDEO_ERROR = "FETCH_VIDEO_ERROR",
  VIDEO_REMOVE = "VIDEO_REMOVE",
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
interface VideoRemoveAction {
  type: VideoActionTypes.VIDEO_REMOVE;
  payload: boolean;
}

export type VideoAction =
  | FetchVideoAction
  | FetchVideoSuccessAction
  | FetchVideoErrorAction
  | VideoRemoveAction;
