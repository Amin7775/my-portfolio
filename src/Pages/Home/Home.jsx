import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="relative">
      {/* navbar */}
      <div className="fixed container top-0">
        <Navbar></Navbar>
      </div>
      <div className="px-1 pt-28">
        {/* introduction */}
        <div id="homeMain" className="min-h-screen">
          <h1 className="text-3xl font-bold">This is introduction</h1>
        </div>
        <div id="skills" className="min-h-screen pt-5">
          <h1 className="text-3xl font-bold">This is Skills</h1>
        </div>
        <div id="projects" className="min-h-screen">
          <h1 className="text-3xl font-bold">This is Projects</h1>
        </div>
        <div id="education" className="min-h-screen">
          <h1 className="text-3xl font-bold">This is Education</h1>
        </div>
        <div id="contact" className="min-h-screen">
          <h1 className="text-3xl font-bold">This is contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
