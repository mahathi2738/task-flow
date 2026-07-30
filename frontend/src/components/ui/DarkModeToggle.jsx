import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full bg-pink-500 text-white hover:scale-110 transition"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;