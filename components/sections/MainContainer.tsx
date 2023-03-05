import React from "react";

function MainContainer({ children }: any) {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-full sm:w-[90%] min-h-[80vh] 
    bg-black/60
      rounded-2xl border border-black dark:border-white"
      >
        {children}
      </div>
    </div>
  );
}

export default MainContainer;
