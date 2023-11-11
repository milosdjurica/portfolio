import React from "react";

function Language() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">LANGUAGES</h2>
      <div className="space-y-3 text-lg md:w-[70%]">
        <p>
          Native in{" "}
          <span className="green-text">
            {" "}
            Serbian, Croatian, Bosnian and Montenegrin.
          </span>{" "}
          I am also fluent in <span className="green-text">English.</span>
        </p>
        <p>
          3 years ago I started learning{" "}
          <span className="green-text">Spanish</span> on the application called
          Duolingo. I practice Spanish on Duolingo every day for
          <span className="green-text"> 700+ days</span> in a row. 5 months ago
          I also started talking with native Spanish speakers as I am really
          passionate about the language.
        </p>
        <p>
          I learned<span className="green-text"> Russian</span> for 8 years in
          elementary and high school.{" "}
        </p>
      </div>
    </div>
  );
}

export default Language;
