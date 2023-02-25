import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <div className="container flex py-8 justify-around gap-96">
        <div className="justify-start">
          <h1 className="text-indigo-600 font-black text-3xl">Amitesh</h1>
        </div>
        <div className="">
          <ul className="flex gap-7">
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-6">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-6">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-6">
              <a href="#about">Education</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-6">
              <Link>Documents</Link>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-6">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
