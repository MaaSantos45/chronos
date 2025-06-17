import styles from './styles.module.css'
import {Bounce, ToastContainer} from "react-toastify";


export function MessagesToast() {
    return (
        <>
            <div className={styles.core}>
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </div>
        </>
    )
}