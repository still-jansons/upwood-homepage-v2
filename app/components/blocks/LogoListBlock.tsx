import React from "react";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function LogoListBlock({
  blok,
}: {
  blok: {
    blocks: SbBlokData[];
  };
}) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-20"
    >
      {blok.blocks.map((nestedBlok, index) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
