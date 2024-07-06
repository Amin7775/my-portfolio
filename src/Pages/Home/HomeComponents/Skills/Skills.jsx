// import CommonDiv from "../../../../Components/CommonDiv/CommonDiv";
import CommonHeading from "../../../../Components/CommonHeading/CommonHeading";
import SkillsDiv from "./SkillsDiv";
import htmlImage from "./../../../../assets/images/html.png";
import Css from "./../../../../assets/images/css.png";
import tailwind from "./../../../../assets/images/tailwind.png";
// import Daisy from "./../../../../assets/images/daisyui-logotype.png";
import js from "./../../../../assets/images/javascript.png";
import react from "./../../../../assets/images/react.png";
import firebase from "./../../../../assets/images/firebase.png";
import express from "./../../../../assets/images/express.png";
import mongodb from "./../../../../assets/images/mongodb.png";
// import daisyui from "daisyui";

const Skills = () => {
  return (
    <div>
      <CommonHeading heading={"My Skills"}></CommonHeading>

      {/* container */}
      <div className="flex justify-center gap-5 md:gap-6 flex-wrap items-center mt-14">
        <SkillsDiv>
          <div className="px-1.5">
            <img className="h-24 w-full object-cover" src={htmlImage} alt="" />
          </div>
          <p className="mt-0.5">HTML</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={Css} alt="" />
          <p>Css</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-24 object-contain" src={tailwind} alt="" />
          <p>Tailwind</p>
        </SkillsDiv>
        {/* <SkillsDiv>
          <img className="h-24 w-full object-cover" src={Daisy} alt="" />
          <p>Daisy Ui</p>
        </SkillsDiv> */}
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={js} alt="" />
          <p>JavaScript</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={react} alt="" />
          <p>React</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={firebase} alt="" />
          <p>Firebase</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={express} alt="" />
          <p>Express</p>
        </SkillsDiv>
        <SkillsDiv>
          <img className="h-24 w-full object-cover" src={mongodb} alt="" />
          <p>MongoDB</p>
        </SkillsDiv>
      </div>
    </div>
  );
};

export default Skills;
