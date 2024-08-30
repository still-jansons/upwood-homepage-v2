import Image from "next/image";
import InvitationFormSection from "@components/form/InvitationFormSection";
import ContactForm from "@components/form/ContactForm";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

type ExtendedSbBlokData = SbBlokData & {
  title?: string;
  subtitle?: string;
  seeMoreButton?: boolean;
  formType: "contact" | "invitation" | "none";
};

export default function HeroSection({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex flex-col min-h-screen pt-24 gap-10 md:gap-0 md:pt-0"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="object-cover object-bottom w-full h-full"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 max-w-3xl px-4 mx-auto gap-12 md:px-10">
        <div className="flex flex-col text-center gap-4">
          <h1 className="font-bold text-white text-h-lg font-lexend">
            {blok.title}
          </h1>
          <p className="font-bold text-white text-h-md font-lexend">
            {blok.subtitle}
          </p>
        </div>
        {blok.formType === "contact" && <ContactForm hasBackground />}
        {blok.formType === "invitation" && (
          <InvitationFormSection
            section="header"
            title="Enquire more information"
          />
        )}
      </div>
      {blok.seeMoreButton && (
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
