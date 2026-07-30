import { useState, useEffect } from "react";
import Button from "../ui/Button";

function EditTaskModal({
  isOpen,
  onClose,
  onSave,
  task,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Study",
    due_date: "",
    status: "Pending",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "Medium",
        category: task.category || "Study",
        due_date: task.due_date
          ? task.due_date.split("T")[0]
          : "",
        status: task.status || "Pending",
      });
    }
  }, [task]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Edit Task
        </h2>

        <div className="space-y-4">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Task Title"
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={3}
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          >
            <option>Study</option>
            <option>Coding</option>
            <option>Work</option>
            <option>Health</option>
            <option>Personal</option>
          </select>

          <input
            type="date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 dark:bg-gray-700 dark:text-white"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <Button color="red" onClick={onClose}>
            Cancel
          </Button>

          <Button color="green" onClick={handleSave}>
            Save Changes
          </Button>

        </div>

      </div>

    </div>
  );
}

export default EditTaskModal;