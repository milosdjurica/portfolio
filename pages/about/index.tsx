import TitleAndIcons from "@/components/TitleAndIcons";
import Image from "next/image";
import React from "react";
import AboutText from "@/components/about/AboutText";
import laptopImg from "@/public/assets/laptop.jpg";
import Language from "@/components/about/Language";

function About() {
  return (
    <>
      <TitleAndIcons title="ABOUT ME" />

      <div className="flex flex-col space-y-10">
        <Image
          className="mx-auto md:w-2/3 lg:w-1/2
          rounded-lg shadow-sm shadow-[#18D26E]"
          src={laptopImg}
          alt="Picture of me"
        />
        <AboutText />
        <Language />
      </div>
    </>
  );
}

export default About;
