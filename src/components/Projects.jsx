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
      <div className="container grid-col-1 mx-auto lg:px-24 lg:py-16 text-center justify-around grid gap-4 lg:grid-cols-3 grid-rows-2 md:grid-cols-3 md:mx-auto sm:grid-cols-2 sm:mx-auto">
        <a
          href="https://estore.pythonanywhere.com/#/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/estore.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">E-Commerce Web App</h4>
          <span className="flex flex-wrap gap-4 justify-center pt-1 font-semibold">
            Full-Stack
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                React Js
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Python
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
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
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/cloneweb.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Usability Clone</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            {/* <img className="h-7" src="./assets/html-5.png" alt="" />
            <img className="h-7" src="./assets/css.png" alt="" />
            <img className="h-7" src="./assets/js.png" alt="" /> */}
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
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
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/clock.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Clock Using javascript</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
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
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/mi.png"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Mi Store Clone</h4>
          <span className="flex flex-wrap gap-4 font-semibold justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
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
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/tumbwe.png"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Wezion</h4>
          <span className="flex flex-wrap gap-4 justify-center pt-2">
            Frontend
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
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
