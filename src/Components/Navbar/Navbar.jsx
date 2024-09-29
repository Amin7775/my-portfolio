import { FaCode } from "react-icons/fa6";
import { PiDownloadSimple } from "react-icons/pi";
// import { NavLink } from "react-router-dom";
import resume from "./../../assets/Resume/AL_Amin_Resume_Front_End_Web_Developer_14_July_2024.pdf";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const navlinks = (
    <>
      <li className="nav-item">
        <Link
          to="homeMain"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="skills" spy={true} smooth={true} offset={-120} duration={500}>
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Experience
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Education
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-full">
      <div className="navbar text-off-white border-b-2 border-b-theme-secondary drop-shadow-md  mx-auto mb-5 bg-theme-bg py-5 md:py-3 px-5 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              id="sidebar"
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-theme-accent border-2 border-theme-primary text-gray-300 rounded-box z-[1] mt-3 w-52 p-3 shadow "
            >
              {navlinks}
            </ul>
          </div>
          <div className="btn btn-ghost text-2xl py-1 h-auto flex items-center">
            <FaCode className="text-lg md:text-6xl hidden md:flex"></FaCode>
            <h1 className="font-normal">AL Amin</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="sidebar" className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href={resume}
            download={"AL_Amin_Resume_Front_End_Web_Developer_14_July_2024.pdf"}
            className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-5 md:px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out transform hover:scale-105 flex"
          >
            Resume
            <PiDownloadSimple className="text-xl"></PiDownloadSimple>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
