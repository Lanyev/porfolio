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
          I am a self-taught developer, 35 years old, from Ciudad Juarez,
          Chihuahua, Mexico. I have one year of programming experience, but I
          have been interested in technology all my life. My specialty is React,
          Javascript, HTML and CSS, but I am also committed to learning new
          technologies. Additionally, I am particularly interested in machine
          learning and technologies like ChatGPT and Stable Diffusion. As a
          proactive developer, my focus is on problem-solving and adapting to
          new challenges. I am excited to continue growing in my career and
          contributing to exciting projects.
        </p>

        <br />

        <p className="text-xl text-white">
          In my current work, I stand out for my consistency and dedication to
          achieving set goals. I strive to deliver high-quality projects in
          reasonable timelines. In my free time, I enjoy playing video games and
          playing the guitar, I think these hobbies help me keep a fresh focus
          and enrich my creativity in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
