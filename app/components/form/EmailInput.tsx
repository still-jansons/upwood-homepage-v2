import {useFormStatus} from "react-dom";

export function EmailInput(
    { disabled, setEmail }: {
        disabled: boolean,
        setEmail: (email: string) => void
    }
) {
    const { pending } = useFormStatus();
    
    return (
        <input
            name        = 'email'
            type        = 'email'
            placeholder = 'E-mail address'
            className   = 'flex-1 order-1 disabled:opacity-70'
            disabled    = {disabled || pending}
            onChange    = {(e) => setEmail(e.target.value)}
            required
        />
    )
}
