import { useState } from "react"
import { ApiContext, IApiContext } from "./ApiContext";

export const ApiContextProvider: any = ({ children }: any) => {
  const [data, setData] = useState<IApiContext | null>(null);

  return (
    <ApiContext.Provider value={{ data, setData }}>
      { children }
    </ApiContext.Provider>
  );
};