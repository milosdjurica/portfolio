import React from "react";

function BasicInfo() {
  return (
    <div className="space-y-6">
      <h2 className="green-text font-semibold text-3xl">BASIC INFO</h2>
      <div className="space-y-3 text-lg md:w-[70%]">
        <p>
          I am a front-end oriented software developer. Focused on
          React/Next.js.
        </p>
        <p>
          Fourth year student of
          <span className="green-text"> Information Technologies </span>
          at University of Novi Sad, Faculty of Sciences.
        </p>
        <p>
          I possess the ability to adapt my communication style to diverse
          audiences and situations, ensuring
          <span className="green-text"> clarity and effectiveness. </span>
          That makes me eligible for working in teams and with clients. As a
          person who <span className="green-text">values honesty,</span> I am
          <span className="green-text"> open and direct</span> in my
          interactions.
        </p>
        <p>
          Consistently investing in my{" "}
          <span className="green-text">
            personal and professional development,
          </span>{" "}
          as I am always pushing myself to{" "}
          <span className="green-text">improve.</span>
        </p>
        <p>
          <span className="green-text">Mensa-verified IQ of 130+, </span>
          placing me among the
          <span className="green-text"> top 1% </span> of the most intelligent
          people in the world. I possess
          <span className="green-text"> strong problem-solving skills </span>
          and i enjoy this type of challenges. That is one of the reasons why i
          chose this career path.
        </p>
      </div>
    </div>
  );
}

export default BasicInfo;
