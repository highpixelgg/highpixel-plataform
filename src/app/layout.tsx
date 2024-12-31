import type { Metadata } from "next";
import {
  Darker_Grotesque,
  Krona_One,
  Poppins,
  Rubik,
  Rubik_Scribble,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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

const FontRubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

const FontRubikScribble = Rubik_Scribble({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-scribble",
});

export const metadata: Metadata = {
  icons: {
    icon: "/lowracing.png",
  },
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
      className={`dark ${FontPoppins.variable} ${FontKronaOne.variable} ${FontDarkerGrotesque.variable} ${FontRubikScribble.variable} ${FontRubik.variable}`}
    >
      <body className="bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
