import React from "react";

export default function Section({
    scrollTarget = false,
    title,
    children,
}: {
    scrollTarget?: boolean,
    title?       : string,
    children     : React.ReactNode,
}) {
    return (
        <section id={scrollTarget ? 'section-2' : ''}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-16 md:py-28 flex flex-col gap-12 md:gap-14">
                { title && <h2 className="text-h-md font-bold text-white text-center">{ title }</h2> }
                { children }
            </div>
        </section>
    );
}
