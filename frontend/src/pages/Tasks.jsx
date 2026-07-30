import { useTasks } from "../context/TaskContext";
import TodayTasks from "../components/tasks/TodayTasks";

function Tasks() {

  const { tasks, setTasks } = useTasks();

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        ✅ Task Manager
      </h1>

      <TodayTasks
        tasks={tasks}
        setTasks={setTasks}
      />

    </div>
  );
}

export default Tasks;