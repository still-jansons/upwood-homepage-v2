import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";

type ExtendedSbBlokData = SbBlokData & {
  blocks: SbBlokData[];
};

const Page = ({ blok }: { blok: ExtendedSbBlokData }) => (
  <main {...storyblokEditable(blok)}>
    {blok.blocks.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
