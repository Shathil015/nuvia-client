import { createBrowserRouter } from "react-router";
import HomeLayout from "../ layout/HomeLayout";
import ArtDetails from "../pages/ArtDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../ layout/AuthLayout";
import ArtWorks from "../pages/ArtWorks";
import PrivateRoute from "../Provider/PrivateRoute";
import MyGallery from "../pages/MyGallery";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/artDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <ArtDetails></ArtDetails>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/artworks",
    element: <ArtWorks></ArtWorks>,
  },
  {
    path: "/addArtwork",
    element: <h2>Your Artworks add hare</h2>,
  },
  {
    path: "/gallery",
    element: <MyGallery></MyGallery>,
  },
  {
    path: "/favorites",
    element: <h2>My favorite collection is hare</h2>,
  },

  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default Router;
