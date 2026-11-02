import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [input, setInput] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  function addTask() {
    const title = input.trim();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setInput("");
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <main className="task-manager">
      <h1>My Task Manager</h1>
      <section className="task-input">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button onClick={addTask}>Add</button>
      </section>
      <section className="task-list">
        {filteredTasks.map((task) => (
          <div key={task.id}>
            <button
              type="button"
              aria-pressed={task.completed}
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </button>
          </div>
        ))}
      </section>
      <section className="filter-buttons" data-filter={filter}>
        {["All", "Active", "Completed"].map((filterOption) => (
          <button
            key={filterOption}
            type="button"
            onClick={() => setFilter(filterOption)}
          >
            {filterOption}
          </button>
        ))}
      </section>
      <section className="remaining-task-count">
        <p>Remaining tasks: {tasks.length}</p>
      </section>
    </main>
  );
}

export default App;
