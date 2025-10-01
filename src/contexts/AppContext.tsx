import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isNavbarMenuClose: boolean;
  setNavbarClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const initState: AppContextType = {
  isNavbarMenuClose: false,
  setNavbarClose: () => {},
};

const AppContext = createContext<AppContextType>(initState);

function AppContextProvider({ children }: { children: ReactNode }) {
  const [isNavbarMenuClose, setNavbarClose] = useState(true);

  return (
    <AppContext.Provider value={{ isNavbarMenuClose, setNavbarClose }}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export { AppContextProvider, useAppContext };
