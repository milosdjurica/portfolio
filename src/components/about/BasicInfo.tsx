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
          I am <span className="green-text">extroverted </span>
          person and that makes me eligible for working in teams and with
          clients. I possess the skill to adapt my communication style to
          diverse audiences and situations, guaranteeing {" "}
          <span className="green-text">
            productive and meaningful conversations.
          </span>
        </p>
        <p>
          I did IQ test at
          <span className="green-text"> Mensa Serbia </span>
          and i had <span className="green-text">130+ IQ</span>, which is in the
          <span className="green-text"> top 2% of the whole world.</span> I have
          <span className="green-text"> strong problem-solving skills </span>
          and i enjoy this type of challenges. That is one of the reasons why i
          chose this career path.
        </p>
        <p>
          Some of my hobbies are: taking long walks, hiking, playing football,
          playing board games, watching movies and series.
        </p>
      </div>
    </div>
  );
}

export default BasicInfo;
