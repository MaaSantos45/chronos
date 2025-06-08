import {
    HistoryIcon,
    HouseIcon,
    SettingsIcon,
    SunIcon,
    MoonIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import * as React from "react";
import styles from './styles.module.css';

type AvailableThemes = "dark" | "light"

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem("theme") as AvailableThemes || 'dark'
    });

    const themeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleToggleTheme(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();

        setTheme(prevTheme => {
            return prevTheme === "dark" ? "light" : "dark"
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <>
            <nav className={styles.menu}>
                <a className={styles.menuLink} href="/" aria-label={"Home"} title={"Home"}>
                    <HouseIcon />
                </a>

                <a className={styles.menuLink} href="/"  aria-label={"History"} title={"History"}>
                    <HistoryIcon />
                </a>
                <a className={styles.menuLink} href="/" aria-label={"Settings"} title={"Settings"}>
                    <SettingsIcon />
                </a>

                <a className={styles.menuLink} onClick={handleToggleTheme} href="#" aria-label={"Themes"} title={"Themes"}>
                    {themeIcon[theme]}
                </a>
            </nav>
        </>
    );
}

