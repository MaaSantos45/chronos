import * as React from "react";
import styles from './styles.module.css'

type ContainerProps = {
    children: React.ReactNode;
}

export function ContainerFluid({ children }: ContainerProps) {

    return (
        <>
            <div className={styles.containerFluid}>
                {children}
            </div>
        </>
    )
}

export function Container({ children }: ContainerProps) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <section>
                        {children}
                    </section>
                </div>
            </div>
        </>
    )
}