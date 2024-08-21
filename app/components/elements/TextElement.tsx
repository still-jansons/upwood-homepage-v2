import { SbBlokData, storyblokEditable } from "@storyblok/react";

type ExtendedSbBlokData = SbBlokData & {
  title: string;
  body: string;
};

export default function TextElement({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col gap-4 text-white"
    >
      <h2 className="text-h-md font-bold">{blok.title}</h2>
      <p className="text-b-lg">{blok.body}</p>
    </div>
  );
}
