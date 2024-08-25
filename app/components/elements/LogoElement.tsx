import Image from "next/image";
import { SbBlokData } from "@storyblok/react/rsc";

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
          <div className="relative bg-white rounded-full logo-shadow h-36 w-36">
            <div className="flex items-center justify-center w-full h-full p-1">
              <Image
                src={blok.image.filename as string}
                alt={blok.image.alt as string}
                width={150}
                height={150}
                quality={100}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          </div>
        </a>
      ) : (
        <div className="relative bg-white rounded-full logo-shadow h-36 w-36">
          <div className="flex items-center justify-center w-full h-full p-1">
            <Image
              src={blok.image.filename as string}
              alt={blok.image.alt as string}
              width={150}
              height={150}
              quality={100}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
