import type { Metadata } from "next";
import { roboto, lexendDeca } from "@styles/fonts";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
    title: "Upwood",
    description: "Upwood is built with Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${roboto.variable} ${lexendDeca.variable}`}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
