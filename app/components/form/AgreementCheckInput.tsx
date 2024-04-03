import {useFormStatus} from "react-dom";

export function AgreementCheckInput(
    {section = 'default', disabled, setAgreement}: {
        section?    : string,
        disabled    : boolean,
        setAgreement: (agreement: boolean) => void
    }
) {
    const {pending} = useFormStatus();
    
    return (
        <div className='order-4 flex gap-2'>
            <input
                id        = {`agreementCheck-${section}`}
                name      = "agreementCheck"
                type      = "checkbox"
                className = 'w-4 h-4 rounded mt-0.5 text-[#F67D00] accent-red-500 border-transparent hover:border-[#F67D00] checked:ring-none focus:ring-0 transition-colors duration-300 ease-in-out'
                disabled  = {disabled || pending}
                onChange  = {(e) => setAgreement(e.target.checked)}
                required
            />
            <label
                htmlFor    = {`agreementCheck-${section}`}
                className  = "text-white text-b-sm"
                aria-label = "By entering your email you agree to receive marketing communications from SIA Upwood. You can unsubscribe at any time. For more information, see our Privacy Policy"
            >
                By entering your email you agree to receive marketing communications from SIA Upwood. You
                can unsubscribe at any time. For more information, see our Privacy Policy
            </label>
        </div>
    )
}
