import {createContext, useState, useEffect} from "react";

let ipcRenderer;

if (typeof window !== "undefined") {
    ipcRenderer = window.require("electron").ipcRenderer;
}

const defaultValue = {
    login: null,
    logout: null,
    setIsLoggedIn: null,
    setAccessToken: null,
    isLoggedIn: false,
    accessToken: '',
}

export const AuthContext = createContext(defaultValue);

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
        ipcRenderer.on('accessToken', (events, token) => {
            setIsLoggedIn(true)
            setAccessToken(token)
        })
    }, [])

    const login = () => {
        console.log("Trying to login.......")
        ipcRenderer.invoke('loginWithMyLib', 'asdasd')
    }

    const logout = () => {
        console.log("logout....")
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isLoggedIn,
            accessToken,
            setAccessToken,
            setIsLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider
