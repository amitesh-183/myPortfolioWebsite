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

      <div className=" flex flex-col-reverse mx-auto pt-10 container lg:pt-24 lg:mb-44 lg:flex lg:gap-40 lg:px-36 lg:flex-row justify-around md:flex-col-reverse md:pt-8 md:mx-auto  sm:flex-col-reverse sm:pt-16">
        <div className="md:text-center md:mx-auto sm:text-center">
          <h1 className="mx-auto text-center text-3xl lg:text-5xl lg:text-left lg:px-0 lg:mt-10 lg:pt-20 font-bold">
            Hey, I am B.Amitesh <em>Frontend Developer</em>
          </h1>
          <p className="text-center mx-auto px-10 py-4 lg:py-6 lg:text-left lg:px-0 font-medium md:px-20 md:py-6 md:mx-auto sm:px-16 sm:py-6">
            "Hi there! I'm a passionate frontend developer based in Bhilai,
            Chhattisgarh. I love creating beautiful and functional websites that
            showcase my skills and creativity."
          </p>
          <div className="gap-4 justify-center flex lg:gap-4 lg:justify-start md:gap-4 md:justify-center sm:gap-4 sm:justify-center">
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
          <div className="lg:text-left py-10">
            <span className="flex gap-4 justify-center lg:justify-start font-semibold pb-10">
              {" "}
              <i className="fa-brands fa-github text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
              <i className="fa-brands fa-linkedin text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
              <i className="fa-brands fa-twitter text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
            </span>
            <span className="flex gap-4 justify-center lg:justify-start mb-4 font-semibold text-2xl">
              Tech Stack |{" "}
              <img className="h-8" src="./assets/atom.png" alt="" />
              <img className="h-6" src="./assets/tail.png" alt="" />
              <img className="h-8" src="./assets/js.png" alt="" />
            </span>
          </div>
        </div>
        <div className="max-w-sm lg:max-w-xl lg:mx-auto md:max-w-sm md:mx-auto sm:max-w-xs sm:mx-auto">
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
