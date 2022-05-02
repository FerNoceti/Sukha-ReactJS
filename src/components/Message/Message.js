import { toast } from'react-toastify';

export default function Message({ message, theme }){
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'succes',
        theme: theme,
        })
}