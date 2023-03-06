import React from "react";
import Icons from "./Icons";

type Props = {
  title: string;
};

function TitleAndIcons({ title }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
      <h2 className="text-4xl tracking-wider font-semibold green-underline">
        {title}
      </h2>
      <Icons />
    </div>
  );
}

export default TitleAndIcons;
