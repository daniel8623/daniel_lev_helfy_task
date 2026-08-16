function TaskFilter({ filter, setFilter }) {
  return (
    <div
      className="task-filter"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <button
        style={{ fontWeight: filter === "All" ? "bold" : "normal" }}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        style={{ fontWeight: filter === "Completed" ? "bold" : "normal" }}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button
        style={{ fontWeight: filter === "Pending" ? "bold" : "normal" }}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;
