import { useFormStatus } from "react-dom";

export function TextareaInput({
  disabled,
  setValue,
  placeholder,
  name,
}: {
  disabled: boolean;
  setValue: (text: string) => void;
  placeholder: string;
  name: string;
}) {
  const { pending } = useFormStatus();

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full disabled:opacity-70"
      disabled={disabled || pending}
      onChange={(e) => setValue(e.target.value)}
      rows={5}
    />
  );
}
