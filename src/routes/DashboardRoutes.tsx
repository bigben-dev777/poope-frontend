import Dashboard from "@/pages/Dashboard";
import Notification from "@/pages/Notification";
import Setting from "@/pages/Setting";
import Transaction from "@/pages/Transactions";
import Support from "@/views/dashboard/support";

const DashboardRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/support",
    element: <Support />,
  },
];

export default DashboardRoutes;
