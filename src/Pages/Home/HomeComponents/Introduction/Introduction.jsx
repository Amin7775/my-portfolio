// import CountUp from "react-countup/build/CountUp";
import { MdOutlineArrowOutward } from "react-icons/md";
// import { PiDownloadSimple } from "react-icons/pi";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import CountUp from "react-countup";

const Introduction = () => {
  return (
    <div>
      {/* banner */}
      <div className="bg-theme-accent border-2 border-theme-secondary px-6 py-7 md:px-8 md:py-10 lg:p-10 rounded-lg flex flex-col lg:flex-row gap-5 md:gap-9 lg:gap-12 items-center">
        {/* image */}
        <div>
          <img
            className="h-80 w-full object-cover rounded-lg"
            src="https://i.ibb.co/kJ4v3Jk/IMG-20221029-WA0014-1.jpg"
            // src="https://i.ibb.co/KFtQx0d/2.jpg"
            alt=""
          />
        </div>
        {/* text */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl lg:text-6xl bg-gradient-to-r from-theme-primary to-off-white bg-clip-text text-transparent 2xl:max-w-[70%] text-wrap font-medium md:text-center lg:text-start">
            Hi, I am AL Amin - Web Developer
          </h1>
          <p className="text-lg lg:text-xl mt-2 md:mt-5 lg:mt-5 2xl:max-w-[60%] text-gray-300 font-light md:text-center lg:text-start">
            I create websites that are easy to use and look great on any device.
            I love what I do. Just simple like that!
          </p>
          <div className="mt-4 md:mt-6 lg:mt-5 flex items-center gap-4 justify-center lg:justify-normal">
            <a
              href="#contact"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact me!
              <MdOutlineArrowOutward className="text-xl"></MdOutlineArrowOutward>
            </a>
            <a
              href="https://www.linkedin.com/in/amin24/"
              className="p-2.5 bg-transparent border border-theme-primary text-theme-primary rounded-full hover:bg-theme-primary hover:border-theme-primary hover:text-off-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <RiLinkedinFill className="text-base"></RiLinkedinFill>
            </a>
            <a
              href="https://github.com/Amin7775"
              className="p-2 bg-transparent border border-theme-primary text-theme-primary rounded-full hover:bg-theme-primary hover:border-theme-primary hover:text-off-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <RiGithubLine className="text-lg"></RiGithubLine>
            </a>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="bg-theme-accent border-2 border-theme-secondary px-6 py-7 md:px-8 md:py-10 lg:p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center gap-5 md:gap-0 md:gap-y-5 lg:gap-0">
        {/* experience */}
        <div className="">
          <h1 className="text-2xl md:text-4xl text-off-white font-semibold">
            <CountUp start={0} end={1} duration={4.5} />+
          </h1>
          <p className="mt-1 md:text-lg">Years of experience</p>
        </div>
        {/* Projects */}
        <div>
          <h1 className="text-2xl md:text-4xl text-off-white font-semibold">
            <CountUp start={15} end={30} duration={4.5} />+
          </h1>
          <p className="mt-1 md:text-lg">Projects completed</p>
        </div>
        {/* technologies */}
        <div>
          <h1 className="text-2xl md:text-4xl text-off-white font-semibold">
            <CountUp start={0} end={10} duration={4.5} />+
          </h1>
          <p className="mt-1 md:text-lg">Technologies mastered</p>
        </div>
        {/* commits */}
        <div>
          <h1 className="text-2xl md:text-4xl text-off-white font-semibold">
            <CountUp start={1500} end={1600} duration={4.5} />+
          </h1>
          <p className="mt-1 md:text-lg">Github commits</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
