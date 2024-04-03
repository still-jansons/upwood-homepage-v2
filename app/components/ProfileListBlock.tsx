import React from "react";

export default function ProfileListBlock(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-24 gap-y-12">
            { children }
        </div>
    );
}
