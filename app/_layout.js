import React from "react";
import { View } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";

import { AuthContextProvider, useAuth } from "../context/authContext";

import "../global.css"

const MainLayout = () => {
    const { isAuthenticated } = useAuth()

    const segments = useSegments()
    const router  = useRouter()

    React.useEffect(() => {
        if (typeof isAuthenticated == 'undefined') return
        
        const inApp = segments[0]=='(app)'

        if (isAuthenticated && !inApp) {
            router.replace('home')
        } else if (isAuthenticated == false) {
            router.replace('signin')
        }
    }, [isAuthenticated])

    return <Slot />
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}
