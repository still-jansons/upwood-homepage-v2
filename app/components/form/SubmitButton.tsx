import {useFormStatus} from "react-dom";

export function SubmitButton(
    {disabled}: {
        disabled: boolean
    }
) {
    const {pending} = useFormStatus();
    
    return (
        <button
            className='button-md order-3 md:order-2 w-full md:w-auto'
            disabled={pending || disabled}
        >
            {pending ? "Sending..." : "Request invitation"}
        </button>
    )
}
