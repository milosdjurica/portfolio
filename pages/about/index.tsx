import TitleAndIcons from "@/components/TitleAndIcons";
import Image from "next/image";
import React from "react";
import laptopImg from "@/public/assets/laptop.jpg";
import Language from "@/components/about/Language";
import CodingJourney from "@/components/about/CodingJourney";
import BasicInfo from "@/components/about/BasicInfo";

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
        <BasicInfo />
        <CodingJourney />
        <Language />
      </div>
    </>
  );
}

export default About;
