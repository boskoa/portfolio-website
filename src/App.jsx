import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "test",
          element: <div>BAI</div>,
        },
        {
          path: "test2",
          element: <div>MARK</div>,
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
