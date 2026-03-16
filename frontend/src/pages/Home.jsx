import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../services/taskService";

const Home = () => {
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0, high: 0 });

  useEffect(() => {
    const tasks = getTasks();
    setStats({
      total:     tasks.length,
      pending:   tasks.filter((t) => t.status !== "completed").length,
      completed: tasks.filter((t) => t.status === "completed").length,
      high:      tasks.filter((t) => t.priority === "High" && t.status !== "completed").length,
    });
  }, []);

  const completionPct =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  const statCards = [
    { label: "Total Tasks",   value: stats.total,     color: "text-white"        },
    { label: "Pending",       value: stats.pending,   color: "text-yellow-400"   },
    { label: "Completed",     value: stats.completed, color: "text-emerald-400"  },
    { label: "High Priority", value: stats.high,      color: "text-red-400"      },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-14 flex flex-col gap-12">

      {/* Hero */}
      <section className="flex flex-col gap-4">
        <p className="text-xs font-mono uppercase tracking-[0.14em] text-yellow-400">
          ◈ Your Command Center
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Stay in control.<br />
          <span className="text-yellow-400">Get things done.</span>
        </h1>
        <p className="text-white/40 text-lg max-w-md leading-relaxed">
          A minimal, focused task manager built for people who mean business.
        </p>
        <div className="flex items-center gap-4 flex-wrap mt-2">
          <Link
            to="/add-task"
            className="px-6 py-3 bg-yellow-400 text-gray-950 font-bold rounded-xl text-sm hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(250,204,21,0.3)] transition-all"
          >
            + Add New Task
          </Link>
          <Link
            to="/tasks"
            className="text-white/50 text-sm font-medium hover:text-white transition-colors"
          >
            View All Tasks →
          </Link>
        </div>
      </section>

      {/* Stats grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-1 hover:-translate-y-1 transition-transform"
          >
            <span className={`text-4xl font-extrabold tracking-tight ${color}`}>
              {value}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/30">
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* Progress bar */}
      {stats.total > 0 && (
        <section className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-white/30">
              Overall Progress
            </span>
            <span className="text-sm font-bold text-yellow-400">{completionPct}%</span>
          </div>
          <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-1000"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </section>
      )}

      {/* Tip */}
      <section className="flex items-start gap-3 bg-yellow-400/5 border border-yellow-400/15 rounded-2xl px-5 py-4">
        <span className="text-yellow-400 mt-0.5">✦</span>
        <p className="text-sm text-white/40 leading-relaxed">
          <span className="text-white/70 font-semibold">Pro tip:</span> Use the priority
          filter on the All Tasks page to focus on what matters most right now.
        </p>
      </section>
    </div>
  );
};

export default Home;