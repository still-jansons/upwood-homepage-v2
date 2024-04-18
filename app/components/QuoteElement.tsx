import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function QuoteElement({ blok }: { blok: { quote: string } }) {
  return (
    <blockquote
      {...storyblokEditable(blok)}
      className="text-h-xs relative w-full rounded-3xl bg-[#1D6222] px-20 py-8 text-center font-bold text-white"
    >
      <Image
        src="/images/quotes-up.svg"
        alt="Quotes"
        className="absolute left-4 top-2.5"
        width={30}
        height={23}
        quality={100}
      />
      {blok.quote}
      <Image
        src="/images/quotes-down.svg"
        alt="Quotes"
        className="absolute bottom-2.5 right-4"
        width={30}
        height={23}
        quality={100}
      />
    </blockquote>
  );
}
