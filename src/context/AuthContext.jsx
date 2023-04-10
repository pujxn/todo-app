import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUsername());
    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    function getUsername() {
        const savedUsername = localStorage.getItem("username");
        // console.log("temp", temp);
        return savedUsername || "";
    }

    useEffect(() => {
        // const temp = JSON.stringify(user);
        localStorage.setItem("username", user);
    }, [user])

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);