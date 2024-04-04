import {useFormStatus} from "react-dom";
import {motion} from "framer-motion";

export function Alert(
    {message, status}: {
        message: string,
        status : string
    }
) {
    const {pending} = useFormStatus();
    
    if (pending || message.length === 0) return null
    
    return (
        <motion.div
            initial    = {{ opacity: 0, scale: 0.7 }}
            animate    = {{ opacity: 1, scale: 1 }}
            transition = {{ duration: 0.5 }}
            className  = {`${status === "success" ? "bg-green-400/70" : "bg-rose-600/70"} p-4 rounded-md font-lexend text-b-sm text-white`}
            role       = "alert"
        >{message}</motion.div>
    )
}
