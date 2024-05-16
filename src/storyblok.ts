import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const initStoryblok = (options = {}) => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    ...options,
  });
};
