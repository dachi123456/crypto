import { Outlet, RouteObject } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import CryproInfo from "../pages/CryproInfo";
import ChartPage from "../pages/ChartPage";
import LandingPage from "../pages/LandingPage";
import DetailsPage from "../pages/DetailsPage";

const router: RouteObject[] = [
  {
    element: (
     
        <div>
          <HeaderComponent />
          <Outlet />
        </div>
     
    ),
    path: "/",
    children: [
      {
        element: <LandingPage />,
        index: true,
      },
      {
        element: <CryproInfo />,
        path: "/info",
      },
      {
        element: <ChartPage />,
        path: "/chart",
      },
      {
        element: <DetailsPage />,
        path: '/:id'
      },
      {
        element: <LandingPage />,
        path: "*",
      },
    ],
  },
];

export default router;
