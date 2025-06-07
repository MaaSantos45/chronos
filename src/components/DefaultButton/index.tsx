import * as React from 'react'
import styles from './styles.module.css'

type DefaultButtonProps = {
    color?: 'green' | 'red'
    children: React.ReactNode;
} & React.ComponentProps<'button'>

export function DefaultButton({ color = 'green', children, ...props }: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {children}
            </button>
        </>
    )
}
