import Image from "next/image";
import InvitationFormSection from "@components/form/InvitationFormSection";
import ContactForm from "@components/form/ContactForm";

export default function HeroBlock({
  formType = undefined,
  title = "",
  subtitle = "",
  seeMore = true,
}: {
  formType?: "contact" | "invitation";
  hasForm?: boolean;
  title?: string;
  subtitle?: string;
  seeMore?: boolean;
}) {
  return (
    <section className="relative flex min-h-screen flex-col gap-10 pt-24 md:gap-0 md:pt-0">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-12 px-4 md:px-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-h-lg font-lexend font-bold text-white">
            {title}
          </h1>
          <p className="text-h-md font-lexend font-bold text-white">
            {subtitle}
          </p>
        </div>
        {formType === "contact" && <ContactForm hasBackground />}
        {formType === "invitation" && (
          <InvitationFormSection
            section="header"
            title="Enquire more information"
          />
        )}
      </div>
      {seeMore && (
        <a
          href="#section-2"
          className={"mb-10 flex flex-col items-center gap-5 justify-self-end"}
        >
          <p className={"text-b-md font-bold text-white"}>See more</p>
          <Image
            src="/icons/arrow-down.svg"
            alt="Arrow"
            width={40}
            height={40}
            className={"animate-bounce"}
          />
        </a>
      )}
    </section>
  );
}
