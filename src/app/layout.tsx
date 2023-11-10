import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import stars from "public/assets/stars.jpg";
import Header from "../components/sections/Header";
import Image from "next/image";
import MainContainer from "../components/sections/MainContainer";

const inter = Inter({ subsets: ["latin"] });

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Milos Djurica | Portfolio",
  description:
    "  Personal page of Milos Djurica. Contains Milos Djurica portfolio, information about Milos Djurica and his projects.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <Header />
          <Image
            src={stars}
            alt="Background stars image"
            fill
            priority
            className="fixed top-0 left-0 object-cover -z-10"
          />
          <MainContainer className="mb-10">{children}</MainContainer>
        </div>
      </body>
    </html>
  );
}
