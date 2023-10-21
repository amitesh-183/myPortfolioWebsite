import { useEffect, useRef, useState } from "react";
import React from "react";
import SkillComp from "./SkillComp";

const Skills = () => {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState();
  // console.log("isVisible", isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div>
      <h2 className="uppercase font-black justify-center text-3xl text-center mt-20">
        Tech Stack
      </h2>
      <div
        className="container px-16 mx-auto lg:mx-auto py-16 text-center justify-center md:justify-around grid gap-4 lg:grid-cols-4 grid-cols-1 grid-rows-auto md:grid-cols-3 md:mx-auto sm:grid-cols-2 sm:mx-auto"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div
          ref={myRef}
          className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 "
        >
          <img
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/html-5.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "90" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className="lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500">
          <img
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/css.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "85" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className="lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className=" h-16 ml-12 mt-12 lg:ml-10 lg:mt-10 absolute m-auto"
            src="./assets/js.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "90" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/atom.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "70" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-16 ml-8 mt-8 lg:ml-11 lg:mt-10 absolute m-auto"
            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "40" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/node.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "50" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/mongo.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "40" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-12 ml-8 mt-8 lg:ml-9 lg:mt-12 absolute m-auto"
            src="./assets/tail.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "80" : "0"}
            color="#7e0cff"
          />
        </div>
        <div className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 ">
          <img
            className="h-16 ml-8 mt-8 lg:ml-9 lg:mt-10 absolute m-auto"
            src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png"
            alt=""
          />
          <SkillComp
            size={150}
            strokeWidth={20}
            percentage={isVisible ? "90" : "0"}
            color="#7e0cff"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
