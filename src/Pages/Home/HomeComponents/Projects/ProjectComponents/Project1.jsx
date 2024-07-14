import { MdOutlineArrowOutward } from "react-icons/md";
import CommonDiv from "../../../../../Components/CommonDiv/CommonDiv";
import Discy from "./../../../../../assets/projects/Discy1.png";

const Project1 = () => {
  return (
    <CommonDiv>
      {/* project 1 container */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
        {/* content */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-semibold ">DISCY</h1>
          <h3 className="text-off-white md:text-lg font-medium">
            Alternative Product management System
          </h3>
          <p className=" text-gray-300">
          “Discy” is an Alternative Product Information System. It is an interactive web platform that enables users to explore and share alternative product options, fostering a community-driven approach to buying new products.
          </p>
          <h1 className="md:text-lg font-medium ">Technologies used:</h1>
          <p className="text-gray-300 ">
            React JS, Tailwind Css, Daisy UI, Firebase, Express js, MongoDB, JWT
          </p>
          <h3 className="md:text-lg font-medium hidden lg:block">
            Key Features:
          </h3>
          <ul className="text-gray-300 space-y-2 hidden lg:block">
            <li>
              -	Enables user interaction through comments, updates, and feedback on queries.
            </li>
            <li>
              -	Finds suitable product alternatives through user-posted queries and experiences.
            </li>
            <li>
              - Allows users to customize their experience with dark and light themes.
            </li>
          </ul>
          {/* btns */}
          <div className="mt-3 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://discy-b9-a11.web.app/"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              View Website
              <MdOutlineArrowOutward className="text-xl"></MdOutlineArrowOutward>
            </a>
            <a
              href="https://github.com/Amin7775/Discy-Alternative-Product-Information-System-with-react-express-client"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Client code
            </a>
            <a
              href="https://github.com/Amin7775/Discy-Alternative-Product-Information-System-with-react-express-server"
              className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Server code
            </a>
          </div>
        </div>
        {/* image */}
        <div className="bg-[#11171C] p-3 md:p-6 border-2 border-theme-secondary rounded-lg hover:border-2 hover:border-theme-primary transition-all ease-in-out duration-500">
          <a href="https://discy-b9-a11.web.app/">
            <img
              className="w-full md:h-[500px] object-contain object-top rounded-lg"
              src={Discy}
              alt=""
            />
          </a>
        </div>
      </div>
    </CommonDiv>
  );
};

export default Project1;
