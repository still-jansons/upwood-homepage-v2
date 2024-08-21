import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";

type ExtendedSbBlokData = SbBlokData & {
  blocks: SbBlokData[];
};

export default function ArticlePage({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
