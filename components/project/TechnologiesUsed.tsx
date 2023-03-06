import React from "react";
import { BsCheckCircle } from "react-icons/bs";

type Props = {
  technologies: string[];
};

function TechnologiesUsed({ technologies }: Props) {
  return (
    <div className="space-y-5 w-full lg:w-1/2">
      <h3 className="text-2xl green-underline font-bold">TECHNOLOGIES USED</h3>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {technologies.map((tech): any => (
          <div key={tech} className="flex items-center m-2 space-x-2">
            <BsCheckCircle
              className="rounded-full w-5 h-5 green-text 
            shadow-lg shadow-[#18D26E]"
            />
            <h6 className="green-text">{tech}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesUsed;
