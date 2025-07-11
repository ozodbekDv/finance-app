import {
  ArrowLeftRight,
  BadgeDollarSign,
  ChartPie,
  House,
  NotebookText,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const pages = [
  {
    name: "Overview",
    path: "/",
    icon2: "../images/icon-overview.svg",
    icon: <House />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon2: "../images/icon-transactions.svg",
    icon: <ArrowLeftRight />,
  },
  {
    name: "Budgets",
    path: "/budgets",
    icon2: "../images/icon-budgets.svg",
    icon: <ChartPie />,
  },
  {
    name: "Pots",
    path: "/pots",
    icon2: "../images/icon-pots.svg",
    icon: <BadgeDollarSign />,
  },
  {
    name: "Recurring Bills",
    path: "/recurringBills",
    icon2: "../images/icon-recurring-bills.svg",
    icon: <NotebookText />,
  },
];

type ChildProps = {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ showNavbar, setShowNavbar }: ChildProps) {
  const location = useLocation();

  return (
    <div
      className={`lg:flex-col lg:flex fixed lg:sticky lg:top-0 bottom-0 left-0 right-0 bg-gray-900 z-20 lg:h-[100vh] lg:transition-all lg:duration-200 lg:rounded-r-2xl lg:pb-6 ${
        showNavbar ? " lg:w-[300px]" : " lg:w-[88px]"
      }`}
    >
      <Link to="/" className="py-10 mb-5 mx-auto grow-0 hidden lg:block">
        <img
          src={
            showNavbar ? "../images/logo-large.svg" : "../images/logo-small.svg"
          }
          alt="site logo"
        />
      </Link>
      <ul className="flex flex-row lg:flex-col justify-between lg:justify-start  gap-1 grow pr-2">
        {pages.map((page) => {
          const isActive = location.pathname === page.path;

          return (
            <li key={page.name} className="">
              <Link
                to={page.path}
                className={`flex flex-col lg:flex-row  items-center gap-0 lg:gap-4 rounded-t-[8px] mt-2 lg:rounded-r-[8px] lg:rounded-t-none transition-all duration-200 lg:border-l-[4px] border-b-[4px] lg:border-b-0 ${
                  showNavbar ? "px-8 py-4" : "lg:px-0 lg:py-4 lg:pl-8 px-5 py-3"
                } ${
                  isActive
                    ? "bg-white text-[#277C78] border-[#277c78]"
                    : "border-transparent text-gray-300 "
                }`}
              >
                {page.icon}
                {showNavbar && (
                  <span
                    className={`font-bold lg:block hidden ${
                      isActive ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    {page.name}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:flex text-gray-500 font-bold">
        {showNavbar ? (
          <button
            className="grow-0 flex gap-4 px-4"
            onClick={() => setShowNavbar(false)}
          >
            <img src="../images/icon-minimize-menu.svg" alt="" />
            <span> Minimize Menu</span>
          </button>
        ) : (
          <button
            className="grow-0 flex gap-4 px-6"
            onClick={() => setShowNavbar(true)}
          >
            <img src="../images/icon-max-menu.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
