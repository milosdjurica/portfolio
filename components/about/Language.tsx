import React from "react";

function Language() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">LANGUAGES</h2>
      <div className="space-y-4 text-lg md:w-[70%]">
        <p>
          Besides<span className="green-text"> Serbian </span>, i am also{" "}
          <span className="green-text">fluent in English.</span>
        </p>
        <p>
          I can also speak a little bit of{" "}
          <span className="green-text">Russian</span> since I had Russian
          classes in my elementary and middle school for 8 years!😅
        </p>
        <p>
          Oh yeah, I almost forgot! 2 years ago I started learning{" "}
          <span className="green-text">Spanish</span>, and I am in love with it
          ever since! 😍
        </p>
      </div>
    </div>
  );
}

export default Language;
