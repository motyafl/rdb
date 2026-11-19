import { Outlet } from "react-router";
import Navbar from "./components/Navbar.tsx"

function Layout() {
  return (
    <>
      <main>
        <Navbar/>
        <Outlet />
      </main>
    </>
  );
}

export default Layout
