import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import "../task-manager.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Task Manager" },
      { name: "description", content: "A simple personal task manager." },
      { property: "og:title", content: "My Task Manager" },
      { property: "og:description", content: "A simple personal task manager." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TaskManager,
});

type Task = { id: number; title: string; completed: boolean };
type Filter = "all" | "active" | "completed";

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    const title = text.trim();
    if (!title) return;
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    setText("");
  };

  const toggleTask = (id: number) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const visible = tasks.filter((t) =>
    filter === "active" ? !t.completed : filter === "completed" ? t.completed : true,
  );
  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <main className="tm-page">
      <div className="tm-card">
        <h1 className="tm-title">My Task Manager</h1>

        <form className="tm-form" onSubmit={addTask}>
          <input
            className="tm-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button className="tm-add" type="submit">Add</button>
        </form>

        <ul className="tm-list">
          {visible.length === 0 && <li className="tm-empty">No tasks</li>}
          {visible.map((t) => (
            <li key={t.id}>
              <button
                className={`tm-task${t.completed ? " done" : ""}`}
                onClick={() => toggleTask(t.id)}
              >
                {t.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="tm-filters">
          {(["all", "active", "completed"] as Filter[]).map((f) => (
            <button
              key={f}
              className={`tm-filter${filter === f ? " selected" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <p className="tm-count">{remaining} tasks remaining</p>
      </div>
    </main>
  );
}
