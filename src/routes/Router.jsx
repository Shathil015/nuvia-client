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
import AddArtWork from "../components/AddArtWork";
import ErrorPage from "../components/ErrorPage";

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
          fetch(
            `https://nuvia-brand-server.onrender.com/products/${params.id}`
          ),
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
    element: (
      <PrivateRoute>
        <AddArtWork></AddArtWork>
      </PrivateRoute>
    ),
  },
  {
    path: "/gallery",
    element: (
      <PrivateRoute>
        <MyGallery></MyGallery>
      </PrivateRoute>
    ),
  },
  {
    path: "/favorites",
    element: <h2>My favorite collection is hare</h2>,
  },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
