import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqzkoow");
  if (state.succeeded) {
    return (
      <p className="flex text-center font-bold text-xl shadow-2xl shadow-black">
        Thanks for joining!
      </p>
    );
  }
  return (
    <div>
      <div className="contact container mx-auto text-center py-8" id="contact">
        <h2 className="uppercase font-black justify-center text-3xl mt-20">
          Contact Me
        </h2>
        <div className=" m-8 py-8 flex flex-col md:flex-row justify-center">
          <div>
            <img src="./assets/contactme.jpg" width={600} alt="" />
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 font-bold">
            <div className="rounded-md flex flex-col gap-8">
              <input
                className="rounded-md lg:pr-48 p-4 mx-auto outline-none shadow-slate-900 shadow-md bg-slate-200 hover:shadow-violet-300 duration-500"
                type="name"
                required
                placeholder="Your Name"
              />
              <input
                className="rounded-md lg:pr-48 p-4 mx-auto hover:shadow-violet-300 duration-500 outline-none shadow-slate-900 shadow-md bg-slate-200"
                id="email"
                type="email"
                required="@gmail.com"
                name="email"
                placeholder="Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                className=" lg:pr-52 md:pr-12 pr-10
                mx-auto lg:max-w-md rounded-md outline-none hover:shadow-violet-300 duration-500 shadow-slate-900 shadow-md bg-slate-200 mt-8 p-4"
                id="message"
                required
                name="message"
                placeholder="Your Message"
                // cols="22"
                rows="4"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="mx-auto lg:flex lg:mx-auto px-10 font-black text-lg duration-500 cursor-pointer hover:bg-indigo-700 rounded-lg mt-6 py-4 flex justify-center shadow-lg shadow-indigo-500/40 hover:shadow-indigo-600  bg-indigo-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
