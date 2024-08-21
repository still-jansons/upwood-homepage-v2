"use client";

import Image from "next/image";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import VideoBlock from "@/app/components/blocks/VideoBlock";

export default function FAQListBlock({
  categoriesList,
}: {
  categoriesList: {
    title: string;
    expanded: boolean;
    faqs: {
      question: string;
      answer: string;
    }[];
  }[];
}) {
  const [categories, setCategories] = useState(categoriesList);

  function toggleFAQ(index: number) {
    setCategories((prev) => {
      return prev.map((category, i) => {
        if (i === index) {
          return { ...category, expanded: !category.expanded };
        } else {
          return { ...category, expanded: false };
        }
      });
    });
  }

  return (
    <ul className="mb-20 flex w-full flex-col gap-4">
      {categories.map((category, index) => (
        <li
          key={index}
          className={`flex flex-col gap-8 overflow-hidden rounded-lg bg-black/25 px-4 py-2.5 transition-all duration-300 ease-in-out ${category.expanded ? "max-h-[1500px]" : "max-h-12"}`}
        >
          <button
            className="text-h-sm flex w-full font-bold text-white"
            onClick={() => toggleFAQ(index)}
          >
            {category.title}
            <div className="ml-auto flex h-8 w-8 items-center justify-center">
              <Image
                src={
                  category.expanded
                    ? "/icons/close.svg"
                    : "/icons/angle-down.svg"
                }
                alt="Arrow"
                width={18}
                height={18}
                className="h-auto w-[18px]"
                quality={100}
              />
            </div>
          </button>
          <ul
            className={`mb-8 flex flex-col gap-8 transition-all delay-75 duration-200 ease-out ${category.expanded ? "opacity-100" : "opacity-0"}`}
          >
            {category.faqs.map((faq, faqIndex) => (
              <li key={faqIndex}>
                <h3 className="text-h-xs mb-6 font-bold text-white">
                  {faq.question}
                </h3>
                <div className="text-b-lg text-white">
                  {render(faq.answer, {
                    blokResolvers: {
                      ["videoBlock"]: (props) => (
                        <VideoBlock blok={props as any} />
                      ),
                    },
                  })}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
