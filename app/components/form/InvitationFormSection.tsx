"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitInvitation } from "@/app/actions";
import { useEffect, useState } from "react";
import { SubmitButton } from "@components/form/elements/SubmitButton";
import { AgreementCheckInput } from "@components/form/elements/AgreementCheckInput";
import { EmailInput } from "@components/form/elements/EmailInput";
import { ReferralCodeInput } from "@components/form/elements/ReferralCodeInput";
import { Alert } from "@components/form/elements/Alert";

let initialState = {
  message: "",
  status: "",
};

export default function InvitationForm({
  title,
  section,
}: {
  title?: string;
  section?: string;
}) {
  const [state, formAction] = useFormState(submitInvitation, initialState);
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setValid(emailRegex.test(email) && agreement);
  }, [email, agreement]);

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      {title && (
        <h2 className="text-h-sm text-center font-bold text-white">{title}</h2>
      )}
      <form action={formAction}>
        <div className="flex flex-wrap gap-y-4 md:gap-x-5 md:gap-y-6">
          <EmailInput
            disabled={state.status === "success"}
            setEmail={setEmail}
            className={"order-1"}
          />
          <div className={"order-2 w-full md:order-3"}>
            <ReferralCodeInput disabled={state.status === "success"} />
          </div>
          <SubmitButton
            disabled={!valid || state.status === "success"}
            className="order-3 md:order-2"
            label="Request invitation"
          />
          <AgreementCheckInput
            section={section}
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
