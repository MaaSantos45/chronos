import styles from './styles.module.css'
import {MainLink} from "../../routers/MainLink";

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <MainLink href="/about">
                    Entenda como funciona a técnica pomodoro
                </MainLink>

                <MainLink href="/">
                    Chronos Pomodoro &copy; { new Date().getFullYear() } - Feito com 💚
                </MainLink>
            </footer>
        </>
    )
}