import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Contact from "./HomeComponents/Contact/Contact";
import Education from "./HomeComponents/Education/Education";
import Experience from "./HomeComponents/Experience/Experience";
import Introduction from "./HomeComponents/Introduction/Introduction";
import Projects from "./HomeComponents/Projects/Projects";
import Skills from "./HomeComponents/Skills/Skills";

const Home = () => {
  return (
    <div className="relative">
      {/* navbar */}
      <div className="fixed top-0 z-10 w-full mx-auto">
        <div className="container mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      {/* main section */}
      <div className="px-5 md:px-8 lg:px-4 2xl:px-1 pt-32 pb-14 flex flex-col gap-14 container mx-auto">
        {/* introduction */}
        <div id="homeMain" className="">
          <Introduction></Introduction>
        </div>
        {/* skills */}
        <div id="skills" className="lg:mt-2">
          <Skills></Skills>
        </div>
        {/* projects */}
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="experience">
          <Experience></Experience>
        </div>
        <div id="education">
          <Education></Education>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
