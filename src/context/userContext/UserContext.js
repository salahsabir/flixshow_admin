import UserReducer from "./UserReducer";
import {createContext, useReducer} from "react"

const INITIAL_STATE = {
    user: [],
    isFetching: false,
    error: false,
};

export const UserContext = createContext(INITIAL_STATE)

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer,INITIAL_STATE)

    return <UserContext.Provider 
        value={{
            user:state.user, 
            isFetching:state.isFetching, 
            error:state.error,
            dispatch
            }}>{children}
        </UserContext.Provider>
}