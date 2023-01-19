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

        <p className="text-xl mt-30 text-white">
          Self-taught developer with 1 year of experience in React, Javascript,
          HTML, and CSS. Passionate about technology, with a strong focus on
          continuous learning, including machine learning and technologies like
          ChatGPT and Stable Diffusion. Fluent in English and Spanish, with
          experience in inventory management and project documentation. Strong
          problem-solver, dedicated to achieving goals, and eager to contribute
          to innovative projects. In my free time, I enjoy playing video games
          and playing the guitar, which help me stay fresh and creative.
        </p>
      </div>
    </div>
  );
};

export default About;
