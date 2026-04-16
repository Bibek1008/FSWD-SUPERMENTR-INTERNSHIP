import React, { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // Current input value
  const [tasks, setTasks] = useState([]); // List of tasks

  // Add task
  const handleAdd = () => {
    if (task.trim() === "") return; // Ignore empty input
    setTasks([...tasks, task]); // Add task to array
    setTask(""); // Clear input
  };

  // Delete task
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove selected task
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Dynamic Task List</h1>

      {/* Input and Add button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 15px" }}>
        Add
      </button>

      {/* Task list */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
              margin: "10px auto",
            }}
          >
            {t}
            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: "#ff4d4d",
                border: "none",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;