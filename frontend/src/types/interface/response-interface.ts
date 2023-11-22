export type ResponseCode =
  | "VF"
  | "DE"
  | "DBE"
  | "SU"
  | "DE"
  | "NU"
  | "NB"
  | "SF"
  | "AF"
  | "NP";

export interface LoginResponse {
  code: ResponseCode;
  message: string;
  token: string;
  expirationTime: number;
}

export interface RegisterResponse {
  code: ResponseCode;
  message: string;
}
