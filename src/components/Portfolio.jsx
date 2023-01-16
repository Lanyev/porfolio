import React from "react";
import crudUsers from "../assets/portfolio/crudUsers.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import pokedex from "../assets/portfolio/pokedex.png";
import rickAndMorty from "../assets/portfolio/rickAndMorty.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import porfolioHTMLCSS from "../assets/portfolio/porfolioHTMLCSS.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      demo: "https://e-commerce-alan-yeverino.netlify.app/",
      code: "https://github.com/Lanyev/e-commerce-academlo",
    },
    {
      id: 2,
      src: pokedex,
      demo: "https://glittering-taffy-698984.netlify.app",
      code: "https://github.com/Lanyev/pokedex2.0",
    },
    {
      id: 3,
      src: rickAndMorty,
      demo: "https://rickandmortyappdimension.netlify.app/",
      code: "https://github.com/Lanyev/rickAndMortyApp",
    },
    {
      id: 4,
      src: crudUsers,
      demo: "https://crudusersbyalan.netlify.app/",
      code: "https://github.com/Lanyev/crudUsers",
    },
    {
      id: 5,
      src: weatherApp,
      demo: "https://chic-crisp-4dc493.netlify.app/",
      code: "https://github.com/Lanyev/weatherApp2",
    },

    {
      id: 6,
      src: porfolioHTMLCSS,
      demo: "https://taupe-alpaca-c11103.netlify.app/",
      code: "https://github.com/Lanyev/portafolioAlanYeverino",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-emerald-700  to-emerald-700 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lime-300 text-white">
            Portfolio
          </p>
          <p className="py-6 text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-black rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
