import { MdOutlineArrowOutward } from "react-icons/md";
import CommonDiv from "../../../../Components/CommonDiv/CommonDiv";
import CommonHeading from "../../../../Components/CommonHeading/CommonHeading";

import Project1 from "./ProjectComponents/Project1";
import Project2 from "./ProjectComponents/Project2";
import Project3 from "./ProjectComponents/Project3";
import Project4 from "./ProjectComponents/Project4";

const Projects = () => {
  return (
    <div>
      <CommonHeading heading={"Recent Projects"}></CommonHeading>
      {/* Projects Container*/}
      <div className="mt-14 grid grid-cols-1 gap-10">
        {/* project 4 */}
        <Project4></Project4>
        {/* project 1 */}
        <Project1></Project1>
        {/* project 2 */}
        <Project2></Project2>
        {/* Project 3 */}
        {/* <Project3></Project3> */}
      </div>
    </div>
  );
};

export default Projects;
