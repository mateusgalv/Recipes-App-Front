import { createContext } from "react";

interface IIsLoading {
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void;
}

export const LoadingContext = createContext<IIsLoading>({
  isLoading: false,
  setIsLoading: () => {},
});
