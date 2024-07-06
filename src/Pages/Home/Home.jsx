import Navbar from "../../Components/Navbar/Navbar";
import Introduction from "./HomeComponents/Introduction/Introduction";
import Projects from "./HomeComponents/Projects/Projects";
import Skills from "./HomeComponents/Skills/Skills";

const Home = () => {
  return (
    <div className="relative">
      {/* navbar */}
      <div className="fixed container top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="px-5 md:px-8 lg:px-4 2xl:px-1 pt-32 flex flex-col gap-14">
        {/* introduction */}
        <div id="homeMain" className="">
          <Introduction></Introduction>
        </div>
        <div id="skills" className="mt-2">
          {/* <h1 className="text-3xl font-bold">This is Skills</h1> */}
          <Skills></Skills>
        </div>
        <div id="projects" className="min-h-screen">
          {/* <h1 className="text-3xl font-bold">This is Projects</h1> */}
          <Projects></Projects>
        </div>
        <div id="education" className="min-h-screen">
          <h1 className="text-3xl font-bold">This is Education</h1>
        </div>
        <div id="contact" className="min-h-screen">
          <div className="h-28 bg-transparent"></div>
          <h1 className="text-3xl font-bold">This is contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
