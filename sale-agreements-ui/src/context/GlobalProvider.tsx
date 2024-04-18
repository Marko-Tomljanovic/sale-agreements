import React, { ReactNode, createContext, useState } from "react";
import { SelectedRow } from "../utils/types";

const GlobalContext = createContext<any>(undefined);

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [dataSource, setDataSource] = useState<SelectedRow[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        dataSource,
        setDataSource,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within GlobalContext");
  }
  return context;
};
