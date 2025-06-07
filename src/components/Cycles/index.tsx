import styles from './styles.module.css'

export function Cycles() {
    return (
        <>
            <div className={styles.cycles}>
                <span>Ciclos: </span>

                <div className={styles.cycleDots}>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.breakTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.breakTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.breakTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.restTime}`}></span>
                </div>
            </div>
        </>
    )
}