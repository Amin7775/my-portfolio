import CommonHeading from "../../../../Components/CommonHeading/CommonHeading";
import CommonDiv from "../../../../Components/CommonDiv/CommonDiv";

const Education = () => {
  return (
    <div>
      <CommonHeading heading={"Education"}></CommonHeading>
      <div className="mt-12">
        <CommonDiv>
          <div className="flex items-center justify-center">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
                  <time className="text-gray-300">2018-2020</time>
                  <div className="text-lg md:text-xl  font-medium mt-1">
                    HSC (Commerce)
                  </div>
                  <div className="text-base text-gray-300 mt-2">
                    <p>Government Bangla College</p>
                    <p>Mirpur, Dhaka</p>
                  </div>
                </div>
                <hr className="bg-theme-primary" />
              </li>
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
                <div className="timeline-end mb-10 mt-5 md:mt-0 ml-2">
                  <time className="text-gray-300">2020-2024</time>
                  <div className="text-lg md:text-xl font-medium mt-1">
                    Diploma in Computer Technology
                  </div>
                  <div className="text-base text-gray-300 mt-2">
                    <p>Daffodil Polytechnic Institute</p>
                    <p>Dhanmondi, Dhaka</p>
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

export default Education;
