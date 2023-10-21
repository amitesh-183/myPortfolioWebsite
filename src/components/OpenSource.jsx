import React from "react";

export default function OpenSource() {
  return (
    <div>
      <h2
        id="projects"
        className="uppercase font-black justify-center text-3xl text-center mt-2"
      >
        Open-Source Contribution
      </h2>
      <div className="container grid-col-1 mx-auto lg:px-24 lg:py-16 text-center justify-around grid gap-4 lg:grid-cols-2 grid-rows-1 md:grid-cols-3 md:mx-auto sm:grid-cols-2 sm:mx-auto">
        <a
          href="https://fresh-nest.netlify.app/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            className="h-56 w-96 m-auto bg-cover rounded-2xl shadow-lg"
            src="https://th.bing.com/th/id/R.3cae196cce80c5899c2e9daba86c7a69?rik=qF4QViTZaM24QQ&riu=http%3a%2f%2fskycoder.net%2fwp-content%2fuploads%2f2020%2f08%2fFresy-Woocommerce-Android-Fresh-Grocery-788x400-1.jpg&ehk=8haE38Bw%2fRap1FBKs5vLZeP14Qbx2ICTiOftd11cmJU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Fresh Nest</h4>
          <span className="flex gap-4 justify-center pt-2">
            <div className="flex gap-2 flex-wrap justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Dart
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                React JS
              </span>
              <span class="text-sm text-white flex-grow font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
              <span class="text-sm text-white flex-grow font-semibold rounded px-2 py-1 bg-indigo-400">
                Swift
              </span>
            </div>
          </span>
        </a>
        <a
          href="https://neel-07.github.io/Temperature-Converter/"
          className="p-8 rounded-lg hover:scale-105 duration-500"
        >
          <img
            className="h-56 w-96 m-auto rounded-2xl shadow-lg"
            src="https://i.ytimg.com/vi/9yaA0E0weKE/maxresdefault.jpg"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Temperature Converter</h4>
          <span className="flex gap-4 justify-center pt-2">
            <div className="flex gap-2 justify-center">
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Html
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                CSS
              </span>
              <span class="text-sm text-white font-semibold rounded px-2 py-1 bg-indigo-400">
                Javascript
              </span>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
}
