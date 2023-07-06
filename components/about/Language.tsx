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
          I have basic knowledge of
          <span className="green-text"> Russian</span> since I had Russian
          classes in my elementary and middle school for 8 years.
        </p>
        <p>
          2 years ago I started learning{" "}
          <span className="green-text">Spanish</span> on the application called
          Duolingo. Since i am very passionate about Spanish, i do at least one
          lesson per day. Lesson includes reading, writing, listening and
          speaking exercises. I have been doing that for{" "}
          <span className="green-text">600+ consecutive days.</span>
        </p>
      </div>
    </div>
  );
}

export default Language;
