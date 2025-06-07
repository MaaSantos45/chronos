import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";

import styles from './styles.module.css'

export function Form() {
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
                    <button>Enviar</button>
                </div>
            </form>
        </>
    )
}