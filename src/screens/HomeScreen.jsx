import React from "react";
// import AboutComp from "../components/AboutComp";
import Contact from "../components/Contact";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "../styles/home.scss";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Journey from "../components/Journey";
import Certificates from "../components/Certificates";

const override = {
  display: "block",
  margin: "20rem auto",
};

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div id="home">
      {loading ? (
        <PuffLoader
          color="#7c3aed"
          loading={loading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {/* Navbar */}

          <NavbarComp />

          {/* Hero Section */}

          {/* <div
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-offset="500"
            className="absolute left-0 lg:h-[24rem] lg:flex hidden lg:w-[30rem]"
          >
            <img src="./assets/web.png" alt="" />
          </div> */}
          <div
            className="flex flex-col-reverse mx-auto pt-10 container lg:pt-24 lg:mb-44 lg:flex lg:gap-40 lg:px-36 lg:flex-row justify-around md:flex-col-reverse md:pt-8 md:mx-auto  sm:flex-col-reverse sm:pt-16"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            data-aos-offset="500"
          >
            <div className="md:text-center md:mx-auto sm:text-center">
              <h2 className="border lg:flex hidden mt-10 border-violet-500 absolute w-fit px-4 py-2 rounded">
                Web Developer
              </h2>
              <h1 className="mx-auto text-center text-4xl lg:text-5xl lg:text-left lg:px-0 lg:mt-8 lg:pt-20 font-bold">
                Hey, I am B.Amitesh <em>Frontend Developer</em>
              </h1>
              <p className="text-center mx-auto px-10 py-4 lg:py-6 lg:text-left lg:px-0 font-medium md:px-20 md:py-6 md:mx-auto sm:px-16 sm:py-6">
                "Hi there! I'm a passionate frontend developer based in Bhilai,
                Chhattisgarh. I love creating beautiful and functional websites
                that showcase my skills and creativity."
              </p>
              <div className="gap-4 justify-center flex lg:gap-4 lg:justify-start md:gap-4 md:justify-center sm:gap-4 sm:justify-center">
                <a href="/" className="">
                  <button className="bg-indigo-600 py-3 rounded-md hover:bg-indigo-700 font-bold px-6 duration-500 shadow-lg shadow-indigo-100 hover:shadow-indigo-400">
                    Hire me
                  </button>
                </a>
                <a href="./assets/B.Amitesh.pdf">
                  <button className="bg-indigo-100 duration-500 py-3 rounded-md hover:bg-indigo-200 font-bold px-6 shadow-lg shadow-indigo-100 hover:shadow-indigo-400">
                    <i class="fa-regular fa-file"></i> Resume
                  </button>
                </a>
              </div>
              <div className="lg:text-left py-10">
                <span className="flex gap-4 justify-center lg:justify-start font-semibold pb-10">
                  {" "}
                  <a
                    href="https://github.com/amitesh-183"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/bamitesh183"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
                  </a>
                  <a
                    href="https://twitter.com/amitesh_exe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
                  </a>
                </span>
                <span className="flex gap-4 justify-center lg:justify-start mb-4 font-semibold text-2xl">
                  Tech Stack |{" "}
                  <img
                    style={{ animationDelay: "0.3s" }}
                    className="tech h-8"
                    src="./assets/atom.png"
                    alt=""
                  />
                  <img
                    style={{ animationDelay: "0.6s" }}
                    className="tech h-6"
                    src="./assets/tail.png"
                    alt=""
                  />
                  <img
                    style={{ animationDelay: "0.9s" }}
                    className="tech h-8"
                    src="./assets/js.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div
              className="max-w-sm lg:max-w-xl lg:mx-auto md:max-w-sm md:mx-auto sm:max-w-xs sm:mx-auto"
              data-aos="fade-up"
            >
              <img src="./assets/hero.png" alt="developer" />
            </div>
          </div>

          {/* Skills */}
          <Skills />

          <Projects />

          <Journey />

          <Certificates />

          <Contact />

          {/* footer section */}
          <FooterComp />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
