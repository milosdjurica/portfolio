import React from "react";

function CodingJourney() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">MY CODING JOURNEY</h2>
      <div className="space-y-4 text-lg md:w-[70%]">
        <p>
          Since the first time I started coding back in{" "}
          <span className="green-text">2018</span>, i was fascinated by
          programming. 🤯
        </p>
        <p>
          First programming language i learned was
          <span className="green-text"> Java</span>. In Java i learned basic
          principles about OOP.
        </p>
        <p>
          After that, i experimented a little bit with
          <span className="green-text"> JavaScript </span>
          and the more i learned it, the more i loved it. 😍
        </p>
        <p>
          Now, i am focused on creating{" "}
          <span className="green-text">front-end TypeScript</span> applications
          with <span className="green-text">React/Next.js.</span>
        </p>
        <p>
          I also have some experience in building REST API with{" "}
          <span className="green-text">NestJS</span> - progressive Node.js
          framework.
        </p>
        <p>
          When I don&#39;t work on personal projects or don&#39;t study I am
          solving coding challenges in order to stay sharp. 💨
        </p>
        <p>
          I have already solved
          <span className="green-text"> over 350 coding challenges </span>
          from various sites such as Codewars and Leetcode. ✔
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
          repositories on Github. 👀
        </p>
      </div>
    </div>
  );
}

export default CodingJourney;
