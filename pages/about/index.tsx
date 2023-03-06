import TitleAndIcons from "@/components/TitleAndIcons";
import Image from "next/image";
import React from "react";
import AboutText from "@/components/AboutText";
import laptopImg from "@/public/assets/laptop.jpg";

function About() {
  return (
    <>
      <TitleAndIcons title="ABOUT ME" />

      <div className="flex flex-col space-y-10">
        <div
          className="mx-auto md:w-2/3 lg:w-1/2
          rounded-lg shadow-sm shadow-[#18D26E]
          "
        >
          <Image
            className="rounded-lg"
            src={laptopImg}
            alt="Picture of me"
          ></Image>
        </div>
        <AboutText />
      </div>
    </>
  );
}

export default About;
