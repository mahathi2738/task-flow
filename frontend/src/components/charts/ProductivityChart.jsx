import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function ProductivityChart({ tasks = [] }) {
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const categories = [
    "Study",
    "Coding",
    "Work",
    "Health",
    "Personal",
  ];

  const categoryCount = categories.map((category) =>
    tasks.filter((task) => task.category === category).length
  );

  const pieData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#22c55e", "#f59e0b"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: categories,
    datasets: [
      {
        label: "Tasks",
        data: categoryCount,
        backgroundColor: [
          "#3b82f6",
          "#8b5cf6",
          "#ef4444",
          "#10b981",
          "#f97316",
        ],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-5 dark:text-white">
          Task Status
        </h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            No tasks available
          </p>
        ) : (
          <Pie data={pieData} />
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-5 dark:text-white">
          Tasks by Category
        </h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            No tasks available
          </p>
        ) : (
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProductivityChart;