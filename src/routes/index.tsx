import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import LandingLayout from "@/layouts/LandingLayout";
import NotFoundPage from "@/pages/404";

import SwapLayout from "@/layouts/SwapLayout";
import DashboardRoutes from "./DashboardRoutes";
import LandingRoutes from "./LandingRoutes";
import SwapRoutes from "./SwapRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <NotFoundPage />,
    children: LandingRoutes,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: DashboardRoutes,
  },
  {
    path: "/",
    element: <SwapLayout />,
    errorElement: <NotFoundPage />,
    children: SwapRoutes,
  },
]);
