import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <>
      <div className="h-screen w-screen bg-background1 overflow-y-auto">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
