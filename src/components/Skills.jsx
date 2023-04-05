import React from "react";

const skills = () => {
  return (
    <div>
      <h2 className="uppercase font-black justify-center text-3xl text-center mt-20">
        skills
      </h2>
      <div className="container px-14 mx-auto lg:px-24 py-16 text-center justify-around grid gap-4 lg:grid-cols-4 grid-rows-3 md:grid-cols-3 md:mx-auto sm:grid-cols-2 sm:mx-auto">
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="h-28 m-auto" src="./assets/html-5.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">Html</h4>
          <p>
            I have a strong background in HTML and have completed several
            projects using this language. I can create web pages with various
            features and functionalities using HTML.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="m-auto h-28" src="./assets/css.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">CSS</h4>
          <p>
            I am a proficient CSS developer with several projects under my belt.
            I have hands-on experience in creating responsive and attractive web
            pages using CSS.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="m-auto h-28" src="./assets/js.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">JavaScript</h4>
          <p>
            I am a proficient JavaScript developer with several projects under
            my belt. I have hands-on experience in using JavaScript for web
            development, and automation.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="m-auto h-28" src="./assets/git.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">Git</h4>
          <p>
            I am proficient in using git for version control and collaboration.
            I have worked on several projects that involved git workflows and
            best practices.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img
            className="m-auto h-28"
            src="./assets/responsive-design.png"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Responsive Design</h4>
          <p>
            I have experience in creating responsive websites with media queries
            and tailwind css, a modern utility-first framework for styling
            elements.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="m-auto h-28" src="./assets/seo.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">SEO</h4>
          <p>
            I enhanced my web development skills by learning and applying search
            engine optimization techniques and semantic elements to improve the
            accessibility and ranking of my websites.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img
            className="m-auto h-28"
            src="./assets/hosting-services.png"
            alt=""
          />
          <h4 className="text-2xl font-bold pt-2">Hosting</h4>
          <p>
            I have deployed multiple projects using different platforms like
            Netlify, Vercel, etc. These platforms offer fast and reliable
            hosting services for web applications.
          </p>
        </div>
        <div className=" bg-slate-100 p-8 rounded-lg hover:scale-105 duration-500 hover:shadow-xl">
          <img className="m-auto h-28" src="./assets/atom.png" alt="" />
          <h4 className="text-2xl font-bold pt-2">React Js</h4>
          <p>
            I am a skilled React developer with multiple projects under my belt.
            I can create dynamic and responsive web applications using this
            popular library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default skills;
