import CommonDiv from "../../../../Components/CommonDiv/CommonDiv";
import CommonHeading from "../../../../Components/CommonHeading/CommonHeading";

const Experience = () => {
  return (
    <div>
      <CommonHeading heading={"Work Experience"}></CommonHeading>
      <div className="mt-12">
        <CommonDiv>
          <div className="flex items-center justify-center">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {/* intern scopioe */}
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#8750f7"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end mr-2">
                  <time className="text-gray-300">Aug 2024 – Jan 2025</time>
                  <div className="text-lg md:text-xl  font-medium mt-1">
                    Frontend Web Developer Intern
                  </div>
                  <div className="text-base text-gray-300 mt-2">
                    <p>Scopioe</p>
                    <p>Joining Date: 8th August 2024 </p>
                  </div>
                </div>
                <hr className="bg-theme-primary" />
              </li>
              {/* junior - scopioe */}
              <li>
                <hr className="bg-theme-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#8750f7"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 mt-5 md:mt-0 ml-2 pt-1.5">
                  <time className="text-gray-300 mt-2">Jan 2025 – Present</time>
                  <div className="text-lg md:text-xl  font-medium mt-1">
                    Junior Frontend Web Developer 
                  </div>
                  <div className="text-base text-gray-300 mt-2">
                    <p>Scopioe</p>
                    <p>Promoted after 5 months of internship</p>
                  </div>
                </div>
                <hr className="bg-theme-primary" />
              </li>
            </ul>
          </div>
        </CommonDiv>
      </div>
    </div>
  );
};

export default Experience;
