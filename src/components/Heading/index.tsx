import styles from './styles.module.css';
import * as React from "react";

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({children}: HeadingProps) {
    console.log(styles)

    return (
        <>
            <h1 className={styles.heading}>
                {children}
            </h1>
        </>
    );
}

