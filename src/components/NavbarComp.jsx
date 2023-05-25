import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Aos from "aos";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const NavbarComp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init();
  });

  return (
    <header className="bg-white" data-aos="fade-up" data-aos-duration="1000">
      <nav
        className="mx-auto flex border-b max-w-7xl pt-8 items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <span className="text-indigo-600 absolute top-6 font-black text-3xl">
              Amitesh
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-4 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="#home"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Education
          </a>
          <a
            href="#certificates"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Certificates
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pb-8">
            <Link to="/">
              <span className="text-indigo-600 absolute font-black text-3xl">
                Amitesh
              </span>
            </Link>

            <button
              type="button"
              className="-m-1.4 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-7 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-400 hover:text-white hover:scale-100 duration-150 hover:skew-x-2"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-400 hover:text-white hover:scale-100 duration-150 hover:skew-x-2"
                >
                  Projects
                </a>

                <a
                  href="#education"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-green-400 hover:scale-100 duration-150 hover:skew-x-2"
                >
                  Education
                </a>
                <a
                  href="#document"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-green-400 hover:scale-100 duration-150 hover:skew-x-2"
                >
                  Documents
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-green-400 hover:scale-100 duration-150 hover:skew-x-2"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavbarComp;
