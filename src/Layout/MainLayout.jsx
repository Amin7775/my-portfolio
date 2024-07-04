import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-custom-text-Sora">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;