import Card from "../ui/Card";

function CalendarCard() {
  const today = new Date();

  const day = today.getDate();

  const month = today.toLocaleString("default", {
    month: "long",
  });

  const year = today.getFullYear();

  const weekday = today.toLocaleString("default", {
    weekday: "long",
  });

  return (
    <Card className="bg-white dark:bg-gray-800 text-black dak:text-white rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-500/20">

      <h2 className="text-3xl font-bold mb-5 text-gray-800 dark:text-white">
        📅 Calendar
      </h2>

      <h1 className="text-7xl font-bold text-pink-600 dark:text-pink-400">
        {day}
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">
        {month} {year}
      </p>

      <p className="text-lg text-gray-500 dark:text-gray-400">
        {weekday}
      </p>

    </Card>
  );
}

export default CalendarCard;