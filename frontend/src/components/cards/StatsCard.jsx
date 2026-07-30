import { motion } from "framer-motion";

function StatsCard({
  totalTasks,
  completedTasks,
  pendingTasks,
}) {
  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      color: "#3b82f6",
    },
    {
      title: "Completed",
      value: completedTasks,
      color: "#22c55e",
    },
    {
      title: "Pending",
      value: pendingTasks,
      color: "#f59e0b",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6"
        >
          <p className="text-gray-500 dark:text-gray-400">
            {card.title}
          </p>

          <h2
            className="text-4xl font-bold mt-3"
            style={{ color: card.color }}
          >
            {card.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCard;