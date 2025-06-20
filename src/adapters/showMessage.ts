import { toast } from 'react-toastify';
import {Dialog} from "../components/Dialog";

export const showMessage = {
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    warning: (msg: string) => toast.warning(msg),
    info: (msg: string) => toast.info(msg),
    confirm: (data: string, onClosing: (confirmation: boolean) => void) => {
        toast(Dialog, {
            data: data,
            onClose: (reason) => {return onClosing(!!reason)},
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        })
    }
}