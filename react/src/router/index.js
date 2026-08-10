import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SpotifySignup from "../pages/SpotifySignup";
import SpotifyLogin from "../pages/SpotifyLogin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/signup",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: SpotifySignup,
      },
    ],
  },
  {
    path: "/login",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: SpotifyLogin,
      },
    ],
  },
]);

export default router;
