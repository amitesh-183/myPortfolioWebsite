import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  // const toggleNav = () => {
  //   const toggle_btn = document.getElementById("toggle_menu");
  //   const toggle_nav = document.getElementById("toggle_nav");
  //   toggle_btn.addEventListener("click", () => {
  //   //   toggle_nav.classList.toggle("active");
  //   // });
  //   toggle_nav.classList.toggle(
  //     "nav_links flex flex-col fixed p-28 top-24 bg-indigo-600 w-full text-center left-0"
  //   );
  
  //   console.log("hogaya bro");
  // });
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl lg:py-4 lg:mx-auto lg:justify-center items-center justify-between px-6"
        aria-label="Global"
      >
        <div className="flex md:flex lg:flex-1">
          <Link to="/">
            <span className="text-indigo-600 absolute font-black text-3xl">
              Amitesh
            </span>
          </Link>
        </div>
        <div className="flex lg:pt-8 md:mr-0 sm:flex-row md:pt-6">
          <ul
            id="toggle_nav"
            className="  mx-auto lg:flex lg:ml-96 font-mono font-semibold uppercase lg:flex-row gap-7 md:flex md:flex-row md:justify-end sm:flex-col"
          >
            <li className="hover:text-indigo-600 hover:bg-green-400 rounded px-2 hover:scale-110 duration-150 text-lg hover:skew-x-2">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-2">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-2">
              <a href="#about">Education</a>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-2">
              <Link>Documents</Link>
            </li>
            <li className="hover:text-indigo-600 hover:scale-110 duration-150 text-lg hover:skew-x-2">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
          <div className="flex text-3xl pt-6 lg:hidden md:hidden">
            <i
              id="toggle_menu"
              // onClick={toggleNav()}
              class="fa fa-bars"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavbarComp
