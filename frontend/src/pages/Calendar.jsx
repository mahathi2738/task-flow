import { useTasks } from "../context/TaskContext";

function Calendar() {
    const { tasks } = useTasks();

  const today = new Date();

  const overdue = tasks.filter(
    (task) =>
      new Date(task.due_date) < today &&
      task.status !== "Completed"
  );

  const todayTasks = tasks.filter((task) => {
    const date = new Date(task.due_date);

    return (
      date.toDateString() === today.toDateString()
    );
  });

  const upcoming = tasks.filter((task) => {
    const date = new Date(task.due_date);

    return (
      date > today &&
      task.status !== "Completed"
    );
  });

  function TaskCard({ task, color }) {
    return (
      <div
        className={`border-l-4 ${color} bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-3`}
      >
        <h3 className="font-bold text-lg">
          {task.title}
        </h3>

        <p className="text-gray-500">
          {task.category}
        </p>

        <p className="text-sm mt-2">
          📅 {new Date(task.due_date).toLocaleDateString()}
        </p>

        <span className="text-sm font-semibold">
          {task.priority}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        📅 Calendar
      </h1>

      {/* Overdue */}

      <div>

        <h2 className="text-2xl font-bold text-red-500 mb-4">
          🔴 Overdue
        </h2>

        {overdue.length === 0 ? (
          <p>No overdue tasks 🎉</p>
        ) : (
          overdue.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              color="border-red-500"
            />
          ))
        )}

      </div>

      {/* Today */}

      <div>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          🟡 Today
        </h2>

        {todayTasks.length === 0 ? (
          <p>No tasks for today.</p>
        ) : (
          todayTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              color="border-yellow-500"
            />
          ))
        )}

      </div>

      {/* Upcoming */}

      <div>

        <h2 className="text-2xl font-bold text-green-500 mb-4">
          🟢 Upcoming
        </h2>

        {upcoming.length === 0 ? (
          <p>No upcoming tasks.</p>
        ) : (
          upcoming.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              color="border-green-500"
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Calendar;