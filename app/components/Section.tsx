import React from "react";

export default function Section({
    children,
    id,
}: {
    children: React.ReactNode,
    id?     : string,
}) {
    return (
        <section id={id}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-16 md:py-24">
                { children }
            </div>
        </section>
    );
}
