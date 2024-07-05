const CommonHeading = ({ heading }) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-theme-primary to-off-white bg-clip-text text-transparent 2xl:max-w-[70%] text-wrap font-semibold md:text-center lg:text-start inline-block">
        {heading}
      </h1>
    </div>
  );
};

export default CommonHeading;
