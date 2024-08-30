import { ISbRichtext, ISbStories, ISbStoryData, SbBlokData } from "@storyblok/react/rsc";

export type Article = ISbStoryData & {
  title: string;
  categories: string[];
  image: {
    filename: string;
  }
  content: ISbRichtext;
  blocks: SbBlokData[];
}

export type ArticleCategory = {
  dimension_value?: null | string;
  id: number;
  name: string;
  value: string | null;
};