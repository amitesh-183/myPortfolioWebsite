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

      <div className="relative container pt-24 gap-40 px-36 flex justify-around">
        <div>
          <h1 className=" text-5xl pt-32 font-bold">
            Hey, I am B.Amitesh <em>Frontend Developer</em>
          </h1>
          <p className="py-6 font-medium">
            "Experience the power of clean, responsive design with expertly
            crafted code. Elevate your web presence with our development
            services."
          </p>
          <div className="flex gap-4">
            <a href="/" className="">
              <button className="bg-indigo-600 py-3 rounded-md hover:bg-indigo-700 font-bold px-6 duration-500">
                Hire me
              </button>
            </a>
            <a href="./assets/resume.pdf">
              <button className="bg-indigo-100 duration-500 py-3 rounded-md hover:bg-indigo-200 font-bold px-6">
                <i class="fa-regular fa-file"></i> Resume
              </button>
            </a>
          </div>
        </div>
        <div className=" max-w-lg">
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
