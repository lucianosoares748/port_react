import React from "react";
import proHome from "../assets/portfolio/proHome.png";
import todoList from "../assets/portfolio/todoList.png";
import searchCards from "../assets/portfolio/searchCards.png";
import amorPage from "../assets/portfolio/amorPage.png";
import calculateJs from "../assets/portfolio/calculateJs.png";
import formularioJr from "../assets/portfolio/formularioJr.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: proHome,
      url: "https://darling-frangipane-42c5a1.netlify.app/",
      url2: "https://github.com/lucianosoares748/home",
    },
    {
      id: 2,
      src: todoList,
      url: "https://snazzy-sunshine-4870fd.netlify.app/",
      url2: "https://github.com/lucianosoares748/Todo_javaScript",
    },
    {
      id: 3,
      src: searchCards,
      url: "https://neon-donut-f39ec7.netlify.app/",
      url2: "https://github.com/lucianosoares748/react.js-_init",
    },
    {
      id: 4,
      src: amorPage,
      url: "https://amandiinhamakeup.netlify.app/",
      url2: "https://github.com/lucianosoares748/Makeup",
    },
    {
      id: 5,
      src: calculateJs,
      url: "https://vocal-donut-f15a9e.netlify.app/",
      url2: "https://github.com/lucianosoares748/calculadora",
    },
    {
      id: 6,
      src: formularioJr,
      url: "https://coruscating-pasca-5af8ee.netlify.app/",
      url2: "https://github.com/lucianosoares748/Fomularyweb",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Confira alguns trabalhos feitos por mim.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={portfolio.url}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={portfolio.url2}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
