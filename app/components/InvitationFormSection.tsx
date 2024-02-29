'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitInvitation } from '@/app/actions'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from "react";

let initialState = {
    message: '',
    status : ''
}

function EmailInput(
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

function ReferralCodeInput(
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

function AgreementCheckInput(
    { disabled, setAgreement }: {
        disabled    : boolean,
        setAgreement: (agreement: boolean) => void
    }
) {
    const { pending } = useFormStatus();
    
    return (
        <div className='flex gap-2 order-4'>
            <input
                id        = {'agreementCheck'}
                name      = {'agreementCheck'}
                type      = "checkbox"
                className = 'w-4 h-4 rounded mt-0.5 text-[#F67D00] accent-red-500 border-transparent hover:border-[#F67D00] checked:ring-none focus:ring-0 transition-colors duration-300 ease-in-out'
                disabled  = {disabled || pending}
                onChange  = {(e) => setAgreement(e.target.checked)}
                required
            />
            <label
                htmlFor    = {'agreementCheck'}
                className  = {'text-b-sm text-white'}
                aria-label = {'By entering your email you agree to receive marketing communications from SIA Upwood. You can unsubscribe at any time. For more information, see our Privacy Policy'}
            >
                By entering your email you agree to receive marketing communications from SIA Upwood. You
                can unsubscribe at any time. For more information, see our Privacy Policy
            </label>
        </div>
    )
}

function SubmitButton(
    { disabled }: {
        disabled: boolean
    }
) {
    const { pending } = useFormStatus();
    
    return (
        <button
            className = 'button-md order-3 md:order-2 w-full md:w-auto'
            disabled  = {pending || disabled}
        >
            { pending ? "Sending..." : "Request invitation" }
        </button>
    )
}

function Alert({ message, status }: typeof initialState) {
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

export default function InvitationForm(
    { title }: {
        title?: string
    }
) {
    const [state, formAction] = useFormState(submitInvitation, initialState)
    const [email, setEmail] = useState('')
    const [agreement, setAgreement] = useState(false);
    const [valid, setValid] = useState(false);
    
    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        setValid(emailRegex.test(email) && agreement)
    }, [email, agreement])

    return (
        <div className='flex flex-col gap-6 max-w-2xl'>
            {title && (
                <h2 className='text-h-sm font-bold text-white text-center'>{title}</h2>
            )}
            <form action={formAction}>
                <div className='flex gap-y-4 md:gap-y-6 md:gap-x-5 flex-wrap'>
                    <EmailInput
                        disabled = {state.status === "success"}
                        setEmail = {setEmail}
                    />
                    <div className={"w-full order-2 md:order-3"}>
                        <ReferralCodeInput disabled={state.status === "success"} />
                    </div>
                    <SubmitButton disabled={!valid || state.status === "success"} />
                    <AgreementCheckInput
                        disabled     = {state.status === "success"}
                        setAgreement = {setAgreement}
                    />
                </div>
            </form>
            <Alert {...state}/>
        </div>
    )
}
