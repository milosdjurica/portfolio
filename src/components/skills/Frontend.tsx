import React from "react";
import IconHolder from "./IconHolder";
import CssIcon from "./skillsIcons/CssIcon";
import HtmlIcon from "./skillsIcons/HtmlIcon";
import JavascriptIcon from "./skillsIcons/JavascriptIcon";
import NextjsIcon from "./skillsIcons/NextjsIcon";
import ReactIcon from "./skillsIcons/ReactIcon";
import TailwindIcon from "./skillsIcons/TailwindIcon";

function Frontend() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">FRONT END</h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="HTML" icon={<HtmlIcon />} />
        <IconHolder title="CSS" icon={<CssIcon />} />
        <IconHolder title="Tailwind" icon={<TailwindIcon />} />
        <IconHolder title="React" icon={<ReactIcon />} />
        <IconHolder title="Next.js" icon={<NextjsIcon />} />
      </div>
    </div>
  );
}

export default Frontend;
