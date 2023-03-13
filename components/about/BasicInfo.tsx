import React from "react";

function BasicInfo() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">BASIC INFO</h2>
      <div className="space-y-4 text-lg md:w-[70%]">
        <p>
          I am a front-end oriented software developer. Focused on
          React/Next.js.
        </p>
        <p>
          Bachelor student at{" "}
          <span className="green-text">
            University of Novi Sad, Faculty of Sciences.
          </span>
        </p>
        <p>
          I have always been passionate about sports. Football has always been
          my favorite and i play it with my friends once per week. ⚽
        </p>
      </div>
    </div>
  );
}

export default BasicInfo;
