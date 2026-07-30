import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

import Button from "../ui/Button";
import SortableTask from "./SortableTask";
import EditTaskModal from "../modals/EditTaskModal";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskAPI,
} from "../../services/taskService";

function TodayTasks({ tasks, setTasks }) {

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Study");
  const [dueDate, setDueDate] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [editOpen, setEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();

      if (data.success) {
        setTasks(data.tasks);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load tasks");
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) {
      toast.error("Please enter a task");
      return;
    }

    try {
      await createTask({
        title: newTask,
        description: "",
        priority,
        category,
        due_date: dueDate,
      });

      toast.success("Task Added");

      setNewTask("");
      setPriority("Medium");
      setCategory("Study");
      setDueDate("");

      loadTasks();

    } catch (err) {
      console.error(err);
      toast.error("Failed to add task");
    }
  };

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);

    setSelectedTask(task);
    setEditOpen(true);
  };

  const saveEditedTask = async (updatedTask) => {
    try {

      await updateTask(selectedTask.id, updatedTask);

      toast.success("Task Updated");

      setEditOpen(false);
      setSelectedTask(null);

      loadTasks();

    } catch (err) {
      console.error(err);
      toast.error("Update Failed");
    }
  };

  const deleteTask = async (id) => {

    if (!window.confirm("Delete this task?")) return;

    try {

      await deleteTaskAPI(id);

      toast.success("Task Deleted");

      loadTasks();

    } catch (err) {
      console.error(err);
      toast.error("Delete Failed");
    }

  };

  const toggleTask = async (id) => {

    const task = tasks.find((t) => t.id === id);

    try {

      await updateTask(id, {
        ...task,
        due_date: task.due_date
          ? task.due_date.split("T")[0]
          : "",
        status:
          task.status === "Completed"
            ? "Pending"
            : "Completed",
      });

      loadTasks();

    } catch (err) {
      console.error(err);
      toast.error("Status Update Failed");
    }

  };

  const handleDragEnd = (event) => {

    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {

      const oldIndex = tasks.findIndex(
        (task) => String(task.id) === active.id
      );

      const newIndex = tasks.findIndex(
        (task) => String(task.id) === over.id
      );

      setTasks(arrayMove(tasks, oldIndex, newIndex));

    }

  };
    const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";

      case "Medium":
        return "bg-yellow-500";

      default:
        return "bg-green-500";
    }
  };

  const filteredTasks = tasks.filter((task) => {
  const title = (task.title || "").toLowerCase();
  const searchText = search.trim().toLowerCase();

  const matchesSearch = title.includes(searchText);

  if (filter === "Completed") {
    return matchesSearch && task.status === "Completed";
  }

  if (filter === "Pending") {
    return matchesSearch && task.status === "Pending";
  }

  return matchesSearch;
});
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;
  function getRemainingDays(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  if (diff < 0) return "🔴 Overdue";
  if (diff === 0) return "🟡 Due Today";
  if (diff === 1) return "🟠 Tomorrow";

  return `🟢 ${diff} days left`;
}
console.log("Filtered Tasks:", filteredTasks);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Today's Tasks
      </h2>

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
          <h3 className="text-sm">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-5 text-white">
          <h3 className="text-sm">Completed</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-5 text-white">
          <h3 className="text-sm">Pending</h3>
          <p className="text-3xl font-bold">{pendingTasks}</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-5 text-white">
          <h3 className="text-sm">High Priority</h3>
          <p className="text-3xl font-bold">{highPriorityTasks}</p>
        </div>

      </div>

      {/* Search & Filter */}

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="🔍 Search Task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>

      </div>

      {/* Add Task */}

      <div className="grid md:grid-cols-5 gap-3 mb-8">

        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task Title"
          className="border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        >
          <option>Study</option>
          <option>Coding</option>
          <option>Work</option>
          <option>Health</option>
          <option>Personal</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded-xl px-4 py-3 dark:bg-gray-700 dark:text-white"
        />

        <Button color="pink" onClick={addTask}>
          Add Task
        </Button>

      </div>
      {filteredTasks.length === 0 && (
  <div className="flex flex-col items-center justify-center py-20">

    <div className="text-7xl">
      📋
    </div>

    <h2 className="text-3xl font-bold mt-4">
      No Tasks Found
    </h2>

    <p className="text-gray-500 mt-2">
      Start by creating your first task.
    </p>

  </div>
)}
{filteredTasks.length > 0 && (
<DndContext
  collisionDetection={closestCenter}
  onDragEnd={handleDragEnd}
>

  <SortableContext
    items={filteredTasks.map((task) => String(task.id))}
    strategy={verticalListSortingStrategy}
  >

      {filteredTasks.map((task) => (

        <SortableTask
          key={task.id}
          task={task}
        >

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition p-5">

            <div className="flex justify-between items-start">

              {/* Left */}

              <div>

                <h3
                  className={`text-lg font-semibold ${
                    task.status === "Completed"
                      ? "line-through text-gray-400"
                      : "dark:text-white"
                  }`}
                >
                  {task.title}
                </h3>

                <div className="flex gap-2 mt-3">

                    <span
  className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
    task.priority === "High"
      ? "bg-red-500"
      : task.priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500"
  }`}
>
  {task.priority}
</span>
                </div>

                {task.due_date && (

  <div className="mt-3">

  <p className="text-sm text-gray-500">
    📅 Due : {new Date(task.due_date).toLocaleDateString()}
  </p>

  <p className="text-sm font-semibold">
    {getRemainingDays(task.due_date)}
  </p>

</div>

                )}

              </div>

              {/* Right */}

              <div className="flex gap-3 items-center">

                <button
                  onClick={() => editTask(task.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit size={20} />
                </button>

                <Button
                  color="red"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>

                <Button
                  color={
                    task.status === "Completed"
                      ? "green"
                      : "pink"
                  }
                  onClick={() => toggleTask(task.id)}
                >
                  {task.status}
                </Button>

              </div>

            </div>

          </div>

        </SortableTask>

      ))}
  </SortableContext>

</DndContext>
)}
<EditTaskModal
  isOpen={editOpen}
  task={selectedTask}
  onClose={() => {
    setEditOpen(false);
    setSelectedTask(null);
  }}
  onSave={saveEditedTask}
/>

</div>
);
}

export default TodayTasks;