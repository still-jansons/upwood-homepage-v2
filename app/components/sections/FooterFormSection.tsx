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
          className="object-cover object-top w-full h-full"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-10 md:py-24">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="font-bold text-white text-h-lg">{blok.title}</h2>
            <p className="max-w-2xl text-white text-b-lg">{blok.subtitle}</p>
          </div>
          <InvitationFormSection section="footer" />
        </div>
      </div>
    </section>
  );
}
