import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    icon: <FaHome />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <FaTasks />,
    label: "Tasks",
    path: "/tasks",
  },
  {
    icon: <FaCalendarAlt />,
    label: "Calendar",
    path: "/calendar",
  },
  {
    icon: <FaChartPie />,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: <FaCog />,
    label: "Settings",
    path: "/settings",
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <aside
        className={`
          fixed
          lg:static
          top-0
          left-0
          z-50
          h-screen
          w-72
          bg-gradient-to-b
          from-pink-100
          via-pink-50
          to-blue-100
          shadow-xl
          flex
          flex-col
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="p-6 border-b border-pink-200">
          <h1 className="text-3xl font-bold text-pink-600">
            🌸 TaskFlow
          </h1>
        </div>

        <div className="flex flex-col items-center py-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-pink-300"
          />

          <h2 className="mt-3 font-bold text-lg">
            Mahathi
          </h2>

          <p className="text-gray-500 text-sm">
            Full Stack Developer
          </p>
        </div>

        <nav className="flex-1 px-4">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-2xl mb-3 transition-all duration-300 ${
                  isActive
                    ? "bg-pink-500 text-white shadow-lg"
                    : "hover:bg-white hover:shadow-md"
                }`
              }
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.label}
              </span>

            </NavLink>

          ))}

        </nav>

        <div className="p-4 text-center text-sm text-gray-500">
          Version 1.0 🚀
        </div>

      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
        />
      )}
    </>
  );
}

export default Sidebar;