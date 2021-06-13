export interface ResponsState {
  respons1000: boolean;
}

export enum ResponsActionTypes {
  RESPONS_1000 = "RESPONS_1000",
}

interface Respons1000Action {
  type: ResponsActionTypes.RESPONS_1000;
  payload: boolean;
}

export type ResponsAction = Respons1000Action;
