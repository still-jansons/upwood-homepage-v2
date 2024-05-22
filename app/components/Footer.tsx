import Link from "next/link";
import Image from "next/image";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Company",
    href: "/company",
  },
  {
    title: "Business",
    href: "/business",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Privacy",
    href: "/privacy",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/upwood.io",
    logo: "/icons/ig-logo.svg",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/upwood.io",
    logo: "/icons/fb-logo.svg",
  },
  {
    title: "Youtube",
    href: "http://www.youtube.com/@Upwood_io",
    logo: "/icons/yt-logo.svg",
  },
  {
    title: "Telegram",
    href: "https://t.me/+S1rip4Mj9Xg4M2Y0",
    logo: "/icons/tg-logo.svg",
  },
];

export default function Footer() {
  return (
    <footer className={"bg-[#021A05]"}>
      <div className={"flex flex-col items-center gap-10"}>
        <div
          className={
            "mx-auto flex w-full max-w-screen-xl flex-wrap items-start justify-between gap-12 px-4 pt-8 md:px-10 lg:gap-20"
          }
        >
          <div className="text-b-md order-1 flex w-full flex-1 flex-col gap-2 font-normal text-white">
            <p>SIA “Upwood”</p>
            <p>Reg. No. 40203494875</p>
            <a href="mailto:info@upwood.io" className={"link w-fit"}>
              info@upwood.io
            </a>
            <p>
              <b>Offce:</b> Raņķa Dambis 34, <br /> Riga, Latvia, <br /> LV-1048
            </p>
          </div>
          <ul className="order-3 flex h-36 w-auto flex-col flex-wrap gap-x-12 gap-y-4 font-bold md:h-36 md:w-full lg:order-2 lg:max-w-[320px]">
            {routes.map((route, index) => (
              <li key={index}>
                <Link key={index} href={route.href} className={"link"}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="order-4 flex w-auto flex-wrap gap-y-4 md:w-full lg:order-3 lg:max-w-[250px]">
            {socialLinks.map((link, index) => (
              <li key={index} className={"w-[50%]"}>
                <a
                  href={link.href}
                  className={"link flex items-center gap-2 font-bold"}
                >
                  <span
                    className={
                      "flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 px-1"
                    }
                  >
                    <Image
                      src={link.logo}
                      alt={link.title}
                      width={20}
                      height={20}
                      quality={100}
                      className="h-4 w-4"
                    />
                  </span>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="order-2 lg:order-4">
            <Link href="/">
              <Image
                src="/upwood.svg"
                alt="Upwood"
                width="165"
                height="37"
                className="h-8 w-auto"
                quality={100}
              />
            </Link>
          </div>
        </div>
        <div>
          <p className={"text-b-sm max-w-2xl px-4 text-center text-white"}>
            The content of this webpage is not an investment advice and does not
            constitute any offer or solicitation to offer or recommendation of
            any investment product. Investment involves risk is not indicative
            of future performance. Investors should refer to the offering
            documentation of the projects for detailed information (including
            risk factors) prior to investing.
          </p>
        </div>
        <div
          className={"flex h-12 w-full items-center justify-center bg-black"}
        >
          <p className={"text-b-sm text-white"}>© All Rights Reserved 2024</p>
        </div>
      </div>
    </footer>
  );
}
