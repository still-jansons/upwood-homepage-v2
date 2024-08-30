import { SbBlokData, storyblokEditable } from "@storyblok/react";

type ExtendedSbBlokData = SbBlokData & {
  title: string;
  body: string;
};

export default function TextElement({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col text-white gap-4"
    >
      <h2 className="font-bold text-h-md">{blok.title}</h2>
      <p className="text-b-lg">{blok.body}</p>
    </div>
  );
}
