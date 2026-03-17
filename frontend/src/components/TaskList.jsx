import { useState, useEffect, useCallback } from "react";
import { getTasks } from "../services/taskService";
import TaskCard from "./TaskCard";

const STATUS_FILTERS   = ["All", "Pending", "Completed"];
const PRIORITY_FILTERS = ["All", "High", "Medium", "Low"];

const TaskList = () => {
  const [tasks, setTasks]               = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [search, setSearch]             = useState("");

  const load = useCallback(async () => {
    const data = await getTasks();
    console.log("Fetched tasks:", data);
    setTasks(data);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = tasks.filter((t) => {
    const matchStatus =
      statusFilter === "All" ||
      (statusFilter === "Pending"   && t.status === "Pending") ||
      (statusFilter === "Completed" && t.status === "Completed");

    const matchPriority =
      priorityFilter === "All" || t.priority === priorityFilter;

    const matchSearch =
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.description || "").toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  const FilterBtn = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wide border transition-all ${
        active
          ? "text-yellow-400 border-yellow-400/35 bg-yellow-400/10"
          : "text-white/40 border-white/10 hover:text-white hover:border-white/25"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-4">
        <input
          type="text"
          placeholder="Search tasks…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/35 transition-all"
        />
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-1.5 flex-wrap">
            {STATUS_FILTERS.map((f) => (
              <FilterBtn
                key={f}
                label={f}
                active={statusFilter === f}
                onClick={() => setStatusFilter(f)}
              />
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {PRIORITY_FILTERS.map((p) => (
              <FilterBtn
                key={p}
                label={p}
                active={priorityFilter === p}
                onClick={() => setPriorityFilter(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <p className="text-xs font-mono text-white/30">
        <span className="text-yellow-400 font-bold">{filtered.length}</span>{" "}
        task{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-20 text-white/20">
          <span className="text-4xl text-yellow-400/20">◈</span>
          <p className="text-base">No tasks found.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} onUpdate={load} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
