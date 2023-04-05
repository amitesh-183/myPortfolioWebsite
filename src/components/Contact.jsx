import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact container text-center py-4" id="contact">
        {/* <video
          className=" absolute -z-10 mb-40 max-h-screen-md max-w-screen-3xl"
          autoPlay
          loop
          muted
          playsInline
          src="./assets/bg.mp4"
        ></video> */}
        <h2 className="uppercase font-black justify-center text-3xl mt-20">
          Contact Me
        </h2>
        <p>Amitesh</p>
        <div className=" m-8 py-8">
          <form action="" className="grid grid-cols-2 font-bold">
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
                className="p-6 rounded-md outline-none hover:shadow-violet-300 duration-500 shadow-slate-900 shadow-md bg-slate-200"
                name="message"
                id=""
                placeholder="Your Message"
                cols="70"
                rows="8"
              ></textarea>
            </div>
          </form>
          <button className="mx-[620px] px-10 font-black text-lg duration-500 cursor-pointer hover:bg-indigo-700 rounded-lg mt-6 py-4 flex justify-center shadow-lg shadow-indigo-500/40 hover:shadow-indigo-600  bg-indigo-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
