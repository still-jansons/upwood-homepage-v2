import { useFormStatus } from "react-dom";

export function EmailInput({
  disabled,
  setEmail,
  className,
}: {
  disabled: boolean;
  setEmail: (email: string) => void;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <input
      name="email"
      type="email"
      placeholder="E-mail address"
      className={`flex-1 disabled:opacity-70 ${className}`}
      disabled={disabled || pending}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
}
