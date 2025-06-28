import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

function Mainlayout() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="flex gap-10">
      <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main className="container grow">
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
