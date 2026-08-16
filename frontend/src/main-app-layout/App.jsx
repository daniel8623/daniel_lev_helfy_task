import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (newTaskData) => {
    try {
      const response = await fetch("http://localhost:4000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTaskData),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const changeStatus = async (id, currentStatus) => {
    try {
      await fetch(`http://localhost:4000/api/tasks/${id}/toggle`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !currentStatus } : task,
        ),
      );
    } catch (error) {
      console.error("Failed to change status:", error);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, ...updatedData } : task,
        ),
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div
      className="app-container"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h1 style={{ textAlign: "center" }}>Task Manager</h1>
      <TaskForm onAddTask={addTask}></TaskForm>
      <TaskFilter filter={filter} setFilter={setFilter}></TaskFilter>
      <TaskList
        tasks={filteredTasks}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        updateTask={updateTask}
      ></TaskList>
    </div>
  );
}

export default App;
