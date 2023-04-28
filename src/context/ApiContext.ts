import { createContext } from "react";

export interface IApiContext {
  data: any,
  setData: (data: any) => void,
}

export const ApiContext = createContext<IApiContext | null>(null);