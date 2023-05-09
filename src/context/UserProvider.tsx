import { createContext, useState } from "react";

interface IUser {
  email: string,
  setEmail: (email: string) => void,
  // favorites: [{}],
  // setFavorites: () => void,
  // myRecipes: [{}],
  // setMyRecipes: () => void,
}

export const UserContext = createContext<IUser>({
  email: '',
  setEmail: () => {},
});

export const UserContextProvider: any = ({ children }: any) => {
  const [email, setEmail] = useState<string>('');
  return (
    <UserContext.Provider value={{ email, setEmail }}>
      { children }
    </UserContext.Provider>
  )
}

