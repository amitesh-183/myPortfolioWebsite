import React from "react";
import "../styles/certificates.scss";

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
          <div className=" cursor-pointer px-2 bg-violet-300 hover:shadow-md hover:shadow-violet-900 duration-500 py-28 rounded-xl">
            <a
              href="https://www.freecodecamp.org/certification/bamitesh/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg"
                alt="freecodecamp"
                className="h-9 object-contain"
              />
            </a>
          </div>
          <h4 className="text-center font-bold py-4">
            Responsive Web Design - Freecodecamp
          </h4>
        </div>
        <div>
          <div className=" cursor-pointer px-6 bg-violet-300 hover:shadow-md hover:shadow-violet-900 duration-500 py-28 rounded-xl">
            <a
              href="https://github.com/amitesh-183/myPortfolioWebsite/blob/main/public/assets/python101.PDF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png"
                alt="Cognitive"
                className="h-9 w-[16rem] object-contain"
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
