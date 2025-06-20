import * as React from 'react'
import styles from './styles.module.css'

type DefaultInputProps = {
    id: string;
    label?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({id, type, label, ...props}: DefaultInputProps) {
    return (
        <>
            {label && (<label htmlFor={id}>{label}</label>)}
            <input className={styles.input} id={id} type={type} {...props} />
        </>
    )
}
