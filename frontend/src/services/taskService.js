import api from "../api/axios";

export const getTasks = async () => {
    const token = localStorage.getItem("token");
  const res = await api.get("/tasks", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const createTask = async (task) => {
  const res = await api.post("/tasks", task, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const updateTask = async (id, task) => {
  const res = await api.put(`/tasks/${id}`, task, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

export const deleteTask = async (id) => {

  const res = await api.delete(`/tasks/${id}`);

  return res.data;

};