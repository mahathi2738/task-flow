import pool from "../config/db.js";
// Create Task
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      category,
      due_date,
    } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Task title is required",
      });
    }

    const formattedDueDate = due_date
      ? due_date.split("T")[0]
      : null;

    const [result] = await pool.query(
      `INSERT INTO tasks
      (
        user_id,
        title,
        description,
        priority,
        category,
        due_date
      )
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        title,                    // ✅ Fixed
        description || "",        // ✅ Fixed
        priority || "Medium",
        category || "Personal",
        formattedDueDate,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      taskId: result.insertId,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get All Tasks
// ==========================
export const getTasks = async (req, res) => {
  try {

    const [tasks] = await pool.query(
      `SELECT *
       FROM tasks
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json({
      success: true,
      tasks,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Update Task
// ==========================
export const updateTask = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      title,
      description,
      priority,
      category,
      due_date,
      status,
    } = req.body;

    const formattedDueDate = due_date
      ? due_date.split("T")[0]
      : null;

    const [result] = await pool.query(
      `UPDATE tasks
       SET
         title = ?,
         description = ?,
         priority = ?,
         category = ?,
         due_date = ?,
         status = ?
       WHERE id = ?
       AND user_id = ?`,
      [
        title,
        description || "",
        priority,
        category,
        formattedDueDate,
        status,
        id,
        req.user.id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task updated successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Task
// ==========================
export const deleteTask = async (req, res) => {
  try {

    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM tasks WHERE id = ? AND user_id = ?",
      [id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};