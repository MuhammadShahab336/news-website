import toast from "react-hot-toast";

export const successToast = (message) => {
    if(message) {
        return toast.success(`${message}`, {
            id: 'success-toast',
            duration: 4000,
        })
    }
}

export const errorToast = (message, setError) => {
    if(message) {
        Object.entries(message)?.forEach(([key, value]) => {
            console.log('value', value[0])
            setError(key, { type: "custom", message: `${value[0]}` })
        })
    }
}

export const dateFormat = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${day}/${month}/${year}`
}

export const dateFormatReverse = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${year}-${month}-${day}`
}