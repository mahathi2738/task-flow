import { useTasks } from "../context/TaskContext";
import ProductivityChart from "../components/charts/ProductivityChart";

function Analytics() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        📊 Analytics Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

          <h2 className="text-gray-500">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold mt-3 text-blue-500">
            {totalTasks}
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

          <h2 className="text-gray-500">
            Completed
          </h2>

          <p className="text-4xl font-bold mt-3 text-green-500">
            {completedTasks}
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

          <h2 className="text-gray-500">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-3 text-red-500">
            {pendingTasks}
          </p>

        </div>

      </div>

      {/* Charts */}

      <ProductivityChart tasks={tasks} />

      {/* Completion */}

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Completion Rate
        </h2>

        <div className="w-full bg-gray-300 rounded-full h-6">

          <div
            className="bg-green-500 h-6 rounded-full transition-all duration-700"
            style={{
              width: `${completionRate}%`,
            }}
          />

        </div>

        <p className="mt-4 text-xl font-bold text-green-600">

          {completionRate}% Completed

        </p>

      </div>

    </div>
  );
}

export default Analytics;