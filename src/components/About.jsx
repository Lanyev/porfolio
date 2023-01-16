import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-emerald-700  to-emerald-700"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lime-300 text-white">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-white">
          I am a self-taught developer with 1 year of experience, specializing
          in React, Javascript, HTML, and CSS. My passion for technology has
          driven me to continuously learn and stay up-to-date with the latest
          developments, including machine learning and technologies like ChatGPT
          and Stable Diffusion. I am fluent in both English and Spanish, and
          have experience creating comprehensive manuals for projects in both
          languages. Additionally, I have experience in maintaining and
          organizing inventory using Excel, and have implemented inventory
          management systems that improved efficiency and accuracy at the
          warehouse.
        </p>

        <br />

        <p className="text-xl text-white">
          I am excited to continue growing in my career and contributing to
          innovative projects. My consistency and dedication to achieving set
          goals, along with my enthusiasm for learning and problem-solving, make
          me an asset to any team. In my free time, I enjoy playing video games
          and playing the guitar, which help me to keep a fresh focus and enrich
          my creativity in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
