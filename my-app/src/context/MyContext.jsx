import React, { createContext, useState } from "react";


// Create context
export const MyContext = createContext("")


// Provider
export default function ContextProvider({ children }) {
    const [name, setName] = useState("Hamza")

    return (
        <MyContext value={{name}}>
            {children}
        </MyContext>
    )
}