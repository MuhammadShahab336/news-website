import toast from "react-hot-toast";


export const successToast = (message) => {
    if(message) {
        return toast.success(`${message}`, {
            id: 'success-toast',
            duration: 4000,
        })
    }
}