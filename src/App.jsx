import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Testing = lazy(() => import("./components/Testing"));

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
