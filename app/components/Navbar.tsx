"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/business", label: "Business" },
  { href: "/learn", label: "Learn" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  const pathname = usePathname();

  let [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black to-transparent transition-all duration-300 ${isOpen ? "open" : "max-h-20 overflow-hidden"}`}
    >
      <div className="flex flex-col h-screen max-w-screen-xl gap-20 px-4 mx-auto wrapper md:h-20 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10">
        <div className="flex items-center w-full h-20 md:w-auto">
          <Link href="/">
            <Image
              src="/upwood.svg"
              alt="Upwood"
              width="165"
              height="37"
              className="w-auto h-8"
              quality={100}
            />
          </Link>
          <button
            className="flex items-center justify-center h-12 ml-auto bg-transparent aspect-square md:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            <Image
              src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
              width="40"
              height="40"
              quality={100}
              className={isOpen ? "invert" : ""}
            />
          </button>
        </div>
        <div className="relative flex items-center w-full gap-8 md:w-auto">
          <ul className="flex flex-col items-center w-full gap-8 md:flex-row">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`link md:opacity-100 ${pathname.startsWith(href) && (href !== '/' || pathname === '/') ? "active" : undefined} ${isOpen ? "opacity-100 delay-100" : "opacity-0"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
