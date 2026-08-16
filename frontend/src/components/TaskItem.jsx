import { useState } from "react";

function TaskItem({ task, changeStatus, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority || "low");
  const [editDescription, setEditDescription] = useState(task.description);

  const handleSave = () => {
    updateTask(task.id, {
      title: editTitle,
      priority: editPriority,
      description: editDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditPriority(task.priority || "low");
    setEditDescription(task.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      deleteTask(task.id);
    }
  };

  if (isEditing) {
    return (
      <div className={`task-card priority-${task.priority}`}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Priority: </label>
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={`task-card priority-${task.priority}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{task.title}</h3>
        <span className={`badge ${task.priority}`}>{task.priority}</span>
      </div>
      <p>{task.description}</p>
      <p>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => changeStatus(task.id, task.completed)}
          ></input>
          {task.completed ? " Completed" : " Pending"}
        </label>
      </p>
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
