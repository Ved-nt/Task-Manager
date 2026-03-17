import { deleteTask, updateTask } from "../services/taskService";

const PRIORITY_META = {
  High:   { color: "text-red-400",     bg: "bg-red-400/10",     border: "border-red-400/30",     symbol: "▲" },
  Medium: { color: "text-yellow-400",  bg: "bg-yellow-400/10",  border: "border-yellow-400/30",  symbol: "◆" },
  Low:    { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", symbol: "▼" },
};

const formatDate = (iso) => {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });
};

const TaskCard = ({ task, onUpdate }) => {
  const meta = PRIORITY_META[task.priority] || PRIORITY_META.Medium;
  const isDone = task.status === "Completed";

  const toggleStatus = async () => {
    if (isDone) return; // prevent toggling back once completed
    await updateTask(task.id, {
      ...task,
      status: "Completed",
    });
    onUpdate();
  };

  const handleDelete = async () => {
    if (isDone) return; // prevent deleting completed tasks
    await deleteTask(task.id);
    onUpdate();
  };

  return (
    <div
      className={`flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-4 transition-all duration-200 ${
        isDone
          ? "opacity-50 cursor-not-allowed"
          : "hover:-translate-y-0.5 hover:bg-white/[0.055] hover:border-white/[0.13] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={toggleStatus}
        aria-label="Toggle complete"
        disabled={isDone}
        className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded-md border-2 flex items-center justify-center text-xs transition-all ${
          isDone
            ? "border-emerald-400 bg-emerald-400/15 text-emerald-400 cursor-not-allowed"
            : "border-white/20 hover:border-emerald-400"
        }`}
      >
        {isDone && "✓"}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4">
          <span
            className={`font-semibold text-base tracking-tight ${
              isDone ? "line-through text-white/30" : "text-white"
            }`}
          >
            {task.title}
          </span>
          <span
            className={`flex-shrink-0 text-xs font-mono px-2.5 py-0.5 rounded-full border ${meta.color} ${meta.bg} ${meta.border}`}
          >
            {meta.symbol} {task.priority}
          </span>
        </div>

        {/* Description */}
        {task.description && (
          <p
            className={`text-sm leading-relaxed line-clamp-2 ${
              isDone ? "text-white/20" : "text-white/35"
            }`}
          >
            {task.description}
          </p>
        )}

        {/* Meta chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40">
            {task.category}
          </span>
          {task.dueDate && (
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-yellow-400/5 border border-yellow-400/15 text-yellow-400/70">
              ⏱ {formatDate(task.dueDate)}
            </span>
          )}
          <span
            className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
              isDone
                ? "text-emerald-400/80 bg-emerald-400/5 border-emerald-400/20"
                : "text-yellow-400/80 bg-yellow-400/5 border-yellow-400/20"
            }`}
          >
            {isDone ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      {/* Delete (hidden if completed) */}
      {!isDone && (
        <button
          onClick={handleDelete}
          aria-label="Delete task"
          className="text-white/15 text-sm px-1.5 py-1 rounded-md hover:text-red-400 hover:bg-red-400/10 transition-all mt-0.5 flex-shrink-0"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default TaskCard;
