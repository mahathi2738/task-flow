import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  const user = {
    name: "Mahathi",
    email: "mahathi@example.com",
    role: "Full Stack Developer",
  };

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        ⚙️ Settings
      </h1>

      {/* Profile */}

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-6">

          <img
            src="https://i.pravatar.cc/120?img=32"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-pink-400"
          />

          <div>

            <h2 className="text-2xl font-bold">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>

            <p className="text-pink-500 mt-2">
              {user.role}
            </p>

          </div>

        </div>

      </div>

      {/* Theme */}

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-xl font-bold">
              🌙 Dark Mode
            </h2>

            <p className="text-gray-500">
              Switch between light and dark theme
            </p>

          </div>

          <button
            onClick={toggleTheme}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>

      </div>

      {/* Logout */}

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl text-lg font-bold transition"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Settings;