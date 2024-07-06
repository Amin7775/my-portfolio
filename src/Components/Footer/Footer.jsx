import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-theme-secondary text-off-white rounded p-10">
      <nav>
        <FaCode className="text-6xl lg:text-7xl"></FaCode>
      </nav>
      <nav className="flex flex-wrap justify-center gap-3 md:gap-5 md:text-base font-medium">
        <a href="#homeMain" className="link link-hover">
          About
        </a>
        <a href="#skills" className="link link-hover">
          Skills
        </a>
        <a href="#projects" className="link link-hover">
          Projects
        </a>
        <a href="#education" className="link link-hover">
          Education
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by AL Amin
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
