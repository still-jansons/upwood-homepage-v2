import {
  StoryblokServerComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";

type ExtendedSbBlokData = SbBlokData & {
  blocks: SbBlokData[];
};

const Page = ({ blok }: { blok: ExtendedSbBlokData }) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.blocks.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
