import { GlobalContext } from "./GlobalContext";

export const ContextProvider = ({ children }: any) => {
  const URL = "http://localhost:3000/api/v1";

  return (
    <GlobalContext.Provider value={{ url: URL }}>
      {children}
    </GlobalContext.Provider>
  );
};
