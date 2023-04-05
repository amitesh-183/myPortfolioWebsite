import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomeScreen = () => {
  return (
    <div id="home">
      {/* Navbar */}
      <NavbarComp />

      {/* Hero Section */}

      <div className="relative container lg:pt-24 lg:mb-44 lg:gap-40 lg:px-36 flex lg:flex-row justify-around md:flex-col-reverse md:pt-8 md:mx-auto  sm:flex-col-reverse sm:pt-16">
        <div className="md:text-center md:mx-auto sm:text-center">
          <h1 className="text-5xl lg:text-left lg:px-0 lg:mt-10 lg:pt-32 font-bold">
            Hey, I am B.Amitesh <em>Frontend Developer</em>
          </h1>
          <p className="lg:py-6 lg:text-left lg:px-0 font-medium md:px-20 md:py-6 md:mx-auto sm:px-16 sm:py-6">
            "Experience the power of clean, responsive design with expertly
            crafted code. Elevate your web presence with our development
            services."
          </p>
          <div className="flex lg:gap-4 lg:justify-start md:gap-4 md:justify-center sm:gap-4 sm:justify-center">
            <a href="/" className="">
              <button className="bg-indigo-600 py-3 rounded-md hover:bg-indigo-700 font-bold px-6 duration-500 shadow-lg shadow-indigo-100 hover:shadow-indigo-400">
                Hire me
              </button>
            </a>
            <a href="./assets/resume.pdf">
              <button className="bg-indigo-100 duration-500 py-3 rounded-md hover:bg-indigo-200 font-bold px-6 shadow-lg shadow-indigo-100 hover:shadow-indigo-400">
                <i class="fa-regular fa-file"></i> Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex lg:max-w-lg md:max-w-sm md:mx-auto sm:max-w-xs sm:mx-auto">
          <img src="./assets/hero.png" alt="developer" />
        </div>
      </div>

      {/* Skills */}
      <Skills />

      <Projects />

      <About />

      <Contact />

      {/* footer section */}
      <FooterComp />
    </div>
  );
};

export default HomeScreen;
