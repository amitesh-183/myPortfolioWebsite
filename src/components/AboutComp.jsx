import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const AboutComp = () => {
  return (
    <>
      <h2 className="uppercase font-black justify-center text-3xl text-center mt-20">
        Education
      </h2>
      <div className=" justify-center mx-auto">
        <Steps
          direction="vertical"
          style={{ margin: "30px auto", alignItems: "center" }}
          current={2}
        >
          <Step
            title="Finished"
            description="completed my 10th and 12th from M.G.M Sen Sec School, Bhilai."
          />
          <Step
            title="In progress"
            description="Learning MERN Stack and Data Structures."
          />
          <Step
            title="Waiting"
            description="Waiting for my graduation Results"
          />
        </Steps>
      </div>
    </>
  );
};

export default AboutComp;
