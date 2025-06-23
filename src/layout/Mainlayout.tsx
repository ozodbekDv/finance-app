import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "@/components/Sidebar";

function Mainlayout() {
  // const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="container">
      {/* <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
