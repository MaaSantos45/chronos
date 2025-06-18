import styles from './styles.module.css';
import {TimerIcon} from "lucide-react";
import {MainLink} from "../../routers/MainLink";

export function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <MainLink className={styles.logoLink} href="/">
                    <TimerIcon />
                    <span>Chronos</span>
                </MainLink>
            </div>
        </>
    );
}

