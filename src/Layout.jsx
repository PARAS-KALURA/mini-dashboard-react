import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const userName = "Paras Kalura";

  return (
    <div className="flex min-h-screen">
      <Sidebar userName={userName} />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
