import { MdOutlineArrowOutward } from "react-icons/md";
import CommonDiv from "../../../../../Components/CommonDiv/CommonDiv";
import futureImg from "./../../../../../assets/projects/Future.png";

const Project4 = () => {
  return (
    <CommonDiv>
      {/* project 3 container */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
        {/* content */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-semibold ">FUTURE</h1>
          <h3 className="text-off-white md:text-lg font-medium">
            Branding Agency Website
          </h3>
          <p className=" text-gray-300">
            “Future” is a visually rich branding agency website built during my
            role at Scopie. It showcases the agency’s journey, services, blogs
            and future vision through elegant design, smooth animations, and
            multilingual support.
          </p>
          <h1 className="md:text-lg font-medium ">Technologies used:</h1>
          <p className="text-gray-300 ">
            React.js, Tailwind CSS, Framer Motion, Swiper.js, React-i18next
          </p>
          <h3 className="md:text-lg font-medium hidden lg:block">
            Key Features:
          </h3>
          <ul className="text-gray-300 space-y-2 hidden lg:block">
            <li>
              - Integrated multilingual support (English & Spanish) using
              react-i18next for different user preferences.
            </li>
            <li>- Implemented smooth animations with Framer Motion.</li>
            <li>- Developed the homepage and services page from scratch.</li>
          </ul>
          {/* btns */}
          <div className="mt-3 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://future-v1.netlify.app/"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
              target="_blank"
            >
              View Website
              <MdOutlineArrowOutward className="text-xl"></MdOutlineArrowOutward>
            </a>
            {/* <a
              href="https://github.com/Amin7775/House-Master-client-side"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Client code
            </a> */}
            {/* <a
              href="https://github.com/Amin7775/House-Master-server-side"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Server code
            </a> */}
          </div>
        </div>
        {/* image */}
        <div className="bg-[#11171C] p-3 md:p-6 border-2 border-theme-secondary rounded-lg hover:border-2 hover:border-theme-primary transition-all ease-in-out duration-500">
          <a href="https://future-v1.netlify.app/" target="_blank">
            <img
              className="w-full md:h-[500px] object-contain object-top rounded-lg"
              src={futureImg}
              alt=""
            />
          </a>
        </div>
      </div>
    </CommonDiv>
  );
};

export default Project4;
