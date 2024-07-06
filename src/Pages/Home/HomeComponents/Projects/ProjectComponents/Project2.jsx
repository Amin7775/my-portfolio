import { MdOutlineArrowOutward } from "react-icons/md";
import CommonDiv from "../../../../../Components/CommonDiv/CommonDiv";
import tekup from "./../../../../../assets/projects/Tekup-Home.png";

const Project2 = () => {
  return (
    <CommonDiv>
      {/* project 1 container */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
        {/* content */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-semibold ">TEKUP</h1>
          <h3 className="text-off-white md:text-lg font-medium">
            Employee Management System
          </h3>
          <p className=" text-gray-300">
            Tekup is an employee management system designed for a company to
            monitor employee workload, manage salaries, and maintain records of
            contracts and workflow updates. The system includes distinct
            functionalities for employees, HR executives, and administrators,
            facilitating efficient management and transparent operations.
          </p>
          <h1 className="md:text-lg font-medium ">Technologies used:</h1>
          <p className="text-gray-300 ">
            React JS, Tailwind Css, Daisy UI, Firebase, Express js, MongoDB,
            JWT,Tanstack Query
          </p>
          <h3 className="md:text-lg font-medium hidden lg:block">
            Key Features:
          </h3>
          <ul className="text-gray-300 space-y-2 hidden lg:block">
            <li>
              - <span className="font-medium">Role-Based Access:</span> Distinct
              roles for Employees, HR, and Admins with secure email/password and
              Google login.
            </li>
            <li>
              - <span className="font-medium">Payment Integration:</span> Stripe
              integration for salary processing.
            </li>
            <li>
              - <span className="font-medium">Responsive Design:</span>{" "}
              Optimized for mobile, tablet, and desktop.
            </li>
          </ul>
          {/* btns */}
          <div className="mt-3 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://tekup-a12.web.app/"
              className="btn bg-theme-primary text-off-white border-0 px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              View Website
              <MdOutlineArrowOutward className="text-xl"></MdOutlineArrowOutward>
            </a>
            <a
              href="https://github.com/Amin7775/Tekup-Employee-Management-client-side"
              className="btn bg-theme-primary text-off-white border-0 px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Client code
            </a>
            <a
              href="https://github.com/Amin7775/Tekup-Employee-Management-server-side"
              className="btn bg-theme-primary text-off-white border-0 px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Server code
            </a>
          </div>
        </div>
        {/* image */}
        <div className="bg-[#11171C] p-3 md:p-6 rounded-lg">
          <img
            className="w-full md:h-[500px] object-contain object-top rounded-lg"
            src={tekup}
            alt=""
          />
        </div>
      </div>
    </CommonDiv>
  );
};

export default Project2;
