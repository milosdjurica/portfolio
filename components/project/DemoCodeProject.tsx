import Image from "next/image";
import React from "react";

function DemoCodeProject(props: any) {
  return (
    <div
      className="flex flex-col lg:flex-row 
      justify-around items-center 
      space-y-10"
    >
      <Image
        src={props.image}
        alt="Linktree clone project image"
        className="md:w-2/3 lg:w-1/2 rounded-xl shadow-md shadow-green-500"
      />
      <div
        className="space-x-10 sm:space-x-20 
        lg:space-x-0 lg:space-y-20
        flex lg:flex-col
      "
      >
        <a href="https://milosdjurica-linktree.vercel.app/">
          <h6
            className="w-[80px] sm:w-[120px] rounded-xl py-2 
            text-center green-text font-bold tracking-wide
            shadow-lg shadow-green-500 hover:scale-105 ease-in duration-200"
          >
            DEMO
          </h6>
        </a>
        <a href="https://github.com/milosdjurica/nextjs-linktree">
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
