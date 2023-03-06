import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import stars from "@/public/assets/stars.jpg";

function Layout({ children }: any) {
  const router = useRouter();
  const is404 = router.pathname === "/_error";

  if (is404) return <>Not found!</>;

  return (
    <>
      <Head>
        <title>Milos Djurica | Portfolio</title>
        <meta
          name="description"
          content="Personal page of Milos Djurica. Contains Milos Djurica portfolio, information about Milos Djurica and his projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-screen">
        <Header />
        <Image
          // stars or feather ronaldo
          src={stars}
          fill
          priority
          style={{
            // !cover ostaje ista, contain se smanjuje sa ekranom
            objectFit: "cover",
          }}
          className="fixed top-0 left-0 
          -z-10"
          alt="Background Laptop image"
        />
        <MainContainer className="mb-10">{children}</MainContainer>
      </div>
    </>
  );
}

export default Layout;
