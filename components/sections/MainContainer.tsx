import React from "react";

function MainContainer({ children }: any) {
  return (
    <div className="flex justify-center items-center mb-20">
      <div
        className="w-[95%] sm:w-[90%] md:my-10 
    bg-black/60
      rounded-2xl shadow-md shadow-[#18D26E]"
      >
        <div className="p-10 space-y-10">{children}</div>
      </div>
    </div>
  );
}

export default MainContainer;
