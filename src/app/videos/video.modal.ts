export interface FindYT {
  loading: number;
  loaded: number;
  PlayerState?: any;
  ready?: (a: any) => void;
  setConfig?: (a: any) => void;
  Player?: (a: any, b: any) => void;
}
