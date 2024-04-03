'use client'

import {useFormState} from 'react-dom'
import {submitNewsletter} from '@/app/actions'
import {useEffect, useState} from "react";
import {AgreementCheckInput} from "@components/form/AgreementCheckInput";
import {SubmitButton} from "@components/form/SubmitButton";
import {EmailInput} from "@components/form/EmailInput";
import {Alert} from "@components/form/Alert";

let initialState = {
    message: '',
    status : ''
}

export default function InvitationForm() {
    const [state, formAction] = useFormState(submitNewsletter, initialState)
    const [email, setEmail] = useState('')
    const [agreement, setAgreement] = useState(false);
    const [valid, setValid] = useState(false);
    
    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        setValid(emailRegex.test(email) && agreement)
    }, [email, agreement])
    
    return (
        <div className='flex flex-col gap-6 max-w-2xl mx-auto'>
            <form action={formAction}>
                <div className='flex gap-y-4 md:gap-y-6 md:gap-x-5 flex-wrap'>
                    <EmailInput
                        disabled = {state.status === "success"}
                        setEmail = {setEmail}
                    />
                    <SubmitButton disabled={!valid || state.status === "success"} />
                    <AgreementCheckInput
                        key          = 'newsletter'
                        disabled     = {state.status === "success"}
                        setAgreement = {setAgreement}
                    />
                </div>
            </form>
            <Alert message={state.message} status={state.status} />
        </div>
    )
}
