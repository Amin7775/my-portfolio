import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-custom-text-Sora min-h-screen bg-theme-bg ">
      <div className="text-off-white container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
