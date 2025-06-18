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
import {MainLink} from "../../routers/MainLink";

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
                <MainLink className={styles.menuLink} href="/" aria-label={"Home"} title={"Home"}>
                    <HouseIcon />
                </MainLink>

                <MainLink className={styles.menuLink} href="/history"  aria-label={"History"} title={"History"}>
                    <HistoryIcon />
                </MainLink>

                <MainLink className={styles.menuLink} href="/settings" aria-label={"Settings"} title={"Settings"}>
                    <SettingsIcon />
                </MainLink>

                <a className={styles.menuLink} onClick={handleToggleTheme} aria-label={"Themes"} title={"Themes"}>
                    {themeIcon[theme]}
                </a>
            </nav>
        </>
    );
}

