import Card from "../ui/Card";

function ClockCard() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = now.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="bg-blue-100 dark:bg-blue-900 transition-all duration-300">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
        🕒 Current Time
      </h2>

      <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-gray-800 dark:text-white">
        {time}
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {date}
      </p>
    </Card>
  );
}

export default ClockCard;