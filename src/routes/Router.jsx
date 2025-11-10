import { createBrowserRouter } from "react-router";
import HomeLayout from "../ layout/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/artworks",
    element: <h2>Explore Artworks</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default Router;
