import Image from "next/image";
import InvitationFormSection from "@components/form/InvitationFormSection";

export default function FooterFormSection({
  blok,
}: {
  blok: {
    title?: string;
    subtitle?: string;
  };
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/forest.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-10 md:py-24">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-h-lg font-bold text-white">{blok.title}</h2>
            <p className="text-b-lg max-w-2xl text-white">{blok.subtitle}</p>
          </div>
          <InvitationFormSection section="footer" />
        </div>
      </div>
    </section>
  );
}
