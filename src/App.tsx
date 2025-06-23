import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import {
  Budget,
  Login,
  Overview,
  RecurringBills,
  Register,
  Transactions,
} from "./pages";

import { useSelector } from "react-redux";
import type { RootState } from "./app/store";

// import { useDispatch } from "react-redux";
import Mainlayout from "./layout/Mainlayout";
import Pots from "./pages/Pots";

function App() {
  const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <Mainlayout /> : <Navigate to="/login" />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/pots",
          element: <Pots />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/budget",
          element: <Budget />,
        },
        {
          path: "/recurringBills",
          element: <RecurringBills />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
export default App;
