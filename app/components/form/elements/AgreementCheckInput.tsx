import { useFormStatus } from "react-dom";
import Link from "next/link";

export function AgreementCheckInput({
  section = "default",
  disabled,
  setAgreement,
  className,
}: {
  section?: string;
  disabled: boolean;
  setAgreement: (agreement: boolean) => void;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <div className={`flex gap-2 ${className}`}>
      <input
        id={`agreementCheck-${section}`}
        name="agreementCheck"
        type="checkbox"
        className="checked:ring-none mt-0.5 h-4 w-4 rounded border-transparent text-[var(--color-primary-dark)] accent-red-500 transition-colors duration-300 ease-in-out hover:border-[#F67D00] focus:ring-0"
        disabled={disabled || pending}
        onChange={(e) => setAgreement(e.target.checked)}
        required
      />
      <label
        htmlFor={`agreementCheck-${section}`}
        className="text-white text-b-sm"
        aria-label="By entering your email you agree to receive marketing communications from SIA Upwood. You can unsubscribe at any time. For more information, see our Privacy Policy"
      >
        By entering your email you agree to receive marketing communications
        from SIA Upwood. You can unsubscribe at any time. For more information,
        see our
        <Link href={"/privacy"} className="ml-1 underline">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
}
