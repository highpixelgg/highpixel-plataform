import type { Metadata } from "next";
import {
  Krona_One,
  Darker_Grotesque,
  Rubik_Scribble,
  Poppins,
} from "next/font/google";
import "./globals.css";

const FontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const FontKronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-krona-one",
});

const FontDarkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-darker-grotesque",
});

const FontRubikScribble = Rubik_Scribble({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-scribble",
});

export const metadata: Metadata = {
  title: {
    template: "%s | LowRacing",
    default: "Low Racing",
  },
  description: "O Low Racing é um jogo de corrida para computadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${FontPoppins.variable} ${FontKronaOne.variable} ${FontDarkerGrotesque.variable} ${FontRubikScribble.variable}`}
    >
      <body className="bg-[#1B1B1B]">{children}</body>
    </html>
  );
}
