import { Link, useLocation } from "react-router-dom";
import style from "./Sidebar.module.scss";

const pages = [
  {
    name: "Overview",
    path: "/",
    icon2: "../images/icon-overview.svg",
    icon: "../images/icon-nav-overview.svg",
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon2: "../images/icon-transactions.svg",
    icon: "../images/icon-nav-transactions.svg",
  },
  {
    name: "Budgets",
    path: "/budget",
    icon2: "../images/icon-budgets.svg",
    icon: "../images/icon-nav-budgets.svg",
  },
  {
    name: "Pots",
    path: "/pots",
    icon2: "../images/icon-pots.svg",
    icon: "../images/icon-nav-pots.svg",
  },
  {
    name: "Recurring Bills",
    path: "/recurringBills",
    icon2: "../images/icon-recurring-bills.svg",
    icon: "../images/icon-nav-recurring-bills.svg",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className={style.sidebar}>
      <Link to="/" className={style["sidebar-top"]}>
        <img src="../images/logo-large.svg" alt="site logo" />
      </Link>
      <ul>
        {pages.map((page) => {
          const isActive = location.pathname === page.path;
          const linkClass = `${style["sidebar-link"]} ${
            isActive ? style["active-link"] : ""
          }`;
          const linkIcon = isActive ? page.icon : page.icon;

          return (
            <li key={page.name}>
              <Link to={page.path} className={linkClass}>
                <img src={page.icon} alt={`${page.name} icon`} />
                <span>{page.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
