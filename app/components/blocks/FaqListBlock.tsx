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
    <ul className="flex flex-col w-full mb-20 gap-4">
      {categories.map((category, index) => (
        <li
          key={index}
          className={`flex flex-col gap-8 overflow-hidden rounded-lg bg-black/25 px-4 py-2.5 transition-all duration-300 ease-in-out ${category.expanded ? "max-h-[1500px]" : "max-h-12"}`}
        >
          <button
            className="flex w-full font-bold text-white text-h-sm"
            onClick={() => toggleFAQ(index)}
          >
            {category.title}
            <div className="flex items-center justify-center w-8 h-8 ml-auto">
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
                <h3 className="mb-6 font-bold text-white text-h-xs">
                  {faq.question}
                </h3>
                <div className="text-white text-b-lg">
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
