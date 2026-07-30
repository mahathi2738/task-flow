function Button({ children, onClick, color = "pink" }) {
  const colors = {
    pink: "bg-pink-500 hover:bg-pink-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[color]} text-white px-4 py-2 rounded-xl transition`}
    >
      {children}
    </button>
  );
}

export default Button;