'use client'
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProivder = ({ children }) => {
    const [user, setUser] = useState(null);
    const [webTheme, setTheme] = useState("");
    const toggleTheme = () => {
        // console.log({ webTheme })
        setTheme(webTheme === '' ? 'light' : '')
        const html = document.getElementsByTagName("*")[0];
        if (webTheme === '') {
            html.classList.add('light');
        } else {
            html.classList.remove('light');

        }

    }
    return <UserContext.Provider value={{ user, setUser, webTheme, setTheme, toggleTheme }}>
        {children}
    </UserContext.Provider>
}
export default UserContextProivder;