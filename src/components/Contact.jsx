import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact container mx-auto text-center py-4" id="contact">
        <h2 className="uppercase font-black justify-center text-3xl mt-20">
          Contact Me
        </h2>
        <div className=" m-8 py-8">
          <form action="" className="grid lg:grid-cols-2 grid-cols-1 font-bold">
            <div className="rounded-md flex flex-col gap-8">
              <input
                className="rounded-md p-4 mx-10 outline-none shadow-slate-900 shadow-md bg-slate-200 hover:shadow-violet-300 duration-500"
                type="name"
                placeholder="Your Name"
              />
              <input
                className="rounded-md p-4 mx-10 hover:shadow-violet-300 duration-500 outline-none shadow-slate-900 shadow-md bg-slate-200"
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
              />
              <input
                className="rounded-md p-4 mx-10 hover:shadow-violet-300 duration-500 outline-none shadow-slate-900 shadow-md bg-slate-200"
                type="phone"
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <textarea
                className=" max-w-xs lg:max-w-2xl md:max-w-xl rounded-md outline-none hover:shadow-violet-300 duration-500 shadow-slate-900 shadow-md bg-slate-200 mt-8 p-4"
                name="message"
                id=""
                placeholder="Your Message"
                cols="60"
                rows="8"
              ></textarea>
            </div>
          </form>
          <button className="mx-auto lg:mx-[620px] px-10 font-black text-lg duration-500 cursor-pointer hover:bg-indigo-700 rounded-lg mt-6 py-4 flex justify-center shadow-lg shadow-indigo-500/40 hover:shadow-indigo-600  bg-indigo-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
