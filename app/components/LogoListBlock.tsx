import React from "react";

export default function LogoListBlock(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-20">
            { children }
        </div>
    );
}
