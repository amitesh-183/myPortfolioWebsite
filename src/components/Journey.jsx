import React from "react";

export default function Journey() {
  return (
    <div id="education">
      <h2 className="uppercase font-black justify-center text-3xl text-center mt-20">
        Journey
      </h2>
      <p className="text-center font-medium pb-8">
        My Journey of becoming Web Developer
      </p>

      <div className="flex h-[120vh] absolute left-20 lg:left-[47.4rem] shadow-sm shadow-black flex-col border border-black "></div>

      <div className="absolute left-8 lg:left-[44rem] pt-8 flex gap-24 flex-col">
        <img
          className="rounded-full h-28 w-28"
          src="./assets/journ1.jpg"
          alt=""
        />
        <img
          className="rounded-full h-28 w-28"
          src="./assets/journ2.jpg"
          alt=""
        />
        <img
          className="rounded-full h-28 w-28"
          src="./assets/journ3.jpg"
          alt=""
        />
        <img
          className="rounded-full h-28 w-28"
          src="./assets/journ4.jpg"
          alt=""
        />
        <img
          className="rounded-full h-28 w-28"
          src="./assets/journ5.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-center flex-col px-20 ml-16 lg:px-28 py-10 gap-24">
        <div>
          <h4 className="font-semibold text-xl ">2018-2020 Genesis</h4>
          <p className=" lg:mr-[50rem]">
            My journey began when, I was first introduced to HTML, Java and
            MySQL in my school. It was amazing experience while learning these
            technologies. My interest towards these technologies started to
            increasing more and more...{" "}
          </p>
        </div>
        <div className="text-right">
          <h4 className=" font-semibold text-xl">2020-23 Graduation - B.C.A</h4>
          <p className=" lg:ml-[50rem]">
            While I found my interest, I opted for B.C.A for graduation, where I
            learned many languages Like C, C++, JavaScript, PHP, Python and many
            more.
          </p>
        </div>
        <div>
          <h4 className=" font-semibold text-xl">Web Development</h4>
          <p className=" lg:mr-[50rem]">
            So, while experiencing different technologies, I some how drawn
            towards the web development
          </p>
        </div>
        <div className="text-right">
          <h4 className=" font-semibold text-xl">Javascript</h4>
          <p className=" lg:ml-[50rem]">
            While I was learning javascript, I dive deep in javascript where, I
            got knowledge of ECMA Script - ES 2015 - majorly known as modern
            javascript, Dom manipulation, Global Execution Context, Callbacks,
            Closures other javascript frameworks
          </p>
        </div>
        <div>
          <h4 className=" font-semibold text-xl">
            March 2023 Graduation - MERN Stack
          </h4>
          <p className=" lg:mr-[50rem]">
            After successfully completing the javascript, I came to know about
            React js Library. And Then the V8 engine combined with c++ gives
            birth to Node Js a javascript runtime environment,Express Js and
            MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
}
