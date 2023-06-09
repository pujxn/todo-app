import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUsername());
    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    function getUsername() {
        return (JSON.parse(localStorage.getItem("username")) || "");
    }

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);