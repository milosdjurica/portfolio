import TitleAndIcons from "@/components/TitleAndIcons";
import React from "react";

function About() {
  return (
    <>
      <TitleAndIcons title="ABOUT ME" />

      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="w-1/3">Image</h2>

        <div className="space-y-6">
          <h2 className="green-text font-semibold text-3xl">
            MY CODING JOURNEY
          </h2>
          <div className="space-y-4 text-lg md:w-[70%]">
            <p>
              Since the first time I started coding back in{" "}
              <span className="green-text">2018</span>, i was fascinated by
              programming. 🤯
            </p>
            <p>
              My first programming language was
              <span className="green-text"> Java</span>. Later i tried
              <span className="green-text"> JavaScript </span>
              and the more i learned it, the more i loved it. 😍
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
            <p>
              Now, i am focused on building{" "}
              <span className="green-text">full-stack</span> TypeScript
              applications with <span className="green-text">Next.js</span>.
            </p>
            <p>
              I also have some experience in building REST API with{" "}
              <span className="green-text">NestJS</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
