'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitInvitation } from '@/app/actions'
import {useEffect, useState} from "react";
import {SubmitButton} from "@components/form/SubmitButton";
import {AgreementCheckInput} from "@components/form/AgreementCheckInput";
import {EmailInput} from "@components/form/EmailInput";
import {ReferralCodeInput} from "@components/form/ReferralCodeInput";
import {Alert} from "@components/form/Alert";

let initialState = {
    message: '',
    status : ''
}

export default function InvitationForm(
    { title, section }: {
        title?   : string,
        section? : string
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
                        section      = {section}
                        disabled     = {state.status === "success"}
                        setAgreement = {setAgreement}
                    />
                </div>
            </form>
            <Alert
                message = {state.message}
                status  = {state.status}
            />
        </div>
    )
}
