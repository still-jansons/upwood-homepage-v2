import Image from "next/image";
import { ISbStoriesParams, SbBlokData } from "@storyblok/react";

export default function LogoElement({
  blok,
}: {
  blok: {
    image: SbBlokData;
    link?: SbBlokData;
  };
}) {
  return (
    <>
      {blok.link?.url ? (
        <a
          href={blok.link.url as string}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              "logo-shadow flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-white p-1"
            }
          >
            <Image
              src={blok.image.filename as string}
              alt={blok.image.alt as string}
              width={150}
              height={150}
              quality={100}
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        </a>
      ) : (
        <div
          className={
            "logo-shadow flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-white p-1"
          }
        >
          <Image
            src={blok.image.filename as string}
            alt={blok.image.alt as string}
            width={150}
            height={150}
            quality={100}
            className="h-full w-full rounded-full object-contain"
          />
        </div>
      )}
    </>
  );
}
