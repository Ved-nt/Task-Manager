import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/taskService";

const PRIORITIES = ["Low", "Medium", "High"];
const CATEGORIES = ["Work", "Personal", "Health", "Finance", "Learning", "Other"];

const priorityStyles = {
  Low:    "text-emerald-400 bg-emerald-400/10 border-emerald-400/40",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/40",
  High:   "text-red-400 bg-red-400/10 border-red-400/40",
};

const AddTask = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Work",
    dueDate: "",
    status: "Pending"   // default status
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    await addTask(form);
    setSubmitted(true);
    setTimeout(() => navigate("/tasks"), 1200);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-up">
      <p className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2">
        New Task
      </p>
      <h2 className="text-4xl font-extrabold tracking-tight text-white mb-8">
        What needs to be done?
      </h2>

      {submitted ? (
        <div className="flex items-center gap-3 bg-emerald-400/10 border border-emerald-400/30 rounded-xl px-6 py-4 text-emerald-400 font-semibold text-base">
          <span className="text-lg">✦</span> Task created! Redirecting…
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">
              Task Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Review Q3 reports"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/40 focus:bg-yellow-400/5 transition-all"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Add more context or notes…"
              rows={4}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/40 focus:bg-yellow-400/5 transition-all resize-none"
            />
          </div>

          {/* Priority + Category */}
          <div className="flex gap-5 flex-wrap">
            {/* Priority pills */}
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                Priority
              </label>
              <div className="flex gap-2">
                {PRIORITIES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setForm({ ...form, priority: p })}
                    className={`px-4 py-1.5 rounded-full border text-xs font-mono cursor-pointer transition-all ${
                      form.priority === p
                        ? priorityStyles[p]
                        : "text-white/40 border-white/10 hover:text-white hover:border-white/30"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-yellow-400/40 transition-all cursor-pointer"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} className="bg-gray-900">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">
              Due Date
            </label>
            <input
              type="text"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              placeholder="dd-MM-yyyy"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/40 transition-all w-fit"
            />
          </div>


          {/* Status */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-yellow-400/40 transition-all cursor-pointer"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-white/40 text-sm font-semibold hover:text-white hover:border-white/30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-yellow-400 text-gray-950 text-sm font-bold hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(250,204,21,0.3)] transition-all"
            >
              Create Task ✦
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;
