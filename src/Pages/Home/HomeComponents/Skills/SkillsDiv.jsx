// import React from "react";

const SkillsDiv = ({ children }) => {
  return (
    <div className="bg-theme-bg border-2 border-theme-secondary rounded-lg flex flex-col items-center justify-center px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5 gap-2 hover:bg-theme-secondary hover:border-theme-primary transition-all duration-500 ease-in-out hover:cursor-pointer">
      {children}
    </div>
  );
};

export default SkillsDiv;
