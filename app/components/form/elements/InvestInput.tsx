import { useFormStatus } from "react-dom";

export function InvestInput({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <input
      name="investAmount"
      type="number"
      placeholder="Desired investment amount (optional)"
      className="flex-1 disabled:opacity-70"
      disabled={disabled || pending}
    />
  );
}
