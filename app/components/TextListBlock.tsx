import React from "react";

export default function TextListBlock(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className="max-w-2xl mx-auto flex flex-col gap-16">
            { children }
        </div>
    );
}
