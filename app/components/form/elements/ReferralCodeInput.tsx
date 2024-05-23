import { useFormStatus } from "react-dom";

export function ReferralCodeInput({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <input
      name="referralCode"
      type="text"
      placeholder="Referral code (optional)"
      className="w-full disabled:opacity-70 sm:flex-1"
      disabled={disabled || pending}
    />
  );
}
