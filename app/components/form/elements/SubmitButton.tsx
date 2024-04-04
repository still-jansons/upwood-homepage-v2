import { useFormStatus } from "react-dom";

export function SubmitButton({
  disabled,
  className,
  label = "Submit",
}: {
  disabled: boolean;
  className?: string;
  label?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`button button-md ml-auto w-full md:w-auto ${className}`}
      disabled={pending || disabled}
    >
      {pending ? "Sending..." : label}
    </button>
  );
}
