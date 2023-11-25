import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Testing = lazy(() => import("./components/Testing"));
const ProjectsBoard = lazy(() => import("./components/Testing/ProjectsBoard"));
const ConsoleStyle = lazy(() => import("./components/Testing/ConsoleStyle"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: (
            <Suspense>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "testing",
          element: (
            <Suspense>
              <Testing />
            </Suspense>
          ),
        },
        {
          path: "projects",
          element: (
            <Suspense>
              <ProjectsBoard />
            </Suspense>
          ),
        },
        {
          path: "console",
          element: (
            <Suspense>
              <ConsoleStyle />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
