import { createContext } from "react";

const GlobalContext = createContext({});

const GlobalProvider = GlobalContext.Provider;

export { GlobalContext, GlobalProvider };
