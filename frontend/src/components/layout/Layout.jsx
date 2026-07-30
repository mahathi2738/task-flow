import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1">

        <Navbar
          toggleSidebar={() =>
            setSidebarOpen((prev) => !prev)
          }
        />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Layout;