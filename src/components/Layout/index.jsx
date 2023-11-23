import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useEffect } from "react";

function Layout() {
  /* useEffect(() => {
    const body = document.querySelector("body");
    function glow(e) {
      body.style.background = `radial-gradient(circle at ${e.pageX}px ${e.pageY}px, rgb(15, 58, 103) 10px, rgb(2, 34, 69) 300px)`;
    }

    document.addEventListener("mousemove", glow);

    return () => document.removeEventListener("mousemove", glow);
  }, []); */

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
