import {Inter, Lexend_Deca, Roboto} from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-roboto",
});

const lexendDeca = Lexend_Deca({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-lexend",
});

export { roboto, lexendDeca }
