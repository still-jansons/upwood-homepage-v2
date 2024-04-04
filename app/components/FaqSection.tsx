"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    category: "General Questions",
    questions: [
      {
        question: "How does Upwood ensure the security of my investments?",
        answer:
          "Upwood prioritizes the security of your investments. We use robust encryption, two-factor authentication, and adhere to industry best practices to safeguard your assets and personal information.",
      },
      {
        question:
          "Is Upwood compliant with regulations governing financial investments?",
        answer:
          "Upwood operates within the framework of relevant financial regulations and according to Latvian and European Union law. We prioritize compliance and work closely with regulatory bodies to ensure a secure and legal investment environment for our users. \n\n Due to nature of investment offering being an SPV (Special purpose vehicle) a company made for purpose specifically holding the asset, investors buy shares of the company that holds the asset, effectively becoming a shareholders and being protected by Latvian and European Union securities laws.",
      },
    ],
  },
  {
    category: "Investment Process",
    questions: [
      {
        question: "How does Upwood ensure the security of my investments?",
        answer:
          "Upwood prioritizes the security of your investments. We use robust encryption, two-factor authentication, and adhere to industry best practices to safeguard your assets and personal information.",
      },
      {
        question:
          "Is Upwood compliant with regulations governing financial investments?",
        answer:
          "Upwood operates within the framework of relevant financial regulations and according to Latvian and European Union law. We prioritize compliance and work closely with regulatory bodies to ensure a secure and legal investment environment for our users. \n\n Due to nature of investment offering being an SPV (Special purpose vehicle) a company made for purpose specifically holding the asset, investors buy shares of the company that holds the asset, effectively becoming a shareholders and being protected by Latvian and European Union securities laws.",
      },
    ],
  },
  {
    category: "Security and Legal Compliance",
    questions: [
      {
        question: "How does Upwood ensure the security of my investments?",
        answer:
          "Upwood prioritizes the security of your investments. We use robust encryption, two-factor authentication, and adhere to industry best practices to safeguard your assets and personal information.",
      },
      {
        question:
          "Is Upwood compliant with regulations governing financial investments?",
        answer:
          "Upwood operates within the framework of relevant financial regulations and according to Latvian and European Union law. We prioritize compliance and work closely with regulatory bodies to ensure a secure and legal investment environment for our users. \n\n Due to nature of investment offering being an SPV (Special purpose vehicle) a company made for purpose specifically holding the asset, investors buy shares of the company that holds the asset, effectively becoming a shareholders and being protected by Latvian and European Union securities laws.",
      },
    ],
  },
  {
    category: "Technical Details",
    questions: [
      {
        question: "What is a cold and hot wallet?",
        answer:
          "<b>Cold Wallet:</b></br><p>A cold wallet refers to a secure storage solution that is offline and not connected to the internet. This isolation from online networks significantly reduces the risk of unauthorized access or hacking. Cold wallets are typically hardware devices, paper wallets, or air-gapped systems. They are ideal for long-term storage of cryptocurrencies and are considered highly secure.</p></br><b>Hot Wallet:</b><p>In contrast, a hot wallet is an online wallet connected to the internet. It facilitates quick and convenient access to cryptocurrencies for trading, transactions, or other immediate needs. Hot wallets include software wallets, mobile wallets, and wallets provided by cryptocurrency exchanges. While hot wallets offer accessibility, they are more susceptible to security risks associated with online connectivity.\n\n Choosing between a cold and hot wallet depends on individual preferences, with many users opting for a combination of both to balance security and accessibility based on their specific needs.</p>",
      },
    ],
  },
];

export default function FAQSection() {
  const [faqs, setFaqs] = useState<
    {
      category: string;
      questions: { question: string; answer: string }[];
      expanded?: boolean;
    }[]
  >([]);

  useEffect(() => {
    setFaqs(data.map((faq) => ({ ...faq, expanded: false })));
  }, []);

  function toggleFAQ(index: number) {
    setFaqs((prev) =>
      prev.map((faq, i) => ({
        ...faq,
        expanded: i === index,
      })),
    );
  }

  return (
    <section className="relative min-h-screen bg-[#06350B]">
      <div className="absolute inset-0">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center gap-12 px-4 pt-24 md:px-10 md:pt-52">
        <h1 className="text-h-lg font-lexend text-center font-bold text-white">
          Upwood FAQ
        </h1>
        <ul className="flex w-full flex-col gap-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className={`rounded-lg bg-black/25 px-4 py-2.5 ${faq.expanded ? "expanded" : ""}`}
            >
              <button
                className="text-h-sm flex w-full font-bold text-white"
                onClick={() => toggleFAQ(index)}
              >
                {faq.category}
                <div className="ml-auto flex h-8 w-8 items-center justify-center">
                  <Image
                    src={
                      faq.expanded
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
