export interface DefaultState {
  items: any[];
  loading: boolean;
  error: null | string;
}

export enum DefaultActionTypes {
  FETCH_DEFAULT = "FETCH_DEFAULT",
  FETCH_DEFAULT_SUCCESS = "FETCH_DEFAULT_SUCCESS",
  FETCH_DEFAULT_ERROR = "FETCH_DEFAULT_ERROR",
  FETCH_DIRECTORS = "FETCH_DIRECTORS",
  FETCH_DIRECTORS_SUCCESS = "FETCH_DIRECTORS_SUCCESS",
  FETCH_DIRECTORS_ERROR = "FETCH_DIRECTORS_ERROR",
}

interface FetchDefaultAction {
  type: DefaultActionTypes.FETCH_DEFAULT;
}
interface FetchDefaultSuccessAction {
  type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS;
  payload: any[];
}
interface FetchDefaultErrorAction {
  type: DefaultActionTypes.FETCH_DEFAULT_ERROR;
  payload: string;
}

interface FetchDirectorsAction {
  type: DefaultActionTypes.FETCH_DIRECTORS;
}
interface FetchDirectorsSuccessAction {
  type: DefaultActionTypes.FETCH_DIRECTORS_SUCCESS;
  payload: any[];
}
interface FetchDirectorsErrorAction {
  type: DefaultActionTypes.FETCH_DIRECTORS_ERROR;
  payload: string;
}

export type DefaultAction =
  | FetchDefaultAction
  | FetchDefaultSuccessAction
  | FetchDefaultErrorAction
  | FetchDirectorsAction
  | FetchDirectorsSuccessAction
  | FetchDirectorsErrorAction;
