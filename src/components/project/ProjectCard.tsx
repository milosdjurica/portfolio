import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  title: string;
  img: StaticImageData;
};

function ProjectCard({ link, title, img }: Props) {
  return (
    <div
      className="relative group h-full rounded-lg  
    hover:shadow-sm hover:shadow-green-500 
    flex justify-center items-center"
    >
      <div
        className="hidden z-10 h-[80%] 
        green-text text-sm lg:text-lg
        group-hover:flex flex-col justify-between items-center text-center 
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h5 className="font-bold">{title}</h5>
        <Link
          href={link}
          className="cursor-pointer px-4 py-2 rounded-lg font-bold 
          shadow-lg shadow-green-500
          hover:scale-105 ease-in duration-200
          "
        >
          SEE MORE
        </Link>
      </div>
      <Image
        className="group-hover:opacity-10 rounded-lg ease-in duration-200"
        src={img}
        alt="linktree img"
      />
    </div>
  );
}

export default ProjectCard;
