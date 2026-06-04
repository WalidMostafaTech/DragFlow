import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Stores = React.lazy(() => import("../pages/Stores/Stores"));
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = React.lazy(
  () => import("../pages/BlogDetails/BlogDetails"),
);

const Terms = React.lazy(() => import("../pages/Terms/Terms"));
const Policy = React.lazy(() => import("../pages/Policy/Policy"));

const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ar" replace />,
  },
  {
    path: "/:lang",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "stores", element: <Stores /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetails /> },

      { path: "terms", element: <Terms /> },
      { path: "policy", element: <Policy /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
