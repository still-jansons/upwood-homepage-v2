import Image from "next/image";
import { SbBlokData } from "@storyblok/react";

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
        className="h-full w-full rounded-xl object-contain shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
      />
      <div className="flex flex-col items-center gap-2.5">
        <p className="text-h-xs font-bold text-white">{blok.title}</p>
        <p className="text-b-lg font-normal text-white">{blok.description}</p>
      </div>
    </div>
  );
}
