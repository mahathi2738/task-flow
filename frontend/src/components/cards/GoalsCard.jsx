import Card from "../ui/Card";

function GoalsCard({ tasks = [] }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  const completion =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <Card className="bg-white dark:bg-gray-800 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
        🎯 Goals Progress
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between bg-blue-50 dark:bg-gray-700 p-4 rounded-xl">
          <span>Total Tasks</span>
          <span className="font-bold">{totalTasks}</span>
        </div>

        <div className="flex justify-between bg-green-50 dark:bg-gray-700 p-4 rounded-xl">
          <span>Completed</span>
          <span className="font-bold text-green-600">
            {completedTasks}
          </span>
        </div>

        <div className="flex justify-between bg-yellow-50 dark:bg-gray-700 p-4 rounded-xl">
          <span>Pending</span>
          <span className="font-bold text-yellow-600">
            {pendingTasks}
          </span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span>Goal Completion</span>
            <span className="font-bold">
              {completion}%
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-700"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-6 text-center">
          {completion === 100 ? (
            <p className="text-green-600 font-bold text-lg">
              🏆 All goals completed!
            </p>
          ) : (
            <p className="text-blue-600 font-semibold">
              🚀 Keep going! You're doing great.
            </p>
          )}
        </div>

      </div>
    </Card>
  );
}

export default GoalsCard;