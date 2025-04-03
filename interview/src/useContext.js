import { createContext } from "react";
import MainPage from "./conextMainPage";

export const LoginContext=createContext();
function UseContext(){
    return(
        <LoginContext.Provider value={true}>
            <MainPage/>
        </LoginContext.Provider>
    );

}
export default UseContext;