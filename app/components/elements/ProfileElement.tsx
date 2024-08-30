import Image from "next/image";
import { SbBlokData } from "@storyblok/react/rsc";

export default function ProfileElement({
  blok,
}: {
  blok: {
    image: SbBlokData;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="group flex w-[200px] flex-col items-center gap-4">
      <Image
        src={blok.image.filename as string}
        alt={blok.image.alt as string}
        width={200}
        height={200}
        quality={100}
        className="object-cover w-full h-full rounded-xl shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
      />
      <div className="flex flex-col items-center gap-2.5">
        <p className="font-bold text-center text-white text-h-xs whitespace-nowrap">
          {blok.title}
        </p>
        <p className="font-normal text-white text-b-lg">{blok.description}</p>
      </div>
    </div>
  );
}
