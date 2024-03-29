import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
  demo: string;
  code: string;
};

function DemoCodeProject(props: Props) {
  return (
    <div
      className="flex flex-col 
      justify-around items-center 
      space-y-10"
    >
      <Image
        src={props.image}
        alt="Image of my personal site"
        className="md:w-2/3 lg:w-1/2 rounded-xl shadow-md shadow-green-500"
      />
      <div className="space-x-10 sm:space-x-20 flex">
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <h6
            className="w-[80px] sm:w-[120px] rounded-xl py-2 
            text-center green-text font-bold tracking-wide
            shadow-lg shadow-green-500 hover:scale-105 ease-in duration-200"
          >
            DEMO
          </h6>
        </a>
        <a href={props.code} target="_blank" rel="noopener noreferrer">
          <h6
            className="w-[80px] sm:w-[120px] rounded-xl py-2 
            text-center green-text font-bold tracking-wide
            shadow-lg shadow-green-500 hover:scale-105 ease-in duration-200"
          >
            CODE
          </h6>
        </a>
      </div>
    </div>
  );
}

export default DemoCodeProject;
