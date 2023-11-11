import React from "react";

function CodingJourney() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">MY CODING JOURNEY</h2>
      <div className="space-y-3 text-lg md:w-[70%]">
        <p>
          My first contact with programming was in 2018 with
          <span className="green-text"> Java</span> as my first programming
          language. In Java I learned OOP principles and how to write type-safe
          code.
        </p>
        <p>
          After that, I started experimented a little bit with
          <span className="green-text"> JavaScript and Typescript </span>
          and i loved it.
        </p>
        <p>
          Now, I like to create{" "}
          <span className="green-text">full-stack TypeScript</span> applications
          with <span className="green-text">Next.js.</span>
        </p>
        <p>
          I also have some experience in building REST API with{" "}
          <span className="green-text">NestJS</span> - progressive Node.js
          framework.
        </p>
        <p>
          I enjoy solving coding challenges which is why I have already solved
          <span className="green-text"> 350+ coding challenges </span>
          from various sites such as Codewars and Leetcode.
        </p>
        <p>
          You can check my progress on{" "}
          <a
            href="https://github.com/milosdjurica/codewars"
            className="green-text green-underline"
          >
            Codewars
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/milosdjurica/leetcode"
            className="green-text green-underline"
          >
            Leetcode
          </a>{" "}
          repositories on Github.
        </p>
      </div>
    </div>
  );
}

export default CodingJourney;
