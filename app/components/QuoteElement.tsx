import Image from "next/image";

export default function QuoteElement(
    {
        quote,
    }: {
        quote: string,
    }
) {
    return (
        <blockquote
            className="relative w-full rounded-3xl bg-[#1D6222] py-8 px-20 text-h-xs font-bold text-white text-center"
        >
            <Image
                src       = "/images/quotes-up.svg"
                alt       = "Quotes"
                className = "absolute top-2.5 left-4"
                width     = {30}
                height    = {23}
                quality   = {100}
            />
            {quote}
            <Image
                src       = "/images/quotes-down.svg"
                alt       = "Quotes"
                className = "absolute bottom-2.5 right-4"
                width     = {30}
                height    = {23}
                quality   = {100}
            />
        </blockquote>
    )
}
