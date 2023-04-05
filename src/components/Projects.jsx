import React from "react";

const Projects = () => {
  return (
    <div>
      <h2
        id="projects"
        className="uppercase font-black justify-center text-3xl text-center mt-20"
      >
        Projects
      </h2>
      <div className="container grid-col-1 mx-auto lg:px-24 lg:py-16 text-center justify-around grid gap-4 lg:grid-cols-4 grid-rows-2 md:grid-cols-3 md:mx-auto sm:grid-cols-2 sm:mx-auto">
        <a
          href="https://estore.pythonanywhere.com/#/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/estore.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">E-Commerce Website</h4>
          <p>Full Stack</p>
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
          <h4 className="text-2xl font-bold pt-2">Usability Website Clone</h4>
          <p>Full Stack</p>
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
          <p>Full Stack</p>
        </a>
        <a
          href="https://"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="./assets/calc.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Calculator - javascript</h4>
          <p>Full Stack</p>
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
          <p>Full Stack</p>
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
          <p>Full Stack</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
