import {createContext} from "react";

export const AppContext=createContext();
export const  AppContextProvider =({ children }) => {
    const a = "ValueA";
    const b = "ValueB";
    const c = "ValueC";
    const d = "ValueD";
    const e = "ValueE";
    const f = "ValueF";

    return (
        <AppContext.Provider value={{ a,b,c,d,e,f}}>
            {children}
        </AppContext.Provider>
    );
};