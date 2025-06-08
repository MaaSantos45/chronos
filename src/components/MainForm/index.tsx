import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";

import styles from './styles.module.css'
import {DefaultButton} from "../DefaultButton";
import {PlayCircleIcon, StopCircleIcon} from "lucide-react";

export function MainForm() {
    return (
        <>
            <form className={styles.form} action="">
                <div className={styles.formRow}>
                    <DefaultInput
                        id={'myInput'}
                        type={'text'}
                        label={'Task'}
                        placeholder={'Digite Algo'}
                    />
                </div>

                <div className={styles.formRow}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className={styles.formRow}>
                    <Cycles />
                </div>

                <div className={styles.formRow}>
                    <DefaultButton color={'green'}>
                        <PlayCircleIcon />
                    </DefaultButton>

                    <DefaultButton color={'red'}>
                        <StopCircleIcon />
                    </DefaultButton>
                </div>
            </form>
        </>
    )
}