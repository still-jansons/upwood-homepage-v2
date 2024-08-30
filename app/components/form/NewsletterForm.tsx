"use client";

import { useFormState } from "react-dom";
import { submitNewsletter } from "@/app/actions";
import { useEffect, useState } from "react";
import { AgreementCheckInput } from "@components/form/elements/AgreementCheckInput";
import { SubmitButton } from "@components/form/elements/SubmitButton";
import { EmailInput } from "@components/form/elements/EmailInput";
import { Alert } from "@components/form/elements/Alert";

let initialState = {
  message: "",
  status: "",
};

export default function NewsletterForm() {
  const [state, formAction] = useFormState(submitNewsletter, initialState);
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setValid(emailRegex.test(email) && agreement);
  }, [email, agreement]);

  return (
    <div className="flex flex-col max-w-2xl mx-auto gap-6">
      <form action={formAction}>
        <div className="flex flex-wrap gap-y-4 md:gap-x-5 md:gap-y-6">
          <EmailInput
            disabled={state.status === "success"}
            setEmail={setEmail}
            className={"order-1"}
          />
          <SubmitButton
            disabled={!valid || state.status === "success"}
            className="order-3 md:order-2"
            label="Submit"
          />
          <AgreementCheckInput
            key="newsletter"
            disabled={state.status === "success"}
            setAgreement={setAgreement}
            className="order-4"
          />
        </div>
      </form>
      <Alert message={state.message} status={state.status} />
    </div>
  );
}
