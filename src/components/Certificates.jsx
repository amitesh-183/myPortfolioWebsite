import React from "react";

export default function Certificates() {
  return (
    <div id="certificates">
      <h2
        id="projects"
        className="uppercase font-black justify-center text-3xl text-center mt-2"
      >
        Certificates
      </h2>
      <div className="container flex px-28 gap-4 justify-center py-6">
        <div>
          <div className=" cursor-pointer px-2 bg-violet-300 shadow-md shadow-violet-900 py-28 rounded-xl border">
            <a
              href="https://www.freecodecamp.org/certification/bamitesh/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg"
                alt="freecodecamp"
                className="h-9 w-fit"
              />
            </a>
          </div>
          <h4 className="text-center font-bold py-4">
            Responsive Web Design - Freecodecamp
          </h4>
        </div>
        <div>
          <div className=" cursor-pointer px-6 bg-violet-300 shadow-md shadow-violet-900 py-28 rounded-xl border">
            <a
              href="https://github.com/amitesh-183/myPortfolioWebsite/blob/main/public/assets/python101.PDF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png"
                alt="Cognitive"
                className="h-9 w-[16rem]"
              />
            </a>
          </div>
          <h4 className="text-center font-bold py-4">
            Python101 - Cognitive Class
          </h4>
        </div>
      </div>
    </div>
  );
}
