import { navDataType } from "../types";
import { useState, createContext, ReactElement, useContext } from "react";

type RouteContextType = {
  activePage: navDataType;
  togglePage: React.Dispatch<React.SetStateAction<navDataType>>;
};

const RouteContext = createContext<RouteContextType | null>(null);

type RouteContextProviderType = {
  children: ReactElement;
};

export default function RouteContextProvider({
  children,
}: RouteContextProviderType) {
  const [page, setPage] = useState<navDataType>("Home");
  return (
    <RouteContext.Provider value={{ activePage: page, togglePage: setPage }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRouteContext() {
  const routeCtx = useContext(RouteContext);
  if (routeCtx === null) {
    throw Error(
      "useRouteSectionContext must be used within an RouteContextProvider"
    );
  }

  return routeCtx;
}
