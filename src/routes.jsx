import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
  { path: "*", element: <ErrorPage /> }, // Catch-all route for errors
]);

export default routes;
