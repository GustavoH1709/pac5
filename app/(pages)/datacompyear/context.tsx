import { ReactNode, createContext, useContext } from "react";

export const context = createContext(null as any);

export function useDataCompYearContext() {
  return useContext(context);
}

export function DataCompYearContextProvider({
  events,
  children,
}: {
  events: any;
  children: ReactNode;
}) {




  const values = {
    ...events
  };

  return <context.Provider value={values}>{children}</context.Provider>;
}
