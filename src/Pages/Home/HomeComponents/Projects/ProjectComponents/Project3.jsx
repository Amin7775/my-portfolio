import { MdOutlineArrowOutward } from "react-icons/md";
import CommonDiv from "../../../../../Components/CommonDiv/CommonDiv";
import houseMaster from "./../../../../../assets/projects/House master.png";

const Project3 = () => {
  return (
    <CommonDiv>
      {/* project 3 container */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
        {/* content */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-semibold ">HOUSE MASTER</h1>
          <h3 className="text-off-white md:text-lg font-medium">
            Home Service Exchange System
          </h3>
          <p className=" text-gray-300">
            House Master is a home service exchange system where users can
            register to offer and book services. Providers manage their services
            and bookings, while seekers browse, book, and track their services.
            Users can switch roles, fostering a collaborative community.
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
              - <span className="font-medium">Search Bar:</span> Search services on the "Service" page with dynamic results.
            </li>
            <li>
              - <span className="font-medium">Notifications:</span> Alerts for user actions and errors. Service providers get confirmations for service changes.
            </li>
            <li>
              - <span className="font-medium">Dynamic Schedules:</span>{" "}
              Users can view and track their bookings and progress on "My Schedules". providers can update statuses, shared with users.
            </li>
          </ul>
          {/* btns */}
          <div className="mt-3 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://house-master-eba63.web.app/"
              className="btn bg-theme-primary text-off-white border-0 px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              View Website
              <MdOutlineArrowOutward className="text-xl"></MdOutlineArrowOutward>
            </a>
            <a
              href="https://github.com/Amin7775/House-Master-client-side"
              className="btn bg-theme-primary text-off-white border-0 px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out "
            >
              Client code
            </a>
            <a
              href="https://github.com/Amin7775/House-Master-server-side"
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
            src={houseMaster}
            alt=""
          />
        </div>
      </div>
    </CommonDiv>
  );
};

export default Project3;