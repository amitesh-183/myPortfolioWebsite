import Aos from "aos";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <h2
        id="projects"
        className="uppercase font-black justify-center text-3xl text-center mt-2"
      >
        Projects
      </h2>
      <div className="flex flex-wrap justify-center text-center">
        <a
          href="https://estore.pythonanywhere.com/#/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            loading="lazy"
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/estore.webp"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">E-Commerce Web App</h4>
          <span className="flex flex-wrap gap-4 justify-center pt-1 font-semibold">
            Full-Stack
            <div className="flex gap-2 justify-center">
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                React Js
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Python
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Django
              </span>
            </div>
          </span>
        </a>
        <a
          href="https://amitesh-183.github.io/usabilityclone/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            loading="lazy"
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/cloneweb.webp"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Usability Clone</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            {/* <img className="h-7" src="./assets/html-5.png" alt="" />
            <img className="h-7" src="./assets/css.png" alt="" />
            <img className="h-7" src="./assets/js.png" alt="" /> */}
            <div className="flex gap-2 justify-center">
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
            </div>
          </span>
        </a>
        <a
          href="https://amitesh-183.github.io/clock/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            loading="lazy"
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/clock.webp"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Clock Using javascript</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
            </div>
          </span>
        </a>
        <a
          href="https://mistorclon.netlify.app/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            loading="lazy"
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/mi.webp"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Mi Store Clone</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                React Js
              </span>
            </div>
          </span>
        </a>
        <a
          href="https://wezion.netlify.app"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            loading="lazy"
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/tumbwe.webp"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Wezion</h4>
          <span className="flex flex-wrap gap-4 justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
              <span className="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                React Js
              </span>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
