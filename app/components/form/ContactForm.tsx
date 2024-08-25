"use client";

import { useFormState } from "react-dom";
import { submitContact } from "@/app/actions";
import { useEffect, useState } from "react";
import { AgreementCheckInput } from "@components/form/elements/AgreementCheckInput";
import { SubmitButton } from "@components/form/elements/SubmitButton";
import { EmailInput } from "@components/form/elements/EmailInput";
import { Alert } from "@components/form/elements/Alert";
import { NameInput } from "@components/form/elements/NameInput";
import { TextareaInput } from "@components/form/elements/TextareaInput";

let initialState = {
  message: "",
  status: "",
};

export default function ContactForm({
  hasBackground = false,
}: {
  hasBackground?: boolean;
}) {
  const [state, formAction] = useFormState(submitContact, initialState);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setValid(emailRegex.test(email) && agreement && nameRegex.test(name));
  }, [name, email, agreement]);

  return (
    <div
      className={`mx-auto flex max-w-2xl flex-col gap-6 ${hasBackground ? "rounded-2xl bg-[#1D6222] p-8 shadow-xl" : null}`}
    >
      <form action={formAction}>
        <div className="flex flex-wrap gap-y-4 md:gap-x-5 md:gap-y-6">
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:gap-6">
            <NameInput
              disabled={state.status === "success"}
              setName={setName}
              required
            />
            <EmailInput
              disabled={state.status === "success"}
              setEmail={setEmail}
            />
          </div>
          <TextareaInput
            disabled={state.status === "success"}
            setValue={setMessage}
            placeholder="Type your message"
            name="message"
          />
          <AgreementCheckInput
            key="newsletter"
            disabled={state.status === "success"}
            setAgreement={setAgreement}
          />
          <SubmitButton
            disabled={!valid || state.status === "success"}
            label="Send"
          />
        </div>
      </form>
      <Alert message={state.message} status={state.status} />
    </div>
  );
}
