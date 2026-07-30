import { motion } from "framer-motion";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

function Navbar({ toggleSidebar }) {
  const { darkMode, toggleTheme } = useTheme();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    "🎉 Welcome back!",
    "📅 You have tasks due today.",
    "🔥 Keep your productivity streak alive!",
  ];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-slate-900/70 border-b border-white/20 px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      {/* Left */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white text-xl"
        >
          <FaBars />
        </button>

        <div className="flex items-center bg-white/20 dark:bg-gray-800 rounded-xl px-4 py-2 w-full md:w-[420px]">
          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent outline-none w-full text-black dark:text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end gap-5">

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="text-2xl"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative text-2xl text-white hover:text-pink-400"
          >
            <FaBell />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 font-bold border-b dark:border-gray-700 dark:text-white">
                Notifications
              </div>

              {notifications.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
            onClick={() => setShowProfile(!showProfile)}
            className="w-11 h-11 rounded-full border-2 border-pink-500 cursor-pointer hover:scale-110 transition"
          />

          {showProfile && (
            <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">

              <div className="p-4 border-b dark:border-gray-700">
                <h3 className="font-bold dark:text-white">
                  Welcome 👋
                </h3>

                <p className="text-sm text-gray-500">
                  Task Manager User
                </p>
              </div>

              <button
                className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                👤 My Profile
              </button>

              <button
                className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                ⚙️ Settings
              </button>

              <button
                onClick={logout}
                className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
              >
                🚪 Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;