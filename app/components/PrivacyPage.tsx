import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import VideoBlock from "@components/VideoBlock";
import FooterFormSection from "@components/FooterFormSection";

const PrivacyPage = ({
  blok,
}: {
  blok: {
    title: string;
    content: SbBlokData[];
  };
}) => (
  <main {...storyblokEditable(blok)}>
    <section className="relative min-h-screen bg-[#06350B]">
      <div className="absolute inset-0 max-h-screen">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center gap-24 px-4 py-24 md:px-10 md:py-52">
        <h1 className="text-h-lg font-lexend text-center font-bold text-white">
          {blok.title}
        </h1>
        <div className="prose prose-stone dark:prose-invert">
          {render(blok.content)}
        </div>
      </div>
    </section>
    <FooterFormSection blok={{ title: "Subscribe to our newsletter" }} />
  </main>
);

export default PrivacyPage;
