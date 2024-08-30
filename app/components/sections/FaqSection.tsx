import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import FAQListBlock from "@/app/components/blocks/FaqListBlock";

export default async function FAQSection({
  blok,
}: {
  blok: {
    title: string;
    categories: {
      title: string;
      faqs: { question: string; answer: string }[];
    }[];
  };
}) {
  const categories = blok.categories.map((category) => ({
    ...category,
    expanded: false,
  }));

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative min-h-screen bg-[#06350B]"
    >
      <div className="absolute inset-0 max-h-screen">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="object-cover object-top w-full h-full"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl px-4 pt-24 mx-auto gap-12 md:px-10 md:pt-52">
        <h1 className="font-bold text-center text-white text-h-lg font-lexend">
          {blok.title}
        </h1>
        <FAQListBlock categoriesList={categories} />
      </div>
    </section>
  );
}
