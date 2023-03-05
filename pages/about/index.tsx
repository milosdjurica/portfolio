import Header from "@/components/sections/Header";
import React from "react";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Since the first time I started coding back in 2018, i was fascinated by
        programming.
      </p>
      <p>
        My first programming language was
        <span className="green-text"> Java</span>. Later i tried
        <span className="green-text"> Javascript </span>
        and the more i learned it, the more i loved it.
      </p>
      <p>
        When I don&#39;t work on personal projects or don&#39;t study I am
        solving coding challenges in order to stay sharp. I have already solved
        <span className="green-text"> over 250 coding challenges </span>
        from various sites such as Codewars and Leetcode.
      </p>
      <p>
        You can check my progress on{" "}
        <a
          href="https://github.com/milosdjurica/codewars"
          className="green-text hover:green-underline"
        >
          Codewars
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/milosdjurica/leetcode"
          className="green-text hover:green-underline"
        >
          Leetcode
        </a>{" "}
        repositories on Github. 👀
      </p>
    </div>
  );
}

export default About;
