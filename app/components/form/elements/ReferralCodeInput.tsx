import {useFormStatus} from "react-dom";

export function ReferralCodeInput(
    { disabled }: {
        disabled: boolean
    }
) {
    const { pending } = useFormStatus();
    
    return (
        <input
            name        = 'referralCode'
            type        = 'text'
            placeholder = 'Referral code (optional)'
            className   = 'min-w-60 disabled:opacity-70'
            disabled    = {disabled || pending}
        />
    )
}
