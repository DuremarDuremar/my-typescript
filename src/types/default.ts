export interface DefaultState {
  items: any[];
  loading: boolean;
  error: null | string;
  number?: number;
}

export enum DefaultActionTypes {
  FETCH_DEFAULT = "FETCH_DEFAULT",
  FETCH_DEFAULT_SUCCESS = "FETCH_DEFAULT_SUCCESS",
  FETCH_DEFAULT_ERROR = "FETCH_DEFAULT_ERROR",
  FETCH_DEFAULT_NUMBER = "FETCH_DEFAULT_NUMBER",
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
interface FetchDefaultNumberAction {
  type: DefaultActionTypes.FETCH_DEFAULT_NUMBER;
  payload: number;
}
export type DefaultAction =
  | FetchDefaultAction
  | FetchDefaultSuccessAction
  | FetchDefaultErrorAction
  | FetchDefaultNumberAction;
