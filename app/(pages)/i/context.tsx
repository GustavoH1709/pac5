import { ReactNode, createContext, useContext } from "react";

export const context = createContext(null as any);

export function useIContext() {
  return useContext(context);
}

export function IContextProvider({
  events,
  children,
}: {
  events: any;
  children: ReactNode;
}) {
  const values = {};

  return <context.Provider value={values}>{children}</context.Provider>;
}
