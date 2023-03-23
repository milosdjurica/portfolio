import TitleAndIcons from "@/components/TitleAndIcons";
import Image from "next/image";
import React from "react";
import myPic from "@/public/assets/my-pic.png";
import Language from "@/components/about/Language";
import CodingJourney from "@/components/about/CodingJourney";
import BasicInfo from "@/components/about/BasicInfo";

function About() {
  return (
    <>
      <TitleAndIcons title="ABOUT ME" />

      <div className="flex flex-col space-y-10">
        <Image
          className="mx-auto w-1/3 md:w-1/4
          rounded-lg shadow-sm shadow-[#18D26E]"
          src={myPic}
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
