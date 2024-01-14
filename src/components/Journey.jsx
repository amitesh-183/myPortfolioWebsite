import React from "react";
import "../styles/journey.scss";
export default function Journey() {
  return (
    <div id="education">
      <h2 className="uppercase font-black justify-center text-3xl text-center mt-20">
        Journey
      </h2>
      <p className="text-center font-medium md:pb-8">
        My Journey of becoming Web Developer
      </p>

      <section className="timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018-2020</div>
            <div className="timeline-content">
              <h3>Genesis</h3>
              <p>
                My journey began when, I was first introduced to HTML, Java and
                MySQL in my school. It was amazing experience while learning
                these technologies. My interest towards these technologies
                started to increasing more and more...{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020-23</div>
            <div className="timeline-content">
              <h3>Graduation - B.C.A</h3>
              <p>
                While I found my interest, I opted for B.C.A for graduation,
                where I learned many languages Like C, C++, JavaScript, PHP,
                Python and many more.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Web Development</h3>
              <p>
                So, while experiencing different technologies, I some how drawn
                towards the web development
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Javascript</h3>
              <p>
                After successfully completing the javascript, I came to know
                about React js Library. And Then the V8 engine combined with c++
                gives birth to Node Js a javascript runtime environment,Express
                Js and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
