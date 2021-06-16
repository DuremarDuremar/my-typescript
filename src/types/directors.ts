export interface DirectorsState {
  items: any[];
  loading: boolean;
  error: null | string;
}

export enum DirectorsActionTypes {
  FETCH_DIRECTORS = "FETCH_DIRECTORS",
  FETCH_DIRECTORS_SUCCESS = "FETCH_DIRECTORS_SUCCESS",
  FETCH_DIRECTORS_ERROR = "FETCH_DIRECTORS_ERROR",
}

interface FetchDirectorsAction {
  type: DirectorsActionTypes.FETCH_DIRECTORS;
}
interface FetchDirectorsSuccessAction {
  type: DirectorsActionTypes.FETCH_DIRECTORS_SUCCESS;
  payload: any[];
}
interface FetchDirectorsErrorAction {
  type: DirectorsActionTypes.FETCH_DIRECTORS_ERROR;
  payload: string;
}

export type DirectorsAction =
  | FetchDirectorsAction
  | FetchDirectorsSuccessAction
  | FetchDirectorsErrorAction;
