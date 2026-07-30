import { motion } from "framer-motion";
import WelcomeCard from "../components/cards/WelcomeCard";
import ClockCard from "../components/cards/ClockCard";
import CalendarCard from "../components/cards/CalendarCard";
import StatsCard from "../components/cards/StatsCard";
import ProgressCard from "../components/cards/ProgressCard";
import GoalsCard from "../components/cards/GoalsCard";
import NotesCard from "../components/cards/NotesCard";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks, loading } = useTasks();
  const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

const pendingTasks = tasks.filter(
  (task) => task.status === "Pending"
).length;
if (loading) {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Top Cards */}

      <div className="grid lg:grid-cols-3 gap-6">
        <WelcomeCard />

        <ClockCard />

        <CalendarCard />
      </div>

      {/* Stats */}
     <StatsCard
  totalTasks={totalTasks}
  completedTasks={completedTasks}
  pendingTasks={pendingTasks}
/>

      {/* Tasks */}


      {/* Charts */}

      {/* Bottom Cards */}

      <div className="grid lg:grid-cols-2 gap-6">
       <ProgressCard
  totalTasks={totalTasks}
  completedTasks={completedTasks}
/>

       <GoalsCard tasks={tasks} />
      </div>

      <NotesCard />
    </motion.div>
  );
}

export default Dashboard;