import { useFormStatus } from "react-dom";

export function NameInput({
  disabled,
  setName,
  required = false,
  className,
}: {
  disabled: boolean;
  setName: (text: string) => void;
  required?: boolean;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <input
      name="name"
      type="text"
      placeholder="Name"
      className={`flex-1 disabled:opacity-70 ${className}`}
      disabled={disabled || pending}
      onChange={(e) => setName(e.target.value)}
      required={required}
    />
  );
}
