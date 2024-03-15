import React from "react";

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
    const [ user, setUser ] = React.useState(null)
    const [ isAuthenticated, setIsAuthenticated ] = React.useState(undefined)

    React.useEffect(() => {

        setTimeout(() => {
            setIsAuthenticated(false)
        }, 3000)
    }, [])

    const login = async (email, password) => {
        try {
            
        } catch (error) {
            
        }
    };

    const logout = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    const register = async (email, password, username, profileUrl) => {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = React.useContext(AuthContext)

    if(!value) {
        throw new Error('useAuth must be wrapped in an AuthContextProvider')
    }

    return value
}