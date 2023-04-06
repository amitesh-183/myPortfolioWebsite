import React from "react";

const FooterComp = () => {
  return (
    <div className="w-full bg-indigo-300">
      <div className="container flex w-full p-3 mx-auto gap-10 justify-center">
        <div className=" text-lg text-center items-center">
          Copyright &copy; Amitesh 2023
        </div>
        <div className="flex gap-6">
          <a href="https://twitter.com/amitesh_exe">
            <i className="fa-brands fa-twitter text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
          </a>
          <a href="https://github.com/amitesh-183">
            <i className="fa-brands fa-github text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
          </a>
          <a href="https://linkedin.com/in/bamitesh183">
            <i className="fa-brands fa-linkedin text-3xl hover:scale-125 duration-300 ease-in-out hover:drop-shadow-2xl hover:text-indigo-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
