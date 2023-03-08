import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import stars from "@/public/assets/stars.jpg";
import Link from "next/link";

function Layout({ children }: any) {
  const router = useRouter();
  const is404 = router.pathname === "/_error";

  if (is404)
    return (
      <>
        <div
          className="
        h-screen p-10 text-center space-y-10
        flex flex-col justify-center items-center 
        "
        >
          <h3>The page you are looking for is not found!</h3>
          <Link
            className="shadow-lg shadow-[#18D26E] p-4 rounded-xl 
            hover:scale-105 duration-200"
            href="/"
          >
            Go back to home page
          </Link>
        </div>
      </>
    );

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
