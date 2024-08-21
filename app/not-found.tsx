import Image from "next/image";
import FooterFormSection from "@/app/components/sections/FooterFormSection";

export default function NotFound() {
  return (
    <main>
      <section className="relative min-h-screen bg-[#06350B]">
        <div className="absolute inset-0">
          <Image
            src="/images/forest-full.webp"
            alt="Hero"
            className="h-full w-full object-cover object-top"
            width={1920}
            height={1080}
            quality={100}
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-12 px-4 md:px-10">
          <div>
            <h1 className="font-lexend text-3d text-center text-[250px] font-normal leading-[250px] text-white">
              404
            </h1>
            <p className="text-center text-[52px] text-white">Page not found</p>
          </div>
        </div>
      </section>
      <FooterFormSection
        blok={{
          title: "Exclusive investment community",
          subtitle:
            "As UN stated “there is no future without addressing climate change”. We created like-minded investor community to address climate change by planting more forests and preserving environmentally friendly assets. Our investor community enjoy early access to attractive investment offerings, ability to pool resources together to crowdfund through fractional ownership and have access to personal investment management cabinet.",
        }}
      />
    </main>
  );
}
