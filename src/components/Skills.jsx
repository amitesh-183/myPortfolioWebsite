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
        className="p-16 2xl:justify-start xl:justify-start lg:justify-start md:justify-evenly justify-center flex flex-wrap"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div
          ref={myRef}
          className=" lg:mx-auto lg:px-24 p-8 rounded-lg hover:scale-105 duration-500 "
        >
          <img
            loading="lazy"
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/html-5.webp"
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
            loading="lazy"
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/css.webp"
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
            loading="lazy"
            className=" h-16 ml-10 mt-10 absolute m-auto"
            src="./assets/js.webp"
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
            loading="lazy"
            className="h-20 ml-9 mt-9 absolute m-auto"
            src="./assets/atom.webp"
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
            className="h-16 ml-11 mt-11 lg:mt-10 absolute m-auto"
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
            loading="lazy"
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/node.webp"
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
            loading="lazy"
            className="h-20 ml-8 mt-8 lg:ml-9 lg:mt-9 absolute m-auto"
            src="./assets/mongo.webp"
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
            loading="lazy"
            className="h-12 ml-8 mt-12 lg:ml-9 lg:mt-12 absolute m-auto"
            src="./assets/tail.webp"
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
            loading="lazy"
            className="h-16 ml-8 mt-10 lg:ml-9 lg:mt-10 absolute m-auto"
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
