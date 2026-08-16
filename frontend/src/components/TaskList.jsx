import { useState } from "react";
import TaskItem from "./TaskItem";
import { useEffect } from "react";

function TaskList({ tasks, changeStatus, deleteTask, updateTask }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= tasks.length) {
      setCurrentIndex(0);
    }
  }, [tasks.length, currentIndex]);

  if (tasks.length === 0) {
    return (
      <p style={{ textalign: "center", marginTop: "20px" }}>No tasks found</p>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tasks.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tasks.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className="carousel-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        {"<"}
      </button>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "500px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.4s ease-in-out",
            transform: "translateX(-" + currentIndex * 100 + "%)",
          }}
        >
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                minWidth: "100%",
                boxSizing: "border-box",
                padding: "10px",
              }}
            >
              <TaskItem
                task={task}
                changeStatus={changeStatus}
                deleteTask={deleteTask}
                updateTask={updateTask}
              ></TaskItem>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default TaskList;
