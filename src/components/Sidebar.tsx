import {
  ArrowLeftRight,
  BadgeDollarSign,
  ChartPie,
  House,
  NotebookText,
} from "lucide-react";
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
    path: "/budget",
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
      className={`bg-gray-900 text-gray-300 sticky top-0 flex flex-col rounded-r-2xl pb-6 transition-all duration-200 h-[100vh] ${
        showNavbar ? " w-[300px]" : " w-[88px]"
      }`}
    >
      <Link to="/" className="py-10 mb-5 mx-auto grow-0">
        <img
          src={
            showNavbar ? "../images/logo-large.svg" : "../images/logo-small.svg"
          }
          alt="site logo"
        />
      </Link>
      <ul className="flex flex-col gap-1 grow pr-2">
        {pages.map((page) => {
          const isActive = location.pathname === page.path;

          return (
            <li key={page.name} className="">
              <Link
                to={page.path}
                className={`flex items-center gap-4 rounded-r-xl transition-all duration-200 border-l-[4px] ${
                  showNavbar ? "px-8 py-4" : "px-0 py-4 pl-8"
                } ${
                  isActive
                    ? "bg-white text-[#277C78] border-[#277c78]"
                    : "border-transparent"
                }`}
              >
                {page.icon}
                {showNavbar && (
                  <span
                    className={`font-bold ${
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
  );
}

export default Sidebar;
