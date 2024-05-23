import { useFormStatus } from "react-dom";

export function InvestInput({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <input
      name="investAmount"
      type="number"
      placeholder="Desired investment amount € (optional)"
      className="w-full flex-none disabled:opacity-70 sm:flex-1"
      disabled={disabled || pending}
    />
  );
}
