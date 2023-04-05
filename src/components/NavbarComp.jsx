import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:fl lg:flex-1">
          <Link to="/">
            <span className="text-indigo-600 absolute font-black text-3xl">
              Amitesh
            </span>
          </Link>
        </div>
        <div className="flex lg:pt-8 md:mr-0 sm:flex-row md:pt-6">
          <div className=" text-3xl pt-6 lg:hidden md:hidden">
            <a href="/">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
          </div>
          <ul className="hidden lg:flex lg:flex-row gap-7 md:flex md:flex-row md:justify-end sm:flex-col">
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
      </nav>
    </header>
  );
};

export default NavbarComp;
