import React from "react";

type Props = {
  icon: any;
  title: string;
};

function IconHolder({ icon, title }: Props) {
  return (
    <div
      key={title}
      className="font-bold green-text w-40 py-2 m-2
      rounded-md 
      shadow-sm shadow-[#18D26E]
    flex justify-around items-center hover:scale-105 ease-in duration-200 
    "
    >
      {icon}
      <p>{title}</p>
    </div>
  );
}

export default IconHolder;
