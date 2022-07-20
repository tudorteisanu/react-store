import { createContext } from "react";

const GlobalContext = createContext({ navigate: null, user: null, token: null } as any);

const GlobalProvider = GlobalContext.Provider;
const GlobalConsumer = GlobalContext.Provider;

export { GlobalContext, GlobalProvider, GlobalConsumer };
