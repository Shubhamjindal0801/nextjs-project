"use client"

import "./styles.css";
import Button from "../Button";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") == 'dark' ? true : false
    )
    useEffect(() => {
        if (localStorage.getItem("theme") == "dark") {
            setDark();
        } else {
            setLight();
        }
    }, []);

    const changeMode = () => {
        setDarkMode(!darkMode);
        const mode = localStorage.getItem("theme");
        if (mode == "dark") {
            setLight();
        } else {
            setDark();
        }
    };

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };
    return (
        <div className="navbar">
            <Link href="/"><h1 className="logo">CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h1></Link>
            <div className="links">
                <Switch
                    checked={darkMode}
                    onClick={() => {
                        changeMode();
                    }}
                />
                <Link href="/"><p className="link">Home</p></Link>
                <Link href="/compare"><p className="link">Compare</p></Link>
                <Link href="/watchlist"><p className="link">Watchlist</p></Link>
                <Link href='/dashboard'><Button text={"Dashboard"} outlined={false} onClick={() => console.log('clicked')} /></Link>
            </div>
        </div>
    )
}

export default Header;