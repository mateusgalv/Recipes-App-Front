import { useState } from 'react';
import { LoadingContext } from './LoadingContext';

export const LoadingContextProvider: any = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      { children }
    </LoadingContext.Provider>
  );
};