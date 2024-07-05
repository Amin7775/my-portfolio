
const CommonDiv = ({children}) => {
    return (
        <div className="bg-theme-accent border-2 border-theme-secondary px-6 py-7 md:px-8 md:py-10 lg:p-10 rounded-lg">
            {children}
        </div>
    );
};

export default CommonDiv;