import styles from './styles.module.css'
import type {ToastContentProps} from "react-toastify";
import {DefaultButton} from "../DefaultButton";
import {ThumbsDownIcon, ThumbsUpIcon} from "lucide-react";


export function Dialog({ closeToast, data }: ToastContentProps<string>) {
    return (
        <>
            <div className={styles.core}>
                <p>{data}</p>

                <div className={styles.buttonsCore}>
                    <DefaultButton
                        onClick={() => {closeToast(true)}}
                        aria-label={"Confirmar ação de fechar"}
                        title={"Confirmar ação de fechar"}
                        color={'green'}
                    >
                        <ThumbsUpIcon />
                    </DefaultButton>

                    <DefaultButton
                        onClick={() => {closeToast(false)}}
                        aria-label={"Cancelar ação de fechar"}
                        title={"Cancelar ação de fechar"}
                        color={'red'}
                    >
                        <ThumbsDownIcon />
                    </DefaultButton>
                </div>
            </div>
        </>
    )
}