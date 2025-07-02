import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

function Mainlayout() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div className="flex">
      <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main className="container grow mb-20 lg:mb-0 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
